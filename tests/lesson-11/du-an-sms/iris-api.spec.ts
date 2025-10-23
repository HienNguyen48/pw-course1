import { test, expect, APIResponse } from '@playwright/test';
import { LoginAPITest } from 'pom/api/login-dev-pom-sms-iris-api';
import crypto from 'crypto';
import { SendB2B2023SendingListAPI } from 'pom/api/send-b2b-2023-dev-pom-sms-api';


// const baseURL: string = "http://192.168.1.9:40010";
let access_token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjpbIkNhbXBhaWduQ01TLkNhbXBhaWduLkNoZWNrU3RhdHVzIiwiQ3VzdG9tZXJSZXBvcnQuVmlldy5BbGxFdm91Y2hlciIsIk9UVE1lc3NhZ2UuTWVzc2FnZS5TZW5kQWRtaW4iLCJDYW1wYWlnbkNNUy5Qcm9tb3RlU21TLk1hbmFnZSIsIkIyQi5DTVMuMjAxOS5DYW1wYWlnbi5DcmVhdGUiLCJJcmlzLk9DQi5SZXBvcnQuVmlldyIsIklyaXMuQjJCMjAxOC5TbXMuVmlld1JlcG9ydCIsIk9UVE1lc3NhZ2UuTWVzc2FnZS5TZW5kIiwiQ2FtcGFpZ25DTVMuUHJvbW90ZVNtUy5BcHByb3ZlIiwiSXJpcy5CMkIyMDE4LlNtcy5WaWV3IiwiQ3VzdG9tZXJSZXBvcnQuVmlldy5Fdm91Y2hlciIsIkJyYW5kbmFtZS5IYW5sZGVyU01TRXJyb3IuTWFuYWdlIiwiSXJpcy5CMkIuU21zLlNlbmQiLCJDYW1wYWlnbkNNUy5BZG1pbiIsIkNhbXBhaWduQ01TLkNhbXBhaWduLkRvd25sb2FkIiwiQ2FtcGFpZ25DTVMuU01TLlJlcG9ydC5WaWV3cyIsIkNhbXBhaWduQ01TLkNhbXBhaWduLkNyZWF0ZSJdLCJ1bmlxdWVfbmFtZSI6ImlyaXMiLCJzdWIiOiIxNzA4ZWU1MS02OGRiLTRlOWEtOTU3Yi0wYmNiNDQ2Y2YzYTMiLCJuYmYiOjE3NjAwODc3MjksImV4cCI6MTc2MDA4OTUyOSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDoyOTkyIiwiYXVkIjoiNDc2QkI5QTEtMDAwMC00OTlGLTg5MjgtNUY1MENFNjQ1NEMzIn0.PWDH4uWVV4Yfr5NlLE-t_-E_4sDXAMDwm3FIHW4ompk';
//const random = Math.floor(Math.random() * 10000);
const grant_type: string = 'password';
const username: string = 'iris';
const password: string = 'iris@123';
const brandname: string = 'IRIS';
const IsCheckDuplicate: string = "0";
const Priority: string = "10";
const PhoneNumber: string = "84374619213";
const ContentType: string = "1";

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
    {"name": "Cao", "value": 10},
    {"name": "Trung Bình", "value": 5},
    {"name": "Thấp", "value": 1}
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

    for(const p of priority){
    test('B2B 2023 - Sending list', async ({ request }) => {
        await test.step("Testcase 01: B2B 2023 Sending List - Ưu tiên cao", async () => {
            const sendB2B2023SendingListAPI = new SendB2B2023SendingListAPI(request, access_token);

            for (let i = 1; i <= 1; i++) {// gửi 1 sms 
                const { smsId, content } = generateRandomData();
                console.log(`🟢Gửi lần ${i}: smsId: ${smsId}, content: ${content} `);

                try {
                    const response: APIResponse = await sendB2B2023SendingListAPI.SendB2B2023SendingList(brandname, IsCheckDuplicate, Priority, smsId, PhoneNumber, content, ContentType)
                    const statusCode: number = response.status();
                    const responseBody = await response.json();
                    console.log(`Response body: ${JSON.stringify(responseBody, null, 2)}`);

                    if (statusCode === 200) {
                        console.log(`✅ Gửi thành công: smsId: ${smsId}, content: ${content}`);
                    } else {
                        console.log(`❌ Gửi thất bại: smsId: ${smsId}, content: ${content}, status: ${statusCode}`);
                    }
                    expect(statusCode, `Gửi SMS lần ${i} thất bại`).toBe(200);

                } catch (err) {
                    console.log(`❌ Lỗi khi gửi request: smsId: ${smsId}, content: ${content}`);
                    console.log(`Error: ${err}`);
                }
            };
        });

        await test.step("Testcase 02: B2B 2023 Sending List - Ưu tiên trung bình", async () => {
            const sendB2B2023SendingListAPI = new SendB2B2023SendingListAPI(request, access_token);

            for (let i = 1; i <= 1; i++) {
                const { smsId, content } = generateRandomData();
                console.log(`🟢Gửi lần ${i}: smsId: ${smsId}, content: ${content} `);

                try {
                    const response: APIResponse = await sendB2B2023SendingListAPI.SendB2B2023SendingList(brandname, IsCheckDuplicate, Priority, smsId, PhoneNumber, content, ContentType)
                    const statusCode: number = response.status();
                    const responseBody = await response.json();
                    console.log(`Response body: ${JSON.stringify(responseBody, null, 2)}`);

                    if (statusCode === 200) {
                        console.log(`✅ Gửi thành công: smsId: ${smsId}, content: ${content}`);
                    } else {
                        console.log(`❌ Gửi thất bại: smsId: ${smsId}, content: ${content}, status: ${statusCode}`);
                    }
                    expect(statusCode, `Gửi SMS lần ${i} thất bại`).toBe(200);

                } catch (err) {
                    console.log(`❌ Lỗi khi gửi request: smsId: ${smsId}, content: ${content}`);
                    console.log(`Error: ${err}`);
                }
            };
        });
    }
    });






