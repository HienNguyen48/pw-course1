import { test, expect, APIResponse } from '@playwright/test';
import { LoginAPITest } from 'pom/api/login-dev-pom-sms-iris-api';
import crypto from 'crypto';
import { SendOCBHOSendingListAPI } from 'pom/api/sending-list-ocb-ho-dev-pom-sms-api';


let access_token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjpbIkNhbXBhaWduQ01TLkNhbXBhaWduLkNoZWNrU3RhdHVzIiwiQ3VzdG9tZXJSZXBvcnQuVmlldy5BbGxFdm91Y2hlciIsIk9UVE1lc3NhZ2UuTWVzc2FnZS5TZW5kQWRtaW4iLCJDYW1wYWlnbkNNUy5Qcm9tb3RlU21TLk1hbmFnZSIsIkIyQi5DTVMuMjAxOS5DYW1wYWlnbi5DcmVhdGUiLCJJcmlzLk9DQi5SZXBvcnQuVmlldyIsIklyaXMuQjJCMjAxOC5TbXMuVmlld1JlcG9ydCIsIk9UVE1lc3NhZ2UuTWVzc2FnZS5TZW5kIiwiQ2FtcGFpZ25DTVMuUHJvbW90ZVNtUy5BcHByb3ZlIiwiSXJpcy5CMkIyMDE4LlNtcy5WaWV3IiwiQ3VzdG9tZXJSZXBvcnQuVmlldy5Fdm91Y2hlciIsIkJyYW5kbmFtZS5IYW5sZGVyU01TRXJyb3IuTWFuYWdlIiwiSXJpcy5CMkIuU21zLlNlbmQiLCJDYW1wYWlnbkNNUy5BZG1pbiIsIkNhbXBhaWduQ01TLkNhbXBhaWduLkRvd25sb2FkIiwiQ2FtcGFpZ25DTVMuU01TLlJlcG9ydC5WaWV3cyIsIkNhbXBhaWduQ01TLkNhbXBhaWduLkNyZWF0ZSJdLCJ1bmlxdWVfbmFtZSI6ImlyaXMiLCJzdWIiOiIxNzA4ZWU1MS02OGRiLTRlOWEtOTU3Yi0wYmNiNDQ2Y2YzYTMiLCJuYmYiOjE3NjAwODc3MjksImV4cCI6MTc2MDA4OTUyOSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDoyOTkyIiwiYXVkIjoiNDc2QkI5QTEtMDAwMC00OTlGLTg5MjgtNUY1MENFNjQ1NEMzIn0.PWDH4uWVV4Yfr5NlLE-t_-E_4sDXAMDwm3FIHW4ompk';
const grant_type: string = 'password';
const username: string = 'iris';
const password: string = 'iris@123';
const ServiceID: string = 'OCB';
const IsCheckDuplicate: string = "1";
const PhoneNumber: string = "84374619213";
const ContentType: string = "1";
const telco: string = "";
let loginAPITest: LoginAPITest;

// Random
function generateRandomData() {
    const randomNumSmsId = crypto.randomInt(10000000000); // random 10 chữ số
    const smsId = `smsIdDev_${randomNumSmsId}`;
    const randomNumContent = crypto.randomInt(100000000);
    const content = `Nội dung lần gửi thứ_${randomNumContent}`;
    return { smsId, content };
}

let longContent = generateRandomData().content + "A".repeat(1001);

test.describe('Dự án SMS môi trường dev', () => {

    test("B2B 2018 - Sending list", async ({ request }) => {

        await test.step(`Testcase 01: B2B 2023 - SendingList - PhoneNumber Is Invalid`, async () => {

            const sendOCBHOSendingListAPI = new SendOCBHOSendingListAPI(request);

            const { smsId: smsId1, content: content1 } = generateRandomData();
            const { smsId: smsId2, content: content2 } = generateRandomData();
            const { smsId: smsId3, content: content3 } = generateRandomData();
            const phoneNumberIsInvalid1 = "849048989998888888888";
            const phoneNumberIsInvalid2 = "374619213";

            const sms1 = {
                "Message": content1,
                "PhoneNumber": phoneNumberIsInvalid1,
                "Telco": telco,
                "SMS_ID": smsId1,
                "ServiceID": "OCB"
            };

            const sms2 = {
                "Message": content2,
                "PhoneNumber": phoneNumberIsInvalid2,
                "Telco": telco,
                "SMS_ID": smsId2,
                "ServiceID": "OCB"
            };

            const sms3 = {
                "Message": content3,
                "PhoneNumber": "",
                "Telco": telco,
                "SMS_ID": smsId3,
                "ServiceID": "OCB"
            };


            const SendingList = [sms1, sms2, sms3];

            const phoneNumberIsInvalid = {
                "UserId": username,
                "Password": password,
                SendingList
            };

            console.log("🚀  Testcase 01: B2B 2023 - SendingList - Thành công(Ưu tiên cao)");
            console.log(` => SMS 1 : Brandname = ${phoneNumberIsInvalid.SendingList[0].ServiceID}, SmsId = ${phoneNumberIsInvalid.SendingList[0].SMS_ID}, Content = ${phoneNumberIsInvalid.SendingList[0].PhoneNumber}`);
            console.log(` => SMS 2 : Brandname = ${phoneNumberIsInvalid.SendingList[1].ServiceID}, SmsId = ${phoneNumberIsInvalid.SendingList[1].SMS_ID}, Content = ${phoneNumberIsInvalid.SendingList[1].PhoneNumber}`);
            console.log(` => SMS 3 : Brandname = ${phoneNumberIsInvalid.SendingList[2].ServiceID}, SmsId = ${phoneNumberIsInvalid.SendingList[2].SMS_ID}, Content = ${phoneNumberIsInvalid.SendingList[2].PhoneNumber}`);

            // Gửi n request
            const responses = await sendOCBHOSendingListAPI.SendOCBHOSendingList(phoneNumberIsInvalid.UserId, phoneNumberIsInvalid.Password, phoneNumberIsInvalid.SendingList);
            console.log("👉 Status thực tế:", responses.status());
            expect(responses.status()).toBe(200);

            const body = await responses.json();
            console.log("📩 Response:", JSON.stringify(body, null, 2));

            const { ResultCode, ResultMessage } = body;

            for (const result of body.ResultList) {
                console.log(`📩 Response SMS ${result.SmsID}: ResultCode = ${result.ResultCode}, ResultMessage = ${result.ResultMessage}`);

                expect(result.ResultCode).toBe("1");
                expect(result.ResultMessage).toBe("PhoneNumber invalid");

            }

            console.log("✅ Testcase 01 passed — Response hợp lệ! — Code: 1");

        });

        await test.step(`Testcase 02: B2B 2023 - SendingList - Success (Thành công)`, async () => {

            const sendOCBHOSendingListAPI = new SendOCBHOSendingListAPI(request);

            const { smsId: smsId1, content: content1 } = generateRandomData();
            const { smsId: smsId2, content: content2 } = generateRandomData();
            const { smsId: smsId3, content: content3 } = generateRandomData();

            const sms1 = {
                "Message": content1,
                "PhoneNumber": PhoneNumber,
                "Telco": telco,
                "SMS_ID": smsId1,
                "ServiceID": "OCB"
            };

            const sms2 = {
                "Message": content2,
                "PhoneNumber": PhoneNumber,
                "Telco": telco,
                "SMS_ID": smsId2,
                "ServiceID": "OCB"
            };

            const SendingList = [sms1, sms2];

            const phoneNumberIsInvalid = {
                "UserId": username,
                "Password": password,
                SendingList
            };

            console.log("🚀  Testcase 02: B2B 2023 - SendingList - Success (Thành công)");
            console.log(` => SMS 1 : Brandname = ${phoneNumberIsInvalid.SendingList[0].ServiceID}, SmsId = ${phoneNumberIsInvalid.SendingList[0].SMS_ID}, Content = ${phoneNumberIsInvalid.SendingList[0].PhoneNumber}`);
            console.log(` => SMS 2 : Brandname = ${phoneNumberIsInvalid.SendingList[1].ServiceID}, SmsId = ${phoneNumberIsInvalid.SendingList[1].SMS_ID}, Content = ${phoneNumberIsInvalid.SendingList[1].PhoneNumber}`);

            // Gửi n request
            const responses = await sendOCBHOSendingListAPI.SendOCBHOSendingList(phoneNumberIsInvalid.UserId, phoneNumberIsInvalid.Password, phoneNumberIsInvalid.SendingList);
            console.log("👉 Status thực tế:", responses.status());
            expect(responses.status()).toBe(200);

            const body = await responses.json();
            console.log("📩 Response:", JSON.stringify(body, null, 2));

            const { ResultCode, ResultMessage } = body;

            for (const result of body.ResultList) {
                console.log(`📩 Response SMS ${result.SmsID}: ResultCode = ${result.ResultCode}, ResultMessage = ${result.ResultMessage}`);

                expect(result.ResultCode).toBe("0");
                expect(result.ResultMessage).toBe("");

            }

            console.log("✅ Testcase 02 passed — Response hợp lệ! — Code: 0");

        });

        await test.step(`Testcase 03: B2B 2023 - SendingList - Dupplicate Message & SmsId is duplicated(Tin nhắn bị lặp & Tin nhắn bị lặp SMS_ID)`, async () => {

            const sendOCBHOSendingListAPI = new SendOCBHOSendingListAPI(request);

            for (let i = 0; i <= 2; i++) {
                const { smsId: smsId1, content: content1 } = generateRandomData();
                const { smsId: smsId2, content: content2 } = generateRandomData();
                let duplicateSmsId = "smsId_01";
                let duplicateMessage = "message_01";

                const sms1 = {
                    "Message": content1,
                    "PhoneNumber": PhoneNumber,
                    "Telco": telco,
                    "SMS_ID": duplicateSmsId,
                    "ServiceID": "OCB"
                };

                const sms2 = {
                    "Message": duplicateMessage,
                    "PhoneNumber": PhoneNumber,
                    "Telco": telco,
                    "SMS_ID": smsId2,
                    "ServiceID": "OCB"
                };

                const SendingList = [sms1, sms2];

                const phoneNumberIsInvalid = {
                    "UserId": username,
                    "Password": password,
                    SendingList
                };

                console.log("🚀  Testcase 03: B2B 2023 - SendingList - Dupplicate Message & SmsId is duplicated(Tin nhắn bị lặp & Tin nhắn bị lặp SMS_ID)");
                console.log(` => SMS 1 : Brandname = ${phoneNumberIsInvalid.SendingList[0].ServiceID}, SmsId = ${phoneNumberIsInvalid.SendingList[0].SMS_ID}, Content = ${phoneNumberIsInvalid.SendingList[0].PhoneNumber}`);
                console.log(` => SMS 2 : Brandname = ${phoneNumberIsInvalid.SendingList[1].ServiceID}, SmsId = ${phoneNumberIsInvalid.SendingList[1].SMS_ID}, Content = ${phoneNumberIsInvalid.SendingList[1].PhoneNumber}`);

                // Gửi n request
                const responses = await sendOCBHOSendingListAPI.SendOCBHOSendingList(phoneNumberIsInvalid.UserId, phoneNumberIsInvalid.Password, phoneNumberIsInvalid.SendingList);
                console.log("👉 Status thực tế:", responses.status());
                expect(responses.status()).toBe(200);

                const body = await responses.json();
                console.log("📩 Response:", JSON.stringify(body, null, 2));

                const { ResultCode, ResultMessage } = body;

                for (const result of body.ResultList) {
                    console.log(`📩 Response SMS ${result.SmsID}: ResultCode = ${result.ResultCode}, ResultMessage = ${result.ResultMessage}`);

                    if (result.SMS_ID === "smsId_01") {
                        expect(result.ResultCode).toBe("2");
                        expect(result.ResultMessage).toBe("Dupplicate Message");
                    } else if (result.Message === "message_01") {
                        expect(result.ResultCode).toBe("23");
                        expect(result.ResultMessage).toBe("SmsId is duplicated");
                    } else {
                        (`Không xác định: ResultCode = ${result.ResultCode} `)
                    }

                }
                console.log("✅ Testcase 03 passed — Response hợp lệ! — Code: 2 & Code: 23");
            }

        });

        await test.step(`Testcase 04: B2B 2023 - SendingList - UserId or password invalid(Tài khoản/ Mật khẩu không đúng)`, async () => {

            const sendOCBHOSendingListAPI = new SendOCBHOSendingListAPI(request);

            for (let i = 0; i <= 1; i++) {
                const { smsId: smsId1, content: content1 } = generateRandomData();
                const { smsId: smsId2, content: content2 } = generateRandomData();
                let usernameIsInvalid = "username_01";
                let passwordIsInvalid = "password_01";

                const sms1 = {
                    "Message": content1,
                    "PhoneNumber": PhoneNumber,
                    "Telco": telco,
                    "SMS_ID": smsId1,
                    "ServiceID": "OCB"
                };

                const sms2 = {
                    "Message": content2,
                    "PhoneNumber": PhoneNumber,
                    "Telco": telco,
                    "SMS_ID": smsId2,
                    "ServiceID": "OCB"
                };

                const SendingList = [sms1, sms2];

                const phoneNumberIsInvalid = {
                    "UserId": usernameIsInvalid,
                    "Password": passwordIsInvalid,
                    SendingList
                };

                console.log("🚀  Testcase 04: B2B 2023 - SendingList - UserId or password invalid(Tài khoản/ Mật khẩu không đúng)");
                console.log(` => SMS 1 : Brandname = ${phoneNumberIsInvalid.SendingList[0].ServiceID}, SmsId = ${phoneNumberIsInvalid.SendingList[0].SMS_ID}, Content = ${phoneNumberIsInvalid.SendingList[0].PhoneNumber}`);
                console.log(` => SMS 2 : Brandname = ${phoneNumberIsInvalid.SendingList[1].ServiceID}, SmsId = ${phoneNumberIsInvalid.SendingList[1].SMS_ID}, Content = ${phoneNumberIsInvalid.SendingList[1].PhoneNumber}`);

                // Gửi n request
                const responses = await sendOCBHOSendingListAPI.SendOCBHOSendingList(phoneNumberIsInvalid.UserId, phoneNumberIsInvalid.Password, phoneNumberIsInvalid.SendingList);
                console.log("👉 Status thực tế:", responses.status());
                expect(responses.status()).toBe(200);

                const body = await responses.json();
                console.log("📩 Response:", JSON.stringify(body, null, 2));

                const { ResultCode, ResultMessage } = body;

                for (const result of body.ResultList) {
                    console.log(`📩 Response SMS ${result.SmsID}: ResultCode = ${result.ResultCode}, ResultMessage = ${result.ResultMessage}`);

                    if (result.UserId === "username_01" && result.Password === "password_01") {
                        expect(result.ResultCode).toBe("3");
                        expect(result.ResultMessage).toBe("UserId or password invalid");
                    } else {
                        (`Không xác định: ResultCode = ${result.ResultCode} `)
                    }

                }
                console.log("✅ Testcase 04 passed — Response hợp lệ! — Code: 3");
            }

        });

        await test.step(`Testcase 05: B2B 2023 - SendingList - ServiceID invalid & Message is rejected (Nội Brandname không hợp lệ & Nội dung tin có từ khóa bị chặn)`, async () => {

            const sendOCBHOSendingListAPI = new SendOCBHOSendingListAPI(request);

            //Nội dung có chứa từ khóa bị chặn 
            const { content } = generateRandomData();
            const insertPos = Math.floor(Math.random() * content.length);
            const contentWithQC = content.slice(0, insertPos) + "<QC>" + content.slice(insertPos);

            for (let i = 0; i < 1; i++) {
                const { smsId: smsId1, content: content1 } = generateRandomData();
                const { smsId: smsId2, content: content2 } = generateRandomData();
                let serviceIdIsInvalid = "OCBB";

                const sms1 = {
                    "Message": content1,
                    "PhoneNumber": PhoneNumber,
                    "Telco": telco,
                    "SMS_ID": smsId1,
                    "ServiceID": serviceIdIsInvalid
                };

                const sms2 = {
                    "Message": contentWithQC,
                    "PhoneNumber": PhoneNumber,
                    "Telco": telco,
                    "SMS_ID": smsId2,
                    "ServiceID": "OCB"
                };

                const SendingList = [sms1, sms2];

                const phoneNumberIsInvalid = {
                    "UserId": username,
                    "Password": password,
                    SendingList
                };

                console.log("🚀  Testcase 05: B2B 2023 - SendingList - ServiceID invalid & Message is rejected (Nội Brandname không hợp lệ & Nội dung tin có từ khóa bị chặn)");
                console.log(` => SMS 1 : Brandname = ${phoneNumberIsInvalid.SendingList[0].ServiceID}, SmsId = ${phoneNumberIsInvalid.SendingList[0].SMS_ID}, Content = ${phoneNumberIsInvalid.SendingList[0].PhoneNumber}`);
                console.log(` => SMS 2 : Brandname = ${phoneNumberIsInvalid.SendingList[1].ServiceID}, SmsId = ${phoneNumberIsInvalid.SendingList[1].SMS_ID}, Content = ${phoneNumberIsInvalid.SendingList[1].PhoneNumber}`);

                // Gửi n request
                const responses = await sendOCBHOSendingListAPI.SendOCBHOSendingList(phoneNumberIsInvalid.UserId, phoneNumberIsInvalid.Password, phoneNumberIsInvalid.SendingList);
                console.log("👉 Status thực tế:", responses.status());
                expect(responses.status()).toBe(200);

                const body = await responses.json();
                console.log("📩 Response:", JSON.stringify(body, null, 2));

                const { ResultCode, ResultMessage } = body;
                for (const result of body.ResultList) {
                    console.log(`📩 Response SMS ${result.SmsID}: ResultCode = ${result.ResultCode}, ResultMessage = ${result.ResultMessage}`);

                    if (result.ServiceID === "OCBB") {
                        expect(result.ResultCode).toBe("5");
                        expect(result.ResultMessage).toBe("ServiceID invalid");
                    }
                    
                    if (result.Message === contentWithQC) {
                        expect(result.ResultCode).toBe("4");
                        expect(result.ResultMessage).toBe("Message is rejected");
                    }

                }
                console.log("✅ Testcase 05 passed — Response hợp lệ! — Code: 5 & Code: 4");
            }

        });

         await test.step(`Testcase 06: B2B 2023 - SendingList - SMS_ID invalid & Message length invalid (SMS_ID vượt quá độ dài quy định & Định dạng, độ dài nội dung tin không hợp lệ)`, async () => {

            const sendOCBHOSendingListAPI = new SendOCBHOSendingListAPI(request);

            //Nội dung có chứa từ khóa bị chặn 
            const { content } = generateRandomData();
            const insertPos = Math.floor(Math.random() * content.length);
            const contentWithQC = content.slice(0, insertPos) + "<QC>" + content.slice(insertPos);

            for (let i = 0; i < 1; i++) {
                const { smsId: smsId1, content: content1 } = generateRandomData();
                const { smsId: smsId2, content: content2 } = generateRandomData();
                let smsIdIsInvalid = "smsId_011";
                let messageIsInvalid = "Được mệnh danh là lãng hoa giữa lòng thành phố, hồ Hoàn Kiếm được bao quanh bởi ba con đường Lý Thái Tổ, Đinh Tiên Hoàng, Hàng Khay dài khoảng 1,8 km. Mặt nước trong xanh soi bóng những hàng cây cổ thụ, những rặng liễu thướt tha, những mái chùa, đền, tháp rêu phong, cổ kính và cả những tòa nhà mới cao tầng. Tới đây, bạn có thể dạo quanh một vòng ngắm nhìn khung cảnh êm đềm của hồ, hít hà bầu không khí trong lành hoặc đơn giản là tìm một góc để quan sát nhịp sống người Hà Nội,… cũng là trải nghiệm rất thú vị đó.Được mệnh danh là lãng hoa giữa lòng thành phố, hồ Hoàn Kiếm được bao quanh bởi ba con đường Lý Thái Tổ, Đinh Tiên Hoàng, Hàng Khay dài khoảng 1,8 km. Mặt nước trong xanh soi bóng những hàng cây cổ thụ, những rặng liễu thướt tha, những mái chùa, đền, tháp rêu phong, cổ kính và cả những tòa nhà mới cao tầng. Tới đây, bạn có thể dạo quanh một vòng ngắm nhìn khung cảnh êm đềm của hồ, hít hà bầu không khí trong lành hoặc đơn giản là tìm một góc để quan sát nhịp sống người Hà Nội,… cũng là trải nghiệm rất thú vị đó.Được mệnh danh là lãng hoa giữa lòng thành phố, hồ Hoàn Kiếm được bao quanh bởi ba con đường Lý Thái Tổ, Đinh Tiên Hoàng, Hàng Khay dài khoảng 1,8 km. Mặt nước trong xanh soi bóng những hàng cây cổ thụ, những rặng liễu thướt tha, những mái chùa, đền, tháp rêu phong, cổ kính và cả những tòa nhà mới cao tầng. Tới đây, bạn có thể dạo quanh một vòng ngắm nhìn khung cảnh êm đềm của hồ, hít hà bầu không khí trong lành hoặc đơn giản là tìm một góc để quan sát nhịp sống người Hà Nội,… cũng là trải nghiệm rất thú vị đó.Được mệnh danh là lãng hoa giữa lòng thành phố, hồ Hoàn Kiếm được bao quanh bởi ba con đường Lý Thái Tổ, Đinh Tiên Hoàng, Hàng Khay dài khoảng 1,8 km. Mặt nước trong xanh soi bóng những hàng cây cổ thụ, những rặng liễu thướt tha, những mái chùa, đền, tháp rêu phong, cổ kính và cả những tòa nhà mới cao tầng. Tới đây, bạn có thể dạo quanh một vòng ngắm nhìn khung cảnh êm đềm của hồ, hít hà bầu không khí trong lành hoặc đơn giản là tìm một góc để quan sát nhịp sống người Hà Nội,… cũng là trải nghiệm rất thú vị đó.Được mệnh danh là lãng hoa giữa lòng thành phố, hồ Hoàn Kiếm được bao quanh bởi ba con đường Lý Thái Tổ, Đinh Tiên Hoàng, Hàng Khay dài khoảng 1,8 km. Mặt nước trong xanh soi bóng những hàng cây cổ thụ, những rặng liễu thướt tha, những mái chùa, đền, tháp rêu phong, cổ kính và cả những tòa nhà mới cao tầng. Tới đây, bạn có thể dạo quanh một vòng ngắm nhìn khung cảnh êm đềm của hồ, hít hà bầu không khí trong lành hoặc đơn giản là tìm một góc để quan sát nhịp sống người Hà Nội,… cũng là trải nghiệm rất thú vị đó.Được mệnh danh là lãng hoa giữa lòng thành phố, hồ Hoàn Kiếm được bao quanh bởi ba con đường Lý Thái Tổ, Đinh Tiên Hoàng, Hàng Khay dài khoảng 1,8 km. Mặt nước trong xanh soi bóng những hàng cây cổ thụ, những rặng liễu thướt tha, những mái chùa, đền, tháp rêu phong, cổ kính và cả những tòa nhà mới cao tầng. Tới đây, bạn có thể dạo quanh một vòng ngắm nhìn khung cảnh êm đềm của hồ, hít hà bầu không khí trong lành hoặc đơn giản là tìm một góc để quan sát nhịp sống người Hà Nội,… cũng là trải nghiệm rất thú vị đó.Được mệnh danh là lãng hoa giữa lòng thành phố, hồ Hoàn Kiếm được bao quanh bởi ba con đường Lý Thái Tổ, Đinh Tiên Hoàng, Hàng Khay dài khoảng 1,8 km. Mặt nước trong xanh soi bóng những hàng cây cổ thụ, những rặng liễu thướt tha, những mái chùa, đền, tháp rêu phong, cổ kính và cả những tòa nhà mới cao tầng. Tới đây, bạn có thể dạo quanh một vòng ngắm nhìn khung cảnh êm đềm của hồ, hít hà bầu không khí trong lành hoặc đơn giản là tìm một góc để quan sát nhịp sống người Hà Nội,… cũng là trải nghiệm rất thú vị đó.Được mệnh danh là lãng hoa giữa lòng thành phố, hồ Hoàn Kiếm được bao quanh bởi ba con đường Lý Thái Tổ, Đinh Tiên Hoàng, Hàng Khay dài khoảng 1,8 km. Mặt nước trong xanh soi bóng những hàng cây cổ thụ, những rặng liễu thướt tha, những mái chùa, đền, tháp rêu phong, cổ kính và cả những tòa nhà mới cao tầng. Tới đây, bạn có thể dạo quanh một vòng ngắm nhìn khung cảnh êm đềm của hồ, hít hà bầu không khí trong lành hoặc đơn giản là tìm một góc để quan sát nhịp sống người Hà Nội,… cũng là trải nghiệm rất thú vị đó.Được mệnh danh là lãng hoa giữa lòng thành phố, hồ Hoàn Kiếm được bao quanh bởi ba con đường Lý Thái Tổ, Đinh Tiên Hoàng, Hàng Khay dài khoảng 1,8 km. Mặt nước trong xanh soi bóng những hàng cây cổ thụ, những rặng liễu thướt tha, những mái chùa, đền, tháp rêu phong, cổ kính và cả những tòa nhà mới cao tầng. Tới đây, bạn có thể dạo quanh một vòng ngắm nhìn khung cảnh êm đềm của hồ, hít hà bầu không khí trong lành hoặc đơn giản là tìm một góc để quan sát nhịp sống người Hà Nội,… cũng là trải nghiệm rất thú vị đó.Được mệnh danh là lãng hoa giữa lòng thành phố, hồ Hoàn Kiếm được bao quanh bởi ba con đường Lý Thái Tổ, Đinh Tiên Hoàng, Hàng Khay dài khoảng 1,8 km. Mặt nước trong xanh soi bóng những hàng cây cổ thụ, những rặng liễu thướt tha, những mái chùa, đền, tháp rêu phong, cổ kính và cả những tòa nhà mới cao tầng. Tới đây, bạn có thể dạo quanh một vòng ngắm nhìn khung cảnh êm đềm của hồ, hít hà bầu không khí trong lành hoặc đơn giản là tìm một góc để quan sát nhịp sống người Hà Nội,… cũng là trải nghiệm rất thú vị đó.Được mệnh danh là lãng hoa giữa lòng thành phố, hồ Hoàn Kiếm được bao quanh bởi ba con đường Lý Thái Tổ, Đinh Tiên Hoàng, Hàng Khay dài khoảng 1,8 km. Mặt nước trong xanh soi bóng những hàng cây cổ thụ, những rặng liễu thướt tha, những mái chùa, đền, tháp rêu phong, cổ kính và cả những tòa nhà mới cao tầng. Tới đây, bạn có thể dạo quanh một vòng ngắm nhìn khung cảnh êm đềm của hồ, hít hà bầu không khí trong lành hoặc đơn giản là tìm một góc để quan sát nhịp sống người Hà Nội,… cũng là trải nghiệm rất thú vị đó.Được mệnh danh là lãng hoa giữa lòng thành phố, hồ Hoàn Kiếm được bao quanh bởi ba con đường Lý Thái Tổ, Đinh Tiên Hoàng, Hàng Khay dài khoảng 1,8 km. Mặt nước trong xanh soi bóng những hàng cây cổ thụ, những rặng liễu thướt tha, những mái chùa, đền, tháp rêu phong, cổ kính và cả những tòa nhà mới cao tầng. Tới đây, bạn có thể dạo quanh một vòng ngắm nhìn khung cảnh êm đềm của hồ, hít hà bầu không khí trong lành hoặc đơn giản là tìm một góc để quan sát nhịp sống người Hà Nội,… cũng là trải nghiệm rất thú vị đó.Được mệnh danh là lãng hoa giữa lòng thành phố, hồ Hoàn Kiếm được bao quanh bởi ba con đường Lý Thái Tổ, Đinh Tiên Hoàng, Hàng Khay dài khoảng 1,8 km. Mặt nước trong xanh soi bóng những hàng cây cổ thụ, những rặng liễu thướt tha, những mái chùa, đền, tháp rêu phong, cổ kính và cả những tòa nhà mới cao tầng. Tới đây, bạn có thể dạo quanh một vòng ngắm nhìn khung cảnh êm đềm của hồ, hít hà bầu không khí trong lành hoặc đơn giản là tìm một góc để quan sát nhịp sống người Hà Nội,… cũng là trải nghiệm rất thú vị đó.Được mệnh danh là lãng hoa giữa lòng thành phố, hồ Hoàn Kiếm được bao quanh bởi ba con đường Lý Thái Tổ, Đinh Tiên Hoàng, Hàng Khay dài khoảng 1,8 km. Mặt nước trong xanh soi bóng những hàng cây cổ thụ, những rặng liễu thướt tha, những mái chùa, đền, tháp rêu phong, cổ kính và cả những tòa nhà mới cao tầng. Tới đây, bạn có thể dạo quanh một vòng ngắm nhìn khung cảnh êm đềm của hồ, hít hà bầu không khí trong lành hoặc đơn giản là tìm một góc để quan sát nhịp sống người Hà Nội,… cũng là trải nghiệm rất thú vị đó.Được mệnh danh là lãng hoa giữa lòng thành phố, hồ Hoàn Kiếm được bao quanh bởi ba con đường Lý Thái Tổ, Đinh Tiên Hoàng, Hàng Khay dài khoảng 1,8 km. Mặt nước trong xanh soi bóng những hàng cây cổ thụ, những rặng liễu thướt tha, những mái chùa, đền, tháp rêu phong, cổ kính và cả những tòa nhà mới cao tầng. Tới đây, bạn có thể dạo quanh một vòng ngắm nhìn khung cảnh êm đềm của hồ, hít hà bầu không khí trong lành hoặc đơn giản là tìm một góc để quan sát nhịp sống người Hà Nội,… cũng là trải nghiệm rất thú vị đó.Được mệnh danh là lãng hoa giữa lòng thành phố, hồ Hoàn Kiếm được bao quanh bởi ba con đường Lý Thái Tổ, Đinh Tiên Hoàng, Hàng Khay dài khoảng 1,8 km. Mặt nước trong xanh soi bóng những hàng cây cổ thụ, những rặng liễu thướt tha, những mái chùa, đền, tháp rêu phong, cổ kính và cả những tòa nhà mới cao tầng. Tới đây, bạn có thể dạo quanh một vòng ngắm nhìn khung cảnh êm đềm của hồ, hít hà bầu không khí trong lành hoặc đơn giản là tìm một góc để quan sát nhịp sống người Hà Nội,… cũng là trải nghiệm rất thú vị đó.Được mệnh danh là lãng hoa giữa lòng thành phố, hồ Hoàn Kiếm được bao quanh bởi ba con đường Lý Thái Tổ, Đinh Tiên Hoàng, Hàng Khay dài khoảng 1,8 km. Mặt nước trong xanh soi bóng những hàng cây cổ thụ, những rặng liễu thướt tha, những mái chùa, đền, tháp rêu phong, cổ kính và cả những tòa nhà mới cao tầng. Tới đây, bạn có thể dạo quanh một vòng ngắm nhìn khung cảnh êm đềm của hồ, hít hà bầu không khí trong lành hoặc đơn giản là tìm một góc để quan sát nhịp sống người Hà Nội,… cũng là trải nghiệm rất thú vị đó.Được mệnh danh là lãng hoa giữa lòng thành phố, hồ Hoàn Kiếm được bao quanh bởi ba con đường Lý Thái Tổ, Đinh Tiên Hoàng, Hàng Khay dài khoảng 1,8 km. Mặt nước trong xanh soi bóng những hàng cây cổ thụ, những rặng liễu thướt tha, những mái chùa, đền, tháp rêu phong, cổ kính và cả những tòa nhà mới cao tầng. Tới đây, bạn có thể dạo quanh một vòng ngắm nhìn khung cảnh êm đềm của hồ, hít hà bầu không khí trong lành hoặc đơn giản là tìm một góc để quan sát nhịp sống người Hà Nội,… cũng là trải nghiệm rất thú vị đó.Được mệnh danh là lãng hoa giữa lòng thành phố, hồ Hoàn Kiếm được bao quanh bởi ba con đường Lý Thái Tổ, Đinh Tiên Hoàng, Hàng Khay dài khoảng 1,8 km. Mặt nước trong xanh soi bóng những hàng cây cổ thụ, những rặng liễu thướt tha, những mái chùa, đền, tháp rêu phong, cổ kính và cả những tòa nhà mới cao tầng. Tới đây, bạn có thể dạo quanh một vòng ngắm nhìn khung cảnh êm đềm của hồ, hít hà bầu không khí trong lành hoặc đơn giản là tìm một góc để quan sát nhịp sống người Hà Nội,… cũng là trải nghiệm rất thú vị đó.Được mệnh danh là lãng hoa giữa lòng thành phố, hồ Hoàn Kiếm được bao quanh bởi ba con đường Lý Thái Tổ, Đinh Tiên Hoàng, Hàng Khay dài khoảng 1,8 km. Mặt nước trong xanh soi bóng những hàng cây cổ thụ, những rặng liễu thướt tha, những mái chùa, đền, tháp rêu phong, cổ kính và cả những tòa nhà mới cao tầng. Tới đây, bạn có thể dạo quanh một vòng ngắm nhìn khung cảnh êm đềm của hồ, hít hà bầu không khí trong lành hoặc đơn giản là tìm một góc để quan sát nhịp sống người Hà Nội,… cũng là trải nghiệm rất thú vị đó.Được mệnh danh là lãng hoa giữa lòng thành phố, hồ Hoàn Kiếm được bao quanh bởi ba con đường Lý Thái Tổ, Đinh Tiên Hoàng, Hàng Khay dài khoảng 1,8 km. Mặt nước trong xanh soi bóng những hàng cây cổ thụ, những rặng liễu thướt tha, những mái chùa, đền, tháp rêu phong, cổ kính và cả những tòa nhà mới cao tầng. Tới đây, bạn có thể dạo quanh một vòng ngắm nhìn khung cảnh êm đềm của hồ, hít hà bầu không khí trong lành hoặc đơn giản là tìm một góc để quan sát nhịp sống người Hà Nội,… cũng là trải nghiệm rất thú vị đó.Được mệnh danh là lãng hoa giữa lòng thành phố, hồ Hoàn Kiếm được bao quanh bởi ba con đường Lý Thái Tổ, Đinh Tiên Hoàng, Hàng Khay dài khoảng 1,8 km. Mặt nước trong xanh soi bóng những hàng cây cổ thụ, những rặng liễu thướt tha, những mái chùa, đền, tháp rêu phong, cổ kính và cả những tòa nhà mới cao tầng. Tới đây, bạn có thể dạo quanh một vòng ngắm nhìn khung cảnh êm đềm của hồ, hít hà bầu không khí trong lành hoặc đơn giản là tìm một góc để quan sát nhịp sống người Hà Nội,… cũng là trải nghiệm rất thú vị đó."

                const sms1 = {
                    "Message": content1,
                    "PhoneNumber": PhoneNumber,
                    "Telco": telco,
                    "SMS_ID": smsIdIsInvalid,
                    "ServiceID": ServiceID
                };

                const sms2 = {
                    "Message": messageIsInvalid,
                    "PhoneNumber": PhoneNumber,
                    "Telco": telco,
                    "SMS_ID": smsId2,
                    "ServiceID": ServiceID
                };

                const SendingList = [sms1, sms2];

                const phoneNumberIsInvalid = {
                    "UserId": username,
                    "Password": password,
                    SendingList
                };

                console.log("🚀 Testcase 06: B2B 2023 - SendingList - SMS_ID invalid & Message length invalid (SMS_ID vượt quá độ dài quy định & Định dạng, độ dài nội dung tin không hợp lệ");
                console.log(` => SMS 1 : Brandname = ${phoneNumberIsInvalid.SendingList[0].ServiceID}, SmsId = ${phoneNumberIsInvalid.SendingList[0].SMS_ID}, Content = ${phoneNumberIsInvalid.SendingList[0].PhoneNumber}`);
                console.log(` => SMS 2 : Brandname = ${phoneNumberIsInvalid.SendingList[1].ServiceID}, SmsId = ${phoneNumberIsInvalid.SendingList[1].SMS_ID}, Content = ${phoneNumberIsInvalid.SendingList[1].PhoneNumber}`);

                // Gửi n request
                const responses = await sendOCBHOSendingListAPI.SendOCBHOSendingList(phoneNumberIsInvalid.UserId, phoneNumberIsInvalid.Password, phoneNumberIsInvalid.SendingList);
                console.log("👉 Status thực tế:", responses.status());
                expect(responses.status()).toBe(200);

                const body = await responses.json();
                console.log("📩 Response:", JSON.stringify(body, null, 2));

                const { ResultCode, ResultMessage } = body;
                for (const result of body.ResultList) {
                    console.log(`📩 Response SMS ${result.SmsID}: ResultCode = ${result.ResultCode}, ResultMessage = ${result.ResultMessage}`);

                    if (result.ServiceID === "OCBB") {
                        expect(result.ResultCode).toBe("5");
                        expect(result.ResultMessage).toBe("ServiceID invalid");
                    }
                    
                    if (result.Message === contentWithQC) {
                        expect(result.ResultCode).toBe("4");
                        expect(result.ResultMessage).toBe("Message is rejected");
                    }

                }
                console.log("✅ Testcase 05 passed — Response hợp lệ! — Code: 5 & Code: 4");
            }

        });



    });

});