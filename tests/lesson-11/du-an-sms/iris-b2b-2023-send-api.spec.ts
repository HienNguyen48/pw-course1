import { test, expect, APIResponse } from '@playwright/test';
import { LoginAPITest } from 'pom/api/login-dev-pom-sms-iris-api';
import crypto from 'crypto';
import { SendB2B2023SendAPI } from 'pom/api/sending-don-b2b-2023-dev-pom-sms-api';
import { error } from 'console';

let access_token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjpbIkNhbXBhaWduQ01TLkNhbXBhaWduLkNoZWNrU3RhdHVzIiwiQ3VzdG9tZXJSZXBvcnQuVmlldy5BbGxFdm91Y2hlciIsIk9UVE1lc3NhZ2UuTWVzc2FnZS5TZW5kQWRtaW4iLCJDYW1wYWlnbkNNUy5Qcm9tb3RlU21TLk1hbmFnZSIsIkIyQi5DTVMuMjAxOS5DYW1wYWlnbi5DcmVhdGUiLCJJcmlzLk9DQi5SZXBvcnQuVmlldyIsIklyaXMuQjJCMjAxOC5TbXMuVmlld1JlcG9ydCIsIk9UVE1lc3NhZ2UuTWVzc2FnZS5TZW5kIiwiQ2FtcGFpZ25DTVMuUHJvbW90ZVNtUy5BcHByb3ZlIiwiSXJpcy5CMkIyMDE4LlNtcy5WaWV3IiwiQ3VzdG9tZXJSZXBvcnQuVmlldy5Fdm91Y2hlciIsIkJyYW5kbmFtZS5IYW5sZGVyU01TRXJyb3IuTWFuYWdlIiwiSXJpcy5CMkIuU21zLlNlbmQiLCJDYW1wYWlnbkNNUy5BZG1pbiIsIkNhbXBhaWduQ01TLkNhbXBhaWduLkRvd25sb2FkIiwiQ2FtcGFpZ25DTVMuU01TLlJlcG9ydC5WaWV3cyIsIkNhbXBhaWduQ01TLkNhbXBhaWduLkNyZWF0ZSJdLCJ1bmlxdWVfbmFtZSI6ImlyaXMiLCJzdWIiOiIxNzA4ZWU1MS02OGRiLTRlOWEtOTU3Yi0wYmNiNDQ2Y2YzYTMiLCJuYmYiOjE3NjAwODc3MjksImV4cCI6MTc2MDA4OTUyOSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDoyOTkyIiwiYXVkIjoiNDc2QkI5QTEtMDAwMC00OTlGLTg5MjgtNUY1MENFNjQ1NEMzIn0.PWDH4uWVV4Yfr5NlLE-t_-E_4sDXAMDwm3FIHW4ompk';
const grant_type: string = 'password';
const username: string = 'iris';
const password: string = 'iris@123';
const brandname: string = 'IRIS';
const IsCheckDuplicate: string = "1";
const PhoneNumber: string = "84374619213";
const ContentType: string = "1";
const duplicatedSmsId: string = "SmsId_01";
const duplicatedContent: string = "Content_01";
const telco: string = "";
const telcoInvalid = "dfsfsdfsd";
const sendTime: string = "";

let loginAPITest: LoginAPITest;

//nội dung trên 1000 ký tự 
let longContent = generateRandomData().content + "A".repeat(1001);

//Nội dung có chứa từ khóa bị chặn 
const { content } = generateRandomData();
const insertPos = Math.floor(Math.random() * content.length);
const contentWithQC = content.slice(0, insertPos) + "<QC>" + content.slice(insertPos);

// Random
function generateRandomData() {
    const randomNum = crypto.randomInt(10000000000); // random 10 chữ số
    const smsId = `smsIdDev_${randomNum}`;
    const content = `Nội dung lần gửi thứ_${randomNum}`;
    return { smsId, content };
}

const dataList = [];
for (let i = 0; i < 1000; i++) {
    dataList.push(generateRandomData());
}

const priority = [
    { "name": "Cao", "value": 10 },
    { "name": "Trung Bình", "value": 5 },
    { "name": "Thấp", "value": 1 }
]

test.describe('Dự án SMS môi trường dev', () => {

    test.beforeEach('Testcase 1: Get token', async ({ request }) => {

        loginAPITest = new LoginAPITest(request);
        const response: APIResponse = await loginAPITest.UserLoginMTTest(grant_type, username, password);

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


    test("B2B 2023 - Send", async ({ request }) => {
        const highPriority = priority.find(p => p.name === "Cao")!;

        await test.step(`Testcase 01: B2B 2023 Send - Mã lỗi 1 - Lỗi do tài khoản gửi tin không hợp lệ`, async () => {
            const sendB2B2023SendAPI = new SendB2B2023SendAPI(request, access_token);

            for (let i = 1; i <= 1; i++) {// gửi 1 sms 
                const { smsId, content } = generateRandomData();
                console.log(`🟢 Testcase 01: B2B 2023 Send - Mã lỗi 1 - Lỗi do tài khoản gửi tin không hợp lệ => Gửi lần ${i}: smsId: ${smsId}, content: ${content}, brandname: ${brandname}`);

                try {
                    const response: APIResponse = await sendB2B2023SendAPI.SendB2B2023Sending(
                        IsCheckDuplicate,
                        smsId,
                        PhoneNumber,
                        content,
                        ContentType,
                        telcoInvalid,
                        sendTime,
                        brandname);

                    const statusCode: number = response.status();
                    const responseBody = await response.json();
                    console.log(`Response body: ${JSON.stringify(responseBody, null, 2)}`);

                    if (statusCode === 200) {
                        console.log(`✅ Gửi thành công có: smsId: ${smsId}, content: ${content}`);
                    } else {
                        console.log(`❌ Gửi thất bại có: smsId: ${smsId}, content: ${content}, status: ${statusCode}`);
                    }
                    expect(statusCode, `Gửi SMS lần ${i} thất bại`).toBe(200);
                    expect(responseBody.Code, "Kiểm tra mã Code trong body").toBe("1"); // Code=1 => thành công


                } catch (err) {
                    console.log(`❌ Lỗi khi gửi request: smsId: ${smsId}, content: ${content}`);
                    console.log(`Error: ${err}`);
                    throw err;
                }
            };
        });

        await test.step(`Testcase 02: B2B 2023 Send - Mã lỗi 2 - Lỗi Brandname rỗng hoặc bị bỏ trống`, async () => {
            const sendB2B2023SendAPI = new SendB2B2023SendAPI(request, access_token);

            for (let i = 1; i <= 1; i++) {// gửi 1 sms 
                const { smsId, content } = generateRandomData();

                // console.log(`🚀 Testcase 02: B2B 2023 Send - Mã lỗi 2 - Lỗi Brandname rỗng hoặc bị bỏ trống => Gửi lần ${i}: smsId: ${smsId}, content: ${content}, brandname: ${brandname}`);
                const sendMaLoi02 = [
                    {
                        "Brandname": "",
                        "IsCheckDuplicate": IsCheckDuplicate,
                        "Priority": highPriority.value.toString(),
                        "SmsId": generateRandomData().smsId,
                        "PhoneNumber": PhoneNumber,
                        "Content": generateRandomData().content,
                        "ContentType": ContentType,
                        "Telco": telco,
                        "SendTime": sendTime
                    }
                ];
                console.log("🚀 Testcase 02 - Kiểm tra Brandname rỗng hoặc bỏ trống");
                console.log(`➡️  SMS: ${JSON.stringify(sendMaLoi02[0], null, 2)}`);

                try {
                    const sms = sendMaLoi02[0];

                    const response: APIResponse = await sendB2B2023SendAPI.SendB2B2023Sending(
                        sms.IsCheckDuplicate,
                        sms.SmsId,
                        sms.PhoneNumber,
                        sms.Content,
                        sms.ContentType,
                        sms.Telco,
                        sms.SendTime,
                        sms.Brandname
                    );

                    const statusCode = response.status();
                    const responseBody = await response.json();

                    console.log(`📩 Status: ${statusCode}`)
                    console.log(`📄 Body: ${JSON.stringify(responseBody, null, 2)}`);

                    expect(statusCode).toBe(200);
                    expect(responseBody.Code, "Kiểm tra mã code trả về").toBe("2");

                    console.log("✅ Testcase 02 passed — xử lý đúng mã lỗi 2 (Brandname rỗng hoặc bỏ trống)")

                } catch (err) {
                    console.error("❌ Lỗi khi gửi request:", err);
                    throw err;
                }
            }
        });

        await test.step(`Testcase 03: B2B 2023 Send - Mã lỗi 3 - Lỗi Brandname không hợp lệ`, async () => {
            const sendB2B2023SendAPI = new SendB2B2023SendAPI(request, access_token);

            for (let i = 1; i <= 1; i++) {// gửi 1 sms 
                const { smsId, content } = generateRandomData();

                const sendMaLoi03 = [
                    {
                        "Brandname": "mama",
                        "IsCheckDuplicate": IsCheckDuplicate,
                        "Priority": highPriority.value.toString(),
                        "SmsId": generateRandomData().smsId,
                        "PhoneNumber": PhoneNumber,
                        "Content": generateRandomData().content,
                        "ContentType": ContentType,
                        "Telco": telco,
                        "SendTime": sendTime
                    }
                ];
                console.log("🚀 Testcase 03: B2B 2023 Send - Mã lỗi 3 - Lỗi Brandname không hợp lệ");
                console.log(`➡️  SMS: ${JSON.stringify(sendMaLoi03[0], null, 2)}`);

                try {
                    const sms = sendMaLoi03[0];

                    const response: APIResponse = await sendB2B2023SendAPI.SendB2B2023Sending(
                        sms.IsCheckDuplicate,
                        sms.SmsId,
                        sms.PhoneNumber,
                        sms.Content,
                        sms.ContentType,
                        sms.Telco,
                        sms.SendTime,
                        sms.Brandname
                    );

                    const statusCode = response.status();
                    const responseBody = await response.json();

                    console.log(`📩 Status: ${statusCode}`)
                    console.log(`📄 Body: ${JSON.stringify(responseBody, null, 2)}`);

                    expect(statusCode).toBe(200);
                    expect(responseBody.Code, "Kiểm tra mã code trả về").toBe("3");

                    console.log("✅ Testcase 03: B2B 2023 Send - Mã lỗi 3 - Lỗi Brandname không hợp lệ")

                } catch (err) {
                    console.error("❌ Lỗi khi gửi request:", err);
                    throw err;
                }
            }
        });

        await test.step(`Testcase 04: B2B 2023 Send - Mã lỗi 7 - SmsId không hợp lệ`, async () => {
            const sendB2B2023SendAPI = new SendB2B2023SendAPI(request, access_token);

            for (let i = 1; i <= 1; i++) {// gửi 1 sms 
                const { smsId, content } = generateRandomData();

                const sendMaLoi07 = [
                    {
                        "Brandname": brandname,
                        "IsCheckDuplicate": IsCheckDuplicate,
                        "Priority": highPriority.value.toString(),
                        "SmsId": "",
                        "PhoneNumber": PhoneNumber,
                        "Content": generateRandomData().content,
                        "ContentType": ContentType,
                        "Telco": telco,
                        "SendTime": sendTime
                    }
                ];
                console.log("🚀 Testcase 04: B2B 2023 Send - Mã lỗi 7 - SmsId không hợp lệ");
                console.log(`➡️  SMS: ${JSON.stringify(sendMaLoi07[0], null, 2)}`);

                try {
                    const sms = sendMaLoi07[0];

                    const response: APIResponse = await sendB2B2023SendAPI.SendB2B2023Sending(
                        sms.IsCheckDuplicate,
                        sms.SmsId,
                        sms.PhoneNumber,
                        sms.Content,
                        sms.ContentType,
                        sms.Telco,
                        sms.SendTime,
                        sms.Brandname
                    );

                    const statusCode = response.status();
                    const responseBody = await response.json();

                    console.log(`📩 Status: ${statusCode}`)
                    console.log(`📄 Body: ${JSON.stringify(responseBody, null, 2)}`);

                    expect(statusCode).toBe(200);
                    expect(responseBody.Code, "Kiểm tra mã code trả về").toBe("7");

                    console.log("✅ Testcase 04: B2B 2023 Send - Mã lỗi 7 - SmsId không hợp lệ")

                } catch (err) {
                    console.error("❌ Lỗi khi gửi request:", err);
                    throw err;
                }
            }
        });

        await test.step(`Testcase 05: B2B 2023 Send - Mã lỗi 8 - Lỗi số điện thoại rỗng hoặc bị bỏ trống`, async () => {
            const sendB2B2023SendAPI = new SendB2B2023SendAPI(request, access_token);

            for (let i = 1; i <= 1; i++) {// gửi 1 sms 
                const { smsId, content } = generateRandomData();

                const sendMaLoi08 =
                {
                    "Brandname": brandname,
                    "IsCheckDuplicate": IsCheckDuplicate,
                    "Priority": highPriority.value.toString(),
                    "SmsId": smsId,
                    "PhoneNumber": "",
                    "Content": content,
                    "ContentType": ContentType,
                    "Telco": telco,
                    "SendTime": sendTime
                }

                console.log("🚀 Testcase 05: B2B 2023 Send - Mã lỗi 8 - Lỗi số điện thoại rỗng hoặc bị bỏ trống");
                console.log(`➡️  SMS: ${JSON.stringify(sendMaLoi08, null, 2)}`);

                const phoneNumberStatus = await sendB2B2023SendAPI.checkPhoneNumber(sendMaLoi08.PhoneNumber);
                console.log("phoneNumberStatus =", phoneNumberStatus);
                expect(phoneNumberStatus).toBe("invalid");

                try {
                    const response: APIResponse = await sendB2B2023SendAPI.SendB2B2023Sending(
                        sendMaLoi08.IsCheckDuplicate,
                        sendMaLoi08.SmsId,
                        sendMaLoi08.PhoneNumber,
                        sendMaLoi08.Content,
                        sendMaLoi08.ContentType,
                        sendMaLoi08.Telco,
                        sendMaLoi08.SendTime,
                        sendMaLoi08.Brandname
                    );

                    const statusCode = response.status();
                    const responseBody = await response.json();

                    console.log(`📩 Status: ${statusCode}`)
                    console.log(`📄 Body: ${JSON.stringify(responseBody, null, 2)}`);

                    expect(statusCode).toBe(200);
                    expect(responseBody.Code, "Kiểm tra mã code trả về").toBe("8");

                    console.log("✅ Testcase 05: B2B 2023 Send - Mã lỗi 8 - Lỗi số điện thoại rỗng hoặc bị bỏ trống")

                } catch (err) {
                    console.error("❌ Lỗi khi gửi request:", err);
                    throw err;
                }
            }
        });

        await test.step(`Testcase 06: B2B 2023 Send - Mã lỗi 9 - Lỗi số điện thoại không đúng định dạng`, async () => {
            const sendB2B2023SendAPI = new SendB2B2023SendAPI(request, access_token);

            for (let i = 1; i <= 1; i++) {// gửi 1 sms 
                const { smsId, content } = generateRandomData();

                const sendMaLoi09 =
                {
                    "Brandname": brandname,
                    "IsCheckDuplicate": IsCheckDuplicate,
                    "Priority": highPriority.value.toString(),
                    "SmsId": generateRandomData().smsId,
                    "PhoneNumber": "374619213",
                    "Content": generateRandomData().content,
                    "ContentType": ContentType,
                    "Telco": telco,
                    "SendTime": sendTime
                }

                console.log("🚀 Testcase 06: B2B 2023 Send - Mã lỗi 9 - Lỗi số điện thoại không đúng định dạng");
                console.log(`➡️  SMS: ${JSON.stringify(sendMaLoi09, null, 2)}`);

                const phoneNumberStatus = await sendB2B2023SendAPI.checkPhoneNumber(sendMaLoi09.PhoneNumber);
                console.log("phoneNumberStatus =", phoneNumberStatus);
                expect(phoneNumberStatus).toBe("invalid");

                try {
                    const response: APIResponse = await sendB2B2023SendAPI.SendB2B2023Sending(
                        sendMaLoi09.IsCheckDuplicate,
                        sendMaLoi09.SmsId,
                        sendMaLoi09.PhoneNumber,
                        sendMaLoi09.Content,
                        sendMaLoi09.ContentType,
                        sendMaLoi09.Telco,
                        sendMaLoi09.SendTime,
                        sendMaLoi09.Brandname
                    );

                    const statusCode = response.status();
                    const responseBody = await response.json();

                    console.log(`📩 Status: ${statusCode}`)
                    console.log(`📄 Body: ${JSON.stringify(responseBody, null, 2)}`);

                    expect(statusCode).toBe(200);
                    expect(responseBody.Code, "Kiểm tra mã code trả về").toBe("9");

                    console.log("✅ Testcase 06: B2B 2023 Send - Mã lỗi 9 - Lỗi số điện thoại không đúng định dạng")

                } catch (err) {
                    console.error("❌ Lỗi khi gửi request:", err);
                    throw err;
                }
            }
        });

        await test.step(`Testcase 07: B2B 2023 Send - Mã lỗi 10 - Lỗi do nội dung tin rỗng hoặc bị bỏ trống`, async () => {
            const sendB2B2023SendAPI = new SendB2B2023SendAPI(request, access_token);

            for (let i = 1; i <= 1; i++) {// gửi 1 sms 
                const { smsId, content } = generateRandomData();

                const sendMaLoi10 =
                {
                    "Brandname": brandname,
                    "IsCheckDuplicate": IsCheckDuplicate,
                    "Priority": highPriority.value.toString(),
                    "SmsId": generateRandomData().smsId,
                    "PhoneNumber": PhoneNumber,
                    "Content": "",
                    "ContentType": ContentType,
                    "Telco": telco,
                    "SendTime": sendTime
                }

                console.log("🚀 Testcase 07: B2B 2023 Send - Mã lỗi 10 - Lỗi do nội dung tin rỗng hoặc bị bỏ trống");
                console.log(`➡️  SMS: ${JSON.stringify(sendMaLoi10, null, 2)}`);

                try {
                    const response: APIResponse = await sendB2B2023SendAPI.SendB2B2023Sending(
                        sendMaLoi10.IsCheckDuplicate,
                        sendMaLoi10.SmsId,
                        sendMaLoi10.PhoneNumber,
                        sendMaLoi10.Content,
                        sendMaLoi10.ContentType,
                        sendMaLoi10.Telco,
                        sendMaLoi10.SendTime,
                        sendMaLoi10.Brandname
                    );

                    const statusCode = response.status();
                    const responseBody = await response.json();

                    console.log(`📩 Status: ${statusCode}`)
                    console.log(`📄 Body: ${JSON.stringify(responseBody, null, 2)}`);

                    expect(statusCode).toBe(200);
                    expect(responseBody.Code, "Kiểm tra mã code trả về").toBe("10");

                    console.log("✅ Testcase 07: B2B 2023 Send - Mã lỗi 10 - Lỗi do nội dung tin rỗng hoặc bị bỏ trống")

                } catch (err) {
                    console.error("❌ Lỗi khi gửi request:", err);
                    throw err;
                }
            }
        });

        await test.step(`Testcase 08: B2B 2023 Send - Mã lỗi 11 - Lỗi do nội dung vượt quá độ dài quy định`, async () => {
            const sendB2B2023SendAPI = new SendB2B2023SendAPI(request, access_token);

            for (let i = 1; i <= 1; i++) {// gửi 1 sms 
                const { smsId, content } = generateRandomData();

                const sendMaLoi11 =
                {
                    "Brandname": brandname,
                    "IsCheckDuplicate": IsCheckDuplicate,
                    "Priority": highPriority.value.toString(),
                    "SmsId": generateRandomData().smsId,
                    "PhoneNumber": PhoneNumber,
                    "Content": longContent,
                    "ContentType": ContentType,
                    "Telco": telco,
                    "SendTime": sendTime
                }

                console.log("🚀 Testcase 08: B2B 2023 Send - Mã lỗi 11 - Lỗi do nội dung vượt quá độ dài quy định");
                console.log(`➡️  SMS: ${JSON.stringify(sendMaLoi11, null, 2)}`);

                try {
                    const response: APIResponse = await sendB2B2023SendAPI.SendB2B2023Sending(
                        sendMaLoi11.IsCheckDuplicate,
                        sendMaLoi11.SmsId,
                        sendMaLoi11.PhoneNumber,
                        sendMaLoi11.Content,
                        sendMaLoi11.ContentType,
                        sendMaLoi11.Telco,
                        sendMaLoi11.SendTime,
                        sendMaLoi11.Brandname
                    );

                    const statusCode = response.status();
                    const responseBody = await response.json();

                    console.log(`📩 Status: ${statusCode}`)
                    console.log(`📄 Body: ${JSON.stringify(responseBody, null, 2)}`);

                    expect(statusCode).toBe(200);
                    expect(responseBody.Code, "Kiểm tra mã code trả về").toBe("11");

                    console.log("✅ Testcase 08: B2B 2023 Send - Mã lỗi 11 - Lỗi do nội dung vượt quá độ dài quy định")

                } catch (err) {
                    console.error("❌ Lỗi khi gửi request:", err);
                    throw err;
                }
            }
        });

        await test.step(`Testcase 08: B2B 2023 Send - Mã lỗi 11 - Lỗi do nội dung vượt quá độ dài quy định`, async () => {
            const sendB2B2023SendAPI = new SendB2B2023SendAPI(request, access_token);

            for (let i = 1; i <= 1; i++) {// gửi 1 sms 
                const { smsId, content } = generateRandomData();

                const sendMaLoi11 =
                {
                    "Brandname": brandname,
                    "IsCheckDuplicate": IsCheckDuplicate,
                    "Priority": highPriority.value.toString(),
                    "SmsId": generateRandomData().smsId,
                    "PhoneNumber": PhoneNumber,
                    "Content": longContent,
                    "ContentType": ContentType,
                    "Telco": telco,
                    "SendTime": sendTime
                }

                console.log("🚀 Testcase 08: B2B 2023 Send - Mã lỗi 11 - Lỗi do nội dung vượt quá độ dài quy định");
                console.log(`➡️  SMS: ${JSON.stringify(sendMaLoi11, null, 2)}`);

                try {
                    const response: APIResponse = await sendB2B2023SendAPI.SendB2B2023Sending(
                        sendMaLoi11.IsCheckDuplicate,
                        sendMaLoi11.SmsId,
                        sendMaLoi11.PhoneNumber,
                        sendMaLoi11.Content,
                        sendMaLoi11.ContentType,
                        sendMaLoi11.Telco,
                        sendMaLoi11.SendTime,
                        sendMaLoi11.Brandname
                    );

                    const statusCode = response.status();
                    const responseBody = await response.json();

                    console.log(`📩 Status: ${statusCode}`)
                    console.log(`📄 Body: ${JSON.stringify(responseBody, null, 2)}`);

                    expect(statusCode).toBe(200);
                    expect(responseBody.Code, "Kiểm tra mã code trả về").toBe("11");

                    console.log("✅ Testcase 08: B2B 2023 Send - Mã lỗi 11 - Lỗi do nội dung vượt quá độ dài quy định")

                } catch (err) {
                    console.error("❌ Lỗi khi gửi request:", err);
                    throw err;
                }
            }
        });




    });
});
