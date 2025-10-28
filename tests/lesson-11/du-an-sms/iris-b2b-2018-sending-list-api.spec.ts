import { test, expect, APIResponse } from '@playwright/test';
import { LoginAPITest } from 'pom/api/login-dev-pom-sms-iris-api';
import { SendB2B2018SendingListAPI } from 'pom/api/sending-list-b2b-2018-dev-pom-sms-api';
import crypto from 'crypto';
import { error } from 'console';

let access_token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjpbIkNhbXBhaWduQ01TLkNhbXBhaWduLkNoZWNrU3RhdHVzIiwiQ3VzdG9tZXJSZXBvcnQuVmlldy5BbGxFdm91Y2hlciIsIk9UVE1lc3NhZ2UuTWVzc2FnZS5TZW5kQWRtaW4iLCJDYW1wYWlnbkNNUy5Qcm9tb3RlU21TLk1hbmFnZSIsIkIyQi5DTVMuMjAxOS5DYW1wYWlnbi5DcmVhdGUiLCJJcmlzLk9DQi5SZXBvcnQuVmlldyIsIklyaXMuQjJCMjAxOC5TbXMuVmlld1JlcG9ydCIsIk9UVE1lc3NhZ2UuTWVzc2FnZS5TZW5kIiwiQ2FtcGFpZ25DTVMuUHJvbW90ZVNtUy5BcHByb3ZlIiwiSXJpcy5CMkIyMDE4LlNtcy5WaWV3IiwiQ3VzdG9tZXJSZXBvcnQuVmlldy5Fdm91Y2hlciIsIkJyYW5kbmFtZS5IYW5sZGVyU01TRXJyb3IuTWFuYWdlIiwiSXJpcy5CMkIuU21zLlNlbmQiLCJDYW1wYWlnbkNNUy5BZG1pbiIsIkNhbXBhaWduQ01TLkNhbXBhaWduLkRvd25sb2FkIiwiQ2FtcGFpZ25DTVMuU01TLlJlcG9ydC5WaWV3cyIsIkNhbXBhaWduQ01TLkNhbXBhaWduLkNyZWF0ZSJdLCJ1bmlxdWVfbmFtZSI6ImlyaXMiLCJzdWIiOiIxNzA4ZWU1MS02OGRiLTRlOWEtOTU3Yi0wYmNiNDQ2Y2YzYTMiLCJuYmYiOjE3NjAwODc3MjksImV4cCI6MTc2MDA4OTUyOSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDoyOTkyIiwiYXVkIjoiNDc2QkI5QTEtMDAwMC00OTlGLTg5MjgtNUY1MENFNjQ1NEMzIn0.PWDH4uWVV4Yfr5NlLE-t_-E_4sDXAMDwm3FIHW4ompk';
const grant_type: string = 'password';
const username: string = 'iris';
const password: string = 'iris@123';
const brandname: string = 'IRIS';
const IsCheckDuplicate: string = "1";
const PhoneNumber: string = "84374619213";
const ContentType: string = "1";
const telco: string = "";
const telcoInvalid = "dfsfsdfsd";
const sendTime: string = "";

let loginAPITest: LoginAPITest;

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

    test("B2B 2018 - Sending list", async ({ request }) => {
        const highPriority = priority.find(p => p.name === "Cao")!;
        await test.step(`Testcase 01: B2B 2023 - SendingList - Thành công ưu tiên cao`, async () => {

            const sendB2B2018MultiSendingList = new SendB2B2018SendingListAPI(request, access_token);

            const SendingList = [];

            for (let i = 1; i <= 2; i++) {

                SendingList.push({
                    "SmsId": generateRandomData().smsId,
                    "PhoneNumber": PhoneNumber,
                    "Content": generateRandomData().content,
                    "ContentType": ContentType,
                    "Telco": telco
                });

            };

            const guiThanhCongUuTienCao = {
                "IsCheckDuplicate": "0",
                "Brandname": "mama",
                SendingList
            };

            console.log("🟢 Testcase 01: B2B 2023 - SendingList - Thành công");
            console.log(` => SMS 1: Brandname = ${guiThanhCongUuTienCao.Brandname}, SmsId = ${guiThanhCongUuTienCao.SendingList[0].SmsId}, Content = ${guiThanhCongUuTienCao.SendingList[0].Content}`);
            console.log(` => SMS 2: Brandname = ${guiThanhCongUuTienCao.Brandname}, SmsId = ${guiThanhCongUuTienCao.SendingList[1].SmsId}, Content = ${guiThanhCongUuTienCao.SendingList[1].Content}`);

            // Gửi n request
            const responses = await sendB2B2018MultiSendingList.SendB2B2018MultiSendingList(guiThanhCongUuTienCao);
            expect(responses.status(), "HTTP status không phải 200").toBe(200);

            const body = await responses.json();
            console.log("📩 Response:", JSON.stringify(body, null, 2));

            const mergedResults = body.ResultList || [];

            //log kết quả cho từng sms 
            mergedResults.forEach((r) => {
                console.log(` => Kết quả: SmsId= ${r.SmsId}, Code= ${r.Code}, Telco= ${r.Telco}`);
            });

            const resultCodes = mergedResults.map((r) => String(r.Code));
            console.log("📋 Các mã lỗi trả về:", resultCodes.join(", "));

            expect(resultCodes).toContain(0);

            console.log("✅ Testcase 01 passed — xử lý đúng nhóm mã lỗi 0");

        }

})

});