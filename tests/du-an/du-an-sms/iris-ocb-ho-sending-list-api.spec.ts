import { test, expect, APIResponse } from '@playwright/test';
import { LoginAPITest } from 'pom/api/login-dev-pom-sms-iris-api';
import crypto from 'crypto';
import { SendOCBHOSendingListAPI } from 'pom/api/sending-list-ocb-ho-dev-pom-sms-api';


let access_token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjpbIkNhbXBhaWduQ01TLkNhbXBhaWduLkNoZWNrU3RhdHVzIiwiQ3VzdG9tZXJSZXBvcnQuVmlldy5BbGxFdm91Y2hlciIsIk9UVE1lc3NhZ2UuTWVzc2FnZS5TZW5kQWRtaW4iLCJDYW1wYWlnbkNNUy5Qcm9tb3RlU21TLk1hbmFnZSIsIkIyQi5DTVMuMjAxOS5DYW1wYWlnbi5DcmVhdGUiLCJJcmlzLk9DQi5SZXBvcnQuVmlldyIsIklyaXMuQjJCMjAxOC5TbXMuVmlld1JlcG9ydCIsIk9UVE1lc3NhZ2UuTWVzc2FnZS5TZW5kIiwiQ2FtcGFpZ25DTVMuUHJvbW90ZVNtUy5BcHByb3ZlIiwiSXJpcy5CMkIyMDE4LlNtcy5WaWV3IiwiQ3VzdG9tZXJSZXBvcnQuVmlldy5Fdm91Y2hlciIsIkJyYW5kbmFtZS5IYW5sZGVyU01TRXJyb3IuTWFuYWdlIiwiSXJpcy5CMkIuU21zLlNlbmQiLCJDYW1wYWlnbkNNUy5BZG1pbiIsIkNhbXBhaWduQ01TLkNhbXBhaWduLkRvd25sb2FkIiwiQ2FtcGFpZ25DTVMuU01TLlJlcG9ydC5WaWV3cyIsIkNhbXBhaWduQ01TLkNhbXBhaWduLkNyZWF0ZSJdLCJ1bmlxdWVfbmFtZSI6ImlyaXMiLCJzdWIiOiIxNzA4ZWU1MS02OGRiLTRlOWEtOTU3Yi0wYmNiNDQ2Y2YzYTMiLCJuYmYiOjE3NjAwODc3MjksImV4cCI6MTc2MDA4OTUyOSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDoyOTkyIiwiYXVkIjoiNDc2QkI5QTEtMDAwMC00OTlGLTg5MjgtNUY1MENFNjQ1NEMzIn0.PWDH4uWVV4Yfr5NlLE-t_-E_4sDXAMDwm3FIHW4ompk';
const grant_type: string = 'password';
const username: string = 'iris';
const password: string = 'iris@123';
const brandname: string = 'IRIS';
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

        await test.step(`Testcase 01: B2B 2023 - SendingList - Thành công ưu tiên cao`, async () => {

            const sendOCBHOSendingListAPI = new SendOCBHOSendingListAPI(request);

            const { smsId: smsId1, content: content1 } = generateRandomData();
            const { smsId: smsId2, content: content2 } = generateRandomData();
            const contentIsInvalid = ""

            const sms1 = {
                "Message": content1,
                "PhoneNumber": PhoneNumber,
                "Telco": "",
                "SMS_ID": "{{SmsIdDev}}",
                "ContentType": "1",
                "ServiceID": "OCB"
            };

            const sms2 = {
                "Message": "{{Content}}",
                "PhoneNumber": "849048989998888888888",
                "Telco": "",
                "SMS_ID": "{{SmsId}}",
                "ContentType": "1",
                "ServiceID": "OCB"
            };

            const SendingList = [sms1, sms2];

            const phoneNumberIsInvalid = {
                "UserId": "iris",
                "Password": "iris@123",
                SendingList
            };

            console.log("🚀  Testcase 01: B2B 2023 - SendingList - Thành công(Ưu tiên cao)");
            console.log(` => SMS 1: Brandname = ${phoneNumberIsInvalid.Brandname}, SmsId = ${phoneNumberIsInvalid.SendingList[0].SmsId}, Content = ${guiThanhCongUuTienCao.SendingList[0].Content}`);
            console.log(` => SMS 2: Brandname = ${phoneNumberIsInvalid.Brandname}, SmsId = ${phoneNumberIsInvalid.SendingList[1].SmsId}, Content = ${guiThanhCongUuTienCao.SendingList[1].Content}`);

            // Gửi n request
            const responses = await sendB2B2018MultiSendingList.SendB2B2018MultiSendingList(guiThanhCongUuTienCao.IsCheckDuplicate, guiThanhCongUuTienCao.Brandname, guiThanhCongUuTienCao.SendingList);
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


    });

});