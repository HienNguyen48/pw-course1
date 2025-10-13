import { APIResponse, test, expect } from '@playwright/test';
import crypto from 'crypto';


const baseURL: string = "http://192.168.1.9:40010";
let access_token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjpbIkNhbXBhaWduQ01TLkNhbXBhaWduLkNoZWNrU3RhdHVzIiwiQ3VzdG9tZXJSZXBvcnQuVmlldy5BbGxFdm91Y2hlciIsIk9UVE1lc3NhZ2UuTWVzc2FnZS5TZW5kQWRtaW4iLCJDYW1wYWlnbkNNUy5Qcm9tb3RlU21TLk1hbmFnZSIsIkIyQi5DTVMuMjAxOS5DYW1wYWlnbi5DcmVhdGUiLCJJcmlzLk9DQi5SZXBvcnQuVmlldyIsIklyaXMuQjJCMjAxOC5TbXMuVmlld1JlcG9ydCIsIk9UVE1lc3NhZ2UuTWVzc2FnZS5TZW5kIiwiQ2FtcGFpZ25DTVMuUHJvbW90ZVNtUy5BcHByb3ZlIiwiSXJpcy5CMkIyMDE4LlNtcy5WaWV3IiwiQ3VzdG9tZXJSZXBvcnQuVmlldy5Fdm91Y2hlciIsIkJyYW5kbmFtZS5IYW5sZGVyU01TRXJyb3IuTWFuYWdlIiwiSXJpcy5CMkIuU21zLlNlbmQiLCJDYW1wYWlnbkNNUy5BZG1pbiIsIkNhbXBhaWduQ01TLkNhbXBhaWduLkRvd25sb2FkIiwiQ2FtcGFpZ25DTVMuU01TLlJlcG9ydC5WaWV3cyIsIkNhbXBhaWduQ01TLkNhbXBhaWduLkNyZWF0ZSJdLCJ1bmlxdWVfbmFtZSI6ImlyaXMiLCJzdWIiOiIxNzA4ZWU1MS02OGRiLTRlOWEtOTU3Yi0wYmNiNDQ2Y2YzYTMiLCJuYmYiOjE3NjAwODc3MjksImV4cCI6MTc2MDA4OTUyOSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDoyOTkyIiwiYXVkIjoiNDc2QkI5QTEtMDAwMC00OTlGLTg5MjgtNUY1MENFNjQ1NEMzIn0.PWDH4uWVV4Yfr5NlLE-t_-E_4sDXAMDwm3FIHW4ompk';
// const random = Math.floor(Math.random() * 10000);
const username: string = 'iris';
const password: string = 'iris@123';
const brandname: string = 'IRIS';


// Random
function generateRandomData() {
    const randomNum = crypto.randomInt(10000000000); // random 10 chữ số
    const smsId = `smsIdDev_${randomNum}`;
    const content = `ContentDev_${randomNum}`;
    return { smsId, content };
}

const dataList = [];
for (let i = 0; i < 1000; i++) {
    dataList.push(generateRandomData());
}



test.describe('Dự án SMS môi trường dev', () => {

    test.beforeEach('Get token', async ({ request }) => {

        const response: APIResponse = await request.post(`${baseURL}/oauth2/token`, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64')
            },
            form: {
                grant_type: 'password',
                username: username,
                password: password
            },
        });

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

    test('B2B 2023 - Sending list', async ({ request }) => {
        // const stepConfigs = [
        //     { name: 'Step 1 - Ưu tiên cao', priority: 10, count: 1 },
        //     { name: 'Step 2 - Ưu tiên trung bình', priority: 5, count: 1 },
        //     { name: 'Step 3 - Ưu tiên thấp', priority: 1, count: 1 },
        //     { name: 'Step 4 - Brandname rỗng hoặc bỏ trống', priority: 1, count: 2 },
        //     { name: 'Step 5 - smsId không hợp lệ hoặc bị bỏ trống', priority: 5, count: 2 },
        // ];

        // for (const step of stepConfigs) {
        await test.step("Step 1- Ưu tiên cao ", async () => {

            for (let i = 1; i <= 1; i++) {// gửi 1 sms 
                const { smsId, content } = generateRandomData();
                console.log(`🟢 Step 1 | Gửi lần ${i}: `);
                console.log(`   SMS 1 -> smsId: ${smsId}, content: ${content}`);

                try {

                    const response: APIResponse = await request.post(`${baseURL}/api/sms`, {
                        headers: {
                            Authorization: `Bearer ${access_token}`,
                            'Content-Type': 'application/json'
                        },
                        data: {
                            "SendingList": [
                                {
                                    "Brandname": brandname,
                                    "IsCheckDuplicate": "0",
                                    "Priority": '10',
                                    "SmsId": smsId,
                                    "PhoneNumber": "84376717799",
                                    "Content": content,
                                    "ContentType": "0"
                                },
                            ],
                        },

                    });
                    const statusCode: number = response.status();
                    expect(statusCode).toBe(200);

                    console.log(`✅ Gửi thành công:`);
                    console.log(`   SMS 1 -> smsId: ${smsId}, content: ${content}`);
                } catch (err) {
                    console.log(`❌ Gửi thất bại:`);
                    console.log(`   SMS 1 -> smsId: ${smsId}, content: ${content}`);
                }
            };
        });

        await test.step("Step 2 - Ưu tiên trung bình ", async () => {

            for (let i = 1; i <= 1; i++) {
                const { smsId, content } = generateRandomData();
                console.log(`🟢 Step 2 | Gửi lần ${i}: `);
                console.log(`   SMS 1 -> smsId: ${smsId}, content: ${content}`);

                try {

                    const response: APIResponse = await request.post(`${baseURL}/api/sms`, {
                        headers: {
                            Authorization: `Bearer ${access_token}`,
                            'Content-Type': 'application/json'
                        },
                        data: {
                            "SendingList": [
                                {
                                    "Brandname": brandname,
                                    "IsCheckDuplicate": "0",
                                    "Priority": '5',
                                    "SmsId": smsId,
                                    "PhoneNumber": "84376717799",
                                    "Content": content,
                                    "ContentType": "0"
                                },
                            ],
                        },

                    });
                    const statusCode: number = response.status();
                    expect(statusCode).toBe(200);

                    console.log(`✅ Gửi thành công:`);
                    console.log(`   SMS 1 -> smsId: ${smsId}, content: ${content}`);
                } catch (err) {
                    console.log(`❌ Gửi thất bại:`);
                    console.log(`   SMS 1 -> smsId: ${smsId}, content: ${content}`);
                }
            };
        });

        await test.step("Step 3 - Ưu tiên thấp", async () => {

            for (let i = 1; i <= 1; i++) {
                const { smsId, content } = generateRandomData();
                console.log(`🟢 Step 3 | Gửi lần ${i}: `);
                console.log(`   SMS 1 -> smsId: ${smsId}, content: ${content}`);

                try {

                    const response: APIResponse = await request.post(`${baseURL}/api/sms`, {
                        headers: {
                            Authorization: `Bearer ${access_token}`,
                            'Content-Type': 'application/json'
                        },
                        data: {
                            "SendingList": [
                                {
                                    "Brandname": brandname,
                                    "IsCheckDuplicate": "0",
                                    "Priority": '5',
                                    "SmsId": smsId,
                                    "PhoneNumber": "84376717799",
                                    "Content": content,
                                    "ContentType": "0"
                                },
                            ],
                        },

                    });
                    const statusCode: number = response.status();
                    expect(statusCode).toBe(200);
                    
                    console.log(`✅ Gửi thành công:`);
                    console.log(`   SMS 1 -> smsId: ${smsId}, content: ${content}`);
                } catch (err) {
                    console.log(`❌ Gửi thất bại:`);
                    console.log(`   SMS 1 -> smsId: ${smsId}, content: ${content}`);
                }
            };
        });

        await test.step("Step 4 -  Brandname rỗng hoặc bỏ trống", async () => {

            for (let i = 1; i <= 2; i++) {
                const { smsId: smsId1, content: content1 } = generateRandomData();
                const { smsId: smsId2, content: content2 } = generateRandomData();

                console.log(`🟢 Step 4 | Gửi lần ${i}: ${smsId1} & ${smsId2}`);
                console.log(`   SMS 1 -> smsId: ${smsId1}, content: ${content1}`);
                console.log(`   SMS 2 -> smsId: ${smsId2}, content: ${content2}`);

                try {

                    const response: APIResponse = await request.post(`${baseURL}/api/sms`, {
                        headers: {
                            Authorization: `Bearer ${access_token}`,
                            'Content-Type': 'application/json'
                        },
                        data: {
                            "SendingList": [
                                {
                                    "Brandname": "",
                                    "IsCheckDuplicate": "0",
                                    "Priority": '5',
                                    "SmsId": smsId1,
                                    "PhoneNumber": "84376717799",
                                    "Content": content1,
                                    "ContentType": "0"
                                },
                                {
                                    "Brandname": "sdadasdasd",
                                    "IsCheckDuplicate": "0",
                                    "Priority": '5',
                                    "SmsId": smsId2,
                                    "PhoneNumber": "84376717799",
                                    "Content": content2,
                                    "ContentType": "0"
                                },
                            ],
                        },

                    });
                    // const statusCode: number = response.status();
                    // expect(statusCode).toBe(200);

                    console.log(`✅ Gửi thành công:`);
                    console.log(`   SMS 1 -> smsId: ${smsId1}, content: ${content1}`);
                    console.log(`   SMS 2 -> smsId: ${smsId2}, content: ${content2}`);
                    console.log(`   status: ${response.status()}`);
                } catch (err) {
                    console.log(`❌ Gửi thất bại:`);
                    console.log(`   SMS 1 -> smsId: ${smsId1}, content: ${content1}`);
                    console.log(`   SMS 2 -> smsId: ${smsId2}, content: ${content2}`);
                    console.error(err);
                }
            };
        });
    });
});



