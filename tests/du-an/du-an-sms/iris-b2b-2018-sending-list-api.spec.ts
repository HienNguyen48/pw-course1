import { test, expect } from "../../../pom/fixtures/api-du-an-iris-sms-fixtures/common-ocb-sendinglist-random-fixture";

let access_token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjpbIkNhbXBhaWduQ01TLkNhbXBhaWduLkNoZWNrU3RhdHVzIiwiQ3VzdG9tZXJSZXBvcnQuVmlldy5BbGxFdm91Y2hlciIsIk9UVE1lc3NhZ2UuTWVzc2FnZS5TZW5kQWRtaW4iLCJDYW1wYWlnbkNNUy5Qcm9tb3RlU21TLk1hbmFnZSIsIkIyQi5DTVMuMjAxOS5DYW1wYWlnbi5DcmVhdGUiLCJJcmlzLk9DQi5SZXBvcnQuVmlldyIsIklyaXMuQjJCMjAxOC5TbXMuVmlld1JlcG9ydCIsIk9UVE1lc3NhZ2UuTWVzc2FnZS5TZW5kIiwiQ2FtcGFpZ25DTVMuUHJvbW90ZVNtUy5BcHByb3ZlIiwiSXJpcy5CMkIyMDE4LlNtcy5WaWV3IiwiQ3VzdG9tZXJSZXBvcnQuVmlldy5Fdm91Y2hlciIsIkJyYW5kbmFtZS5IYW5sZGVyU01TRXJyb3IuTWFuYWdlIiwiSXJpcy5CMkIuU21zLlNlbmQiLCJDYW1wYWlnbkNNUy5BZG1pbiIsIkNhbXBhaWduQ01TLkNhbXBhaWduLkRvd25sb2FkIiwiQ2FtcGFpZ25DTVMuU01TLlJlcG9ydC5WaWV3cyIsIkNhbXBhaWduQ01TLkNhbXBhaWduLkNyZWF0ZSJdLCJ1bmlxdWVfbmFtZSI6ImlyaXMiLCJzdWIiOiIxNzA4ZWU1MS02OGRiLTRlOWEtOTU3Yi0wYmNiNDQ2Y2YzYTMiLCJuYmYiOjE3NjAwODc3MjksImV4cCI6MTc2MDA4OTUyOSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDoyOTkyIiwiYXVkIjoiNDc2QkI5QTEtMDAwMC00OTlGLTg5MjgtNUY1MENFNjQ1NEMzIn0.PWDH4uWVV4Yfr5NlLE-t_-E_4sDXAMDwm3FIHW4ompk';
const grant_type: string = 'password';
const username: string = 'iris';
const password: string = 'iris@123';
const brandname: string = 'IRIS';
const IsCheckDuplicate: string = "1";
const PhoneNumber: string = "84374619213";
const ContentType: string = "1";
const telco: string = "";

// let loginAPITest: LoginAPITest;

test.describe('Dự án SMS môi trường dev', () => {

    test.beforeEach('Testcase 1: Get token', async ({ loginAPI }) => {
        const response = await loginAPI.UserLoginMTTest('password', 'iris', 'iris@123');

        const statusCode = response.status();
        expect(statusCode).toBe(200);
        console.log(`status code: ${response.status()}`);

        access_token = (await response.json()).access_token;
        expect(access_token).toBeDefined();
        expect(access_token.length).toBeGreaterThan(0);
        console.log(`access_token: ${access_token}`);

        //In ra 20 kí tự đầu tiên của token nếu không muốn in toàn bộ token thì sẽ dùng câu lệnh này 
        console.log(`Logged in successfully, token: ${access_token.substring(0, 20)}...`);
    });

    test("B2B 2018 - Sending list", async ({ sendB2B2018SendingListAPI, generateRandomData }) => {

        await test.step(`Testcase 01: B2B 2023 - SendingList - Thành công ưu tiên cao`, async () => {
            // const sendB2B2018MultiSendingList = new SendB2B2018SendingListAPI(request, access_token);
            const SendingList = [];

            for (let i = 1; i <= 2; i++) {
                const { smsId, content } = generateRandomData();
                SendingList.push({
                    "SmsId": smsId,
                    "PhoneNumber": PhoneNumber,
                    "Content": content,
                    "ContentType": ContentType,
                    "Telco": telco
                });

            };

            const guiThanhCongUuTienCao = {
                "IsCheckDuplicate": IsCheckDuplicate,
                "Brandname": brandname,
                SendingList
            };

            console.log("🚀  Testcase 01: B2B 2023 - SendingList - Thành công(Ưu tiên cao)");
            console.log(` => SMS 1: Brandname = ${guiThanhCongUuTienCao.Brandname}, SmsId = ${guiThanhCongUuTienCao.SendingList[0].SmsId}, Content = ${guiThanhCongUuTienCao.SendingList[0].Content}`);
            console.log(` => SMS 2: Brandname = ${guiThanhCongUuTienCao.Brandname}, SmsId = ${guiThanhCongUuTienCao.SendingList[1].SmsId}, Content = ${guiThanhCongUuTienCao.SendingList[1].Content}`);

            // Gửi n request bằng fixture token đã cấu hình
            const responses = await sendB2B2018SendingListAPI.SendB2B2018MultiSendingList(
                guiThanhCongUuTienCao.IsCheckDuplicate,
                guiThanhCongUuTienCao.Brandname,
                guiThanhCongUuTienCao.SendingList
            );
            console.log("👉 Status thực tế:", responses.status());
            expect(responses.status()).toBe(200);

            const body = await responses.json();
            console.log("📩 Response:", JSON.stringify(body, null, 2));

            const { Code, Message, Data } = body;

            console.log("📩 Response:", { Code, Message, Data });
            expect(Code).toBe("201");
            expect(Message).toBe("Success");
            expect(Data).toBe(true);

            console.log("✅ Testcase 01 passed — Response hợp lệ! — Code: 201");

        });

        await test.step(`Testcase 02: B2B 2023 - SendingList - Brandname is invalid(Đối tác chưa đăng ký brandname qua telco này)`, async () => {

            const SendingList = [];
            const brandnameinvalid = "mama";
            const telcoIsInvalid = "aaaaaaa"

            for (let i = 1; i <= 2; i++) {
                const { smsId, content } = generateRandomData();
                SendingList.push({
                    "SmsId": smsId,
                    "PhoneNumber": PhoneNumber,
                    "Content": content,
                    "ContentType": ContentType,
                    "Telco": telcoIsInvalid
                });

            };

            const brandnameIsInvalid = {
                "IsCheckDuplicate": IsCheckDuplicate,
                "Brandname": brandnameinvalid,
                SendingList
            };

            console.log("🚀  Testcase 02: B2B 2023 - SendingList - Brandname is invalid(Đối tác chưa đăng ký brandname qua telco này)");
            console.log(` => SMS 1: Brandname = ${brandnameIsInvalid.Brandname}, SmsId = ${brandnameIsInvalid.SendingList[0].SmsId}, Content = ${brandnameIsInvalid.SendingList[0].Content}, Telco = ${brandnameIsInvalid.SendingList[0].Telco}`);
            console.log(` => SMS 2: Brandname = ${brandnameIsInvalid.Brandname}, SmsId = ${brandnameIsInvalid.SendingList[1].SmsId}, Content = ${brandnameIsInvalid.SendingList[1].Content}, Telco = ${brandnameIsInvalid.SendingList[1].Telco}`);

            // Gửi n request
            const responses = await sendB2B2018SendingListAPI.SendB2B2018MultiSendingList(
                brandnameIsInvalid.IsCheckDuplicate,
                brandnameIsInvalid.Brandname,
                brandnameIsInvalid.SendingList
            );

            console.log("👉 Status thực tế:", responses.status());
            expect(responses.status()).toBe(200);

            const body = await responses.json();
            console.log("📩 Response:", JSON.stringify(body, null, 2));

            const { Code, Message, Data } = body;

            console.log("📩 Response:", { Code, Message, Data });

            expect(Code).toBe("400");
            expect(Message).toBe("Brandname or telco is invalid");
            expect(Data).toBe(false);

            console.log("✅ Testcase 02 passed — Response hợp lệ! — Code: 400");

        });

        await test.step(`Testcase 03: B2B 2023 - SendingList - Brandname is missing(Bỏ trống brandname)`, async () => {
            // const sendB2B2018MultiSendingList = new SendB2B2018SendingListAPI(request, access_token);

            const SendingList = [];
            const brandnameinvalid = "mama";
            const telcoIsInvalid = "aaaaaaa"

            for (let i = 1; i <= 2; i++) {
                const { smsId, content } = generateRandomData();
                SendingList.push({
                    "SmsId": smsId,
                    "PhoneNumber": PhoneNumber,
                    "Content": content,
                    "ContentType": ContentType,
                    "Telco": telco
                });

            };

            const brandnameIsMissing = {
                "IsCheckDuplicate": IsCheckDuplicate,
                "Brandname": "",
                SendingList
            };

            console.log("🚀  Testcase 03: B2B 2023 - SendingList - Brandname is missing(Bỏ trống brandname)");
            console.log(` => SMS 1: Brandname = ${brandnameIsMissing.Brandname}, SmsId = ${brandnameIsMissing.SendingList[0].SmsId}, Content = ${brandnameIsMissing.SendingList[0].Content}`);
            console.log(` => SMS 2: Brandname = ${brandnameIsMissing.Brandname}, SmsId = ${brandnameIsMissing.SendingList[1].SmsId}, Content = ${brandnameIsMissing.SendingList[1].Content}`);

            const responses = await sendB2B2018SendingListAPI.SendB2B2018MultiSendingList(brandnameIsMissing.IsCheckDuplicate, brandnameIsMissing.Brandname, brandnameIsMissing.SendingList);

            console.log("👉 Status thực tế:", responses.status());
            expect(responses.status()).toBe(200);

            const body = await responses.json();
            console.log("📩 Response:", JSON.stringify(body, null, 2));

            const { Code, Message, Data } = body;

            console.log("📩 Response:", { Code, Message, Data });

            expect(Code).toBe("400");
            expect(Message).toBe("Brandname is missing");
            expect(Data).toBe(false);

            console.log("✅ Testcase 03 passed — Response hợp lệ! — Code: 400");

        });

        await test.step(`Testcase 04: B2B 2023 - SendingList - SmsId is invalid(SmsId rỗng hoặc bị bỏ trống)`, async () => {

            // const sendB2B2018MultiSendingList = new SendB2B2018SendingListAPI(request, access_token);

            const SendingList = [];

            for (let i = 1; i <= 1; i++) {
                const { smsId, content } = generateRandomData();
                SendingList.push({
                    "SmsId": "",
                    "PhoneNumber": PhoneNumber,
                    "Content": content,
                    "ContentType": ContentType,
                    "Telco": telco
                });

            };

            const smsIdIsInvalid = {
                "IsCheckDuplicate": IsCheckDuplicate,
                "Brandname": brandname,
                SendingList
            };

            console.log("🚀  Testcase 04: B2B 2023 - SendingList - SmsId is invalid (SmsId rỗng hoặc bị bỏ trống)");
            console.log(` => SMS 1: Brandname = ${smsIdIsInvalid.Brandname}, SmsId = ${smsIdIsInvalid.SendingList[0].SmsId}, Content = ${smsIdIsInvalid.SendingList[0].Content}`);

            const responses = await sendB2B2018SendingListAPI.SendB2B2018MultiSendingList(smsIdIsInvalid.IsCheckDuplicate, smsIdIsInvalid.Brandname, smsIdIsInvalid.SendingList);

            console.log("👉 Status thực tế:", responses.status());
            expect(responses.status()).toBe(200);

            const body = await responses.json();
            console.log("📩 Response:", JSON.stringify(body, null, 2));

            const { Code, Message, Data } = body;

            console.log("📩 Response:", { Code, Message, Data });

            expect(Code).toBe("400");
            expect(Message).toBe("SmsId is invalid");
            expect(Data).toBe(false);

            console.log("✅ Testcase 04 passed — Response hợp lệ! — Code: 400");

        });

        await test.step(`Testcase 05: B2B 2023 - SendingList - PhoneNumber is missing(Số điện thoại rỗng hoặc bị bỏ trống)`, async () => {

            // const sendB2B2018MultiSendingList = new SendB2B2018SendingListAPI(request, access_token);

            const SendingList = [];

            for (let i = 1; i <= 2; i++) {
                const { smsId, content } = generateRandomData();
                SendingList.push({
                    "SmsId": smsId,
                    "PhoneNumber": "",
                    "Content": content,
                    "ContentType": ContentType,
                    "Telco": telco
                });

            };

            const phoneNumberIsMissing = {
                "IsCheckDuplicate": IsCheckDuplicate,
                "Brandname": brandname,
                SendingList
            };

            console.log("🚀  Testcase 04: B2B 2023 - SendingList - SmsId is invalid (SmsId rỗng hoặc bị bỏ trống)");
            console.log(` => SMS 1: Brandname = ${phoneNumberIsMissing.Brandname}, SmsId = ${phoneNumberIsMissing.SendingList[0].SmsId}, Content = ${phoneNumberIsMissing.SendingList[0].Content}`);
            console.log(` => SMS 1: Brandname = ${phoneNumberIsMissing.Brandname}, SmsId = ${phoneNumberIsMissing.SendingList[1].SmsId}, Content = ${phoneNumberIsMissing.SendingList[1].Content}`);

            const responses = await sendB2B2018SendingListAPI.SendB2B2018MultiSendingList(phoneNumberIsMissing.IsCheckDuplicate, phoneNumberIsMissing.Brandname, phoneNumberIsMissing.SendingList);

            console.log("👉 Status thực tế:", responses.status());
            expect(responses.status()).toBe(200);

            const body = await responses.json();
            console.log("📩 Response:", JSON.stringify(body, null, 2));

            const { Code, Message, Data } = body;

            console.log("📩 Response:", { Code, Message, Data });

            expect(Code).toBe("400");
            expect(Message).toBe("PhoneNumber is missing");
            expect(Data).toBe(false);

            console.log("✅ Testcase 05 passed — Response hợp lệ! — Code: 400");

        });

        await test.step(`Testcase 06: B2B 2023 - SendingList - PhoneNumber is invalid(Số điện thoại không đúng định dạng)`, async () => {

            // const sendB2B2018MultiSendingList = new SendB2B2018SendingListAPI(request, access_token);
            const SendingList = [];
            const phoneNumberisinvalid = "+27451200000";

            for (let i = 1; i <= 2; i++) {
                const { smsId, content } = generateRandomData();
                SendingList.push({
                    "SmsId": smsId,
                    "PhoneNumber": phoneNumberisinvalid,
                    "Content": content,
                    "ContentType": ContentType,
                    "Telco": telco
                });

            };

            const phoneNumberIsInvalid = {
                "IsCheckDuplicate": IsCheckDuplicate,
                "Brandname": brandname,
                SendingList
            };

            console.log("🚀  Testcase 06: B2B 2023 - SendingList - PhoneNumber is invalid(Số điện thoại không đúng định dạng)");
            console.log(` => SMS 1: Brandname = ${phoneNumberIsInvalid.Brandname}, SmsId = ${phoneNumberIsInvalid.SendingList[0].SmsId}, Content = ${phoneNumberIsInvalid.SendingList[0].Content}`);
            console.log(` => SMS 1: Brandname = ${phoneNumberIsInvalid.Brandname}, SmsId = ${phoneNumberIsInvalid.SendingList[1].SmsId}, Content = ${phoneNumberIsInvalid.SendingList[1].Content}`);

            const responses = await sendB2B2018SendingListAPI.SendB2B2018MultiSendingList(phoneNumberIsInvalid.IsCheckDuplicate, phoneNumberIsInvalid.Brandname, phoneNumberIsInvalid.SendingList);

            console.log("👉 Status thực tế:", responses.status());
            expect(responses.status()).toBe(200);

            const body = await responses.json();
            console.log("📩 Response:", JSON.stringify(body, null, 2));

            const { Code, Message, Data } = body;

            console.log("📩 Response:", { Code, Message, Data });

            expect(Code).toBe("400");
            expect(Message).toBe("PhoneNumber is invalid");
            expect(Data).toBe(false);

            console.log("✅ Testcase 06 passed — Response hợp lệ! — Code: 400");

        });

        await test.step(`Testcase 07: B2B 2023 - SendingList - Content is missing & Content is invalid (Nội dung rỗng hoặc bị bỏ trống / Nội dung vượt quá độ dài quy định)`, async () => {

            // const sendB2B2018MultiSendingList = new SendB2B2018SendingListAPI(request, access_token);

            let longContent = generateRandomData().content + "A".repeat(10001);
            const { smsId: smsId1, content: content1 } = generateRandomData();
            const { smsId: smsId2, content: content2 } = generateRandomData();
            const contentIsInvalid = ""

            const sms1 = {
                "SmsId": smsId1,
                "PhoneNumber": PhoneNumber,
                "Content": content1,
                "ContentType": ContentType,
                "Telco": telco
            };

            const sms2 = {
                "SmsId": smsId2,
                "PhoneNumber": PhoneNumber,
                "Content": "",
                "ContentType": ContentType,
                "Telco": telco
            };

            const SendingList = [sms1, sms2];

            const contentIsMissingInvalid = {
                "IsCheckDuplicate": IsCheckDuplicate,
                "Brandname": brandname,
                SendingList
            };

            console.log("🚀  Testcase 07: B2B 2023 - SendingList - Content is missing & Content is invalid (Nội dung rỗng hoặc bị bỏ trống / Nội dung vượt quá độ dài quy định)");
            console.log(` => SMS 1: Brandname = ${contentIsMissingInvalid.Brandname}, SmsId = ${contentIsMissingInvalid.SendingList[0].SmsId}, Content = ${contentIsMissingInvalid.SendingList[0].Content}`);
            console.log(` => SMS 2: Brandname = ${contentIsMissingInvalid.Brandname}, SmsId = ${contentIsMissingInvalid.SendingList[1].SmsId}, Content = ${contentIsMissingInvalid.SendingList[1].Content}`);

            const responses = await sendB2B2018SendingListAPI.SendB2B2018MultiSendingList(contentIsMissingInvalid.IsCheckDuplicate, contentIsMissingInvalid.Brandname, contentIsMissingInvalid.SendingList);

            console.log("👉 Status thực tế:", responses.status());
            expect(responses.status()).toBe(200);

            const body = await responses.json();
            console.log("📩 Response:", JSON.stringify(body, null, 2));

            const { Code, Message, Data } = body;

            console.log("📩 Response:", { Code, Message, Data });

            expect(Code).toBe("400");
            expect(Message).toBe("Content is missing");
            //expect(Message).toBe("Content is invalid");
            expect(Data).toBe(false);

            console.log("✅ Testcase 07 passed — Response hợp lệ! — Code: 400");

        });

        await test.step(`Testcase 08: B2B 2023 - SendingList - Content is duplicate & Sms is duplicate (Tin trùng lặp)`, async () => {

            // const sendB2B2018MultiSendingList = new SendB2B2018SendingListAPI(request, access_token);

            const { smsId: smsId1, content: content1 } = generateRandomData();
            const { smsId: smsId2, content: content2 } = generateRandomData();
            const contentIsDuplicate = "content_01"
            const smsIdIsDuplicate = "smsIdDev_999999"

            const sms1 = {
                "SmsId": smsId1,
                "PhoneNumber": PhoneNumber,
                "Content": content1,
                "ContentType": ContentType,
                "Telco": telco
            };

            const sms2 = {
                "SmsId": smsId2,
                "PhoneNumber": PhoneNumber,
                "Content": contentIsDuplicate,
                "ContentType": ContentType,
                "Telco": telco
            };

            const SendingList = [sms1, sms2];

            const contentSmsidDuplicate = {
                "IsCheckDuplicate": IsCheckDuplicate,
                "Brandname": brandname,
                SendingList
            };

            console.log("🚀  Testcase 08: B2B 2023 - SendingList - Content is duplicate & Sms is duplicate (Tin trùng lặp)");
            console.log(` => SMS 1: Brandname = ${contentSmsidDuplicate.Brandname}, SmsId = ${contentSmsidDuplicate.SendingList[0].SmsId}, Content = ${contentSmsidDuplicate.SendingList[0].Content}`);
            console.log(` => SMS 2: Brandname = ${contentSmsidDuplicate.Brandname}, SmsId = ${contentSmsidDuplicate.SendingList[1].SmsId}, Content = ${contentSmsidDuplicate.SendingList[1].Content}`);

            const responses = await sendB2B2018SendingListAPI.SendB2B2018MultiSendingList(contentSmsidDuplicate.IsCheckDuplicate, contentSmsidDuplicate.Brandname, contentSmsidDuplicate.SendingList);

            console.log("👉 Status thực tế:", responses.status());
            expect(responses.status()).toBe(200);

            const body = await responses.json();
            console.log("📩 Response:", JSON.stringify(body, null, 2));

            const { Code, Message, Data } = body;

            console.log("📩 Response:", { Code, Message, Data });

            expect(Code).toBe("400");
            //expect(Message).toBe("SmsId is duplicated");
            expect(Message).toBe("Message is duplicated");
            expect(Data).toBe(false);

            console.log("✅ Testcase 08 passed — Response hợp lệ! — Code: 400");

        });

        await test.step(`Testcase 09: B2B 2023 - SendingList - Messeage is rejected (Nội dung chứa từ khóa bị chặn)`, async () => {

            // const sendB2B2018MultiSendingList = new SendB2B2018SendingListAPI(request, access_token);
            const SendingList = [];
            //Nội dung có chứa từ khóa bị chặn 
            const { content } = generateRandomData();
            const insertPos = Math.floor(Math.random() * content.length);
            const contentWithQC = content.slice(0, insertPos) + "<QC>" + content.slice(insertPos);

            for (let i = 1; i <= 2; i++) {
                const { smsId } = generateRandomData();
                SendingList.push({
                    "SmsId": smsId,
                    "PhoneNumber": PhoneNumber,
                    "Content": contentWithQC,
                    "ContentType": ContentType,
                    "Telco": telco
                });

            };

            const messageIsReject = {
                "IsCheckDuplicate": IsCheckDuplicate,
                "Brandname": brandname,
                SendingList
            };

            console.log("🚀  Testcase 09: B2B 2023 - SendingList - Messeage is rejected (Nội dung chứa từ khóa bị chặn)");
            console.log(` => SMS 1: Brandname = ${messageIsReject.Brandname}, SmsId = ${messageIsReject.SendingList[0].SmsId}, Content = ${messageIsReject.SendingList[0].Content}`);
            console.log(` => SMS 2: Brandname = ${messageIsReject.Brandname}, SmsId = ${messageIsReject.SendingList[1].SmsId}, Content = ${messageIsReject.SendingList[1].Content}`);

            const responses = await sendB2B2018SendingListAPI.SendB2B2018MultiSendingList(messageIsReject.IsCheckDuplicate, messageIsReject.Brandname, messageIsReject.SendingList);

            console.log("👉 Status thực tế:", responses.status());
            expect(responses.status()).toBe(200);

            const body = await responses.json();
            console.log("📩 Response:", JSON.stringify(body, null, 2));

            const { Code, Message, Data } = body;

            console.log("📩 Response:", { Code, Message, Data });

            expect(Code).toBe("400");
            expect(Message).toBe("Message is rejected");
            expect(Data).toBe(false);

            console.log("✅ Testcase 09 passed — Response hợp lệ! — Code: 400");

        });


    });

});