import { APIResponse, test, expect } from '@playwright/test';
import crypto from 'crypto';

const baseURL: string = "http://192.168.1.9:40010";
let access_token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjpbIkNhbXBhaWduQ01TLkNhbXBhaWduLkNoZWNrU3RhdHVzIiwiQ3VzdG9tZXJSZXBvcnQuVmlldy5BbGxFdm91Y2hlciIsIk9UVE1lc3NhZ2UuTWVzc2FnZS5TZW5kQWRtaW4iLCJDYW1wYWlnbkNNUy5Qcm9tb3RlU21TLk1hbmFnZSIsIkIyQi5DTVMuMjAxOS5DYW1wYWlnbi5DcmVhdGUiLCJJcmlzLk9DQi5SZXBvcnQuVmlldyIsIklyaXMuQjJCMjAxOC5TbXMuVmlld1JlcG9ydCIsIk9UVE1lc3NhZ2UuTWVzc2FnZS5TZW5kIiwiQ2FtcGFpZ25DTVMuUHJvbW90ZVNtUy5BcHByb3ZlIiwiSXJpcy5CMkIyMDE4LlNtcy5WaWV3IiwiQ3VzdG9tZXJSZXBvcnQuVmlldy5Fdm91Y2hlciIsIkJyYW5kbmFtZS5IYW5sZGVyU01TRXJyb3IuTWFuYWdlIiwiSXJpcy5CMkIuU21zLlNlbmQiLCJDYW1wYWlnbkNNUy5BZG1pbiIsIkNhbXBhaWduQ01TLkNhbXBhaWduLkRvd25sb2FkIiwiQ2FtcGFpZ25DTVMuU01TLlJlcG9ydC5WaWV3cyIsIkNhbXBhaWduQ01TLkNhbXBhaWduLkNyZWF0ZSJdLCJ1bmlxdWVfbmFtZSI6ImlyaXMiLCJzdWIiOiIxNzA4ZWU1MS02OGRiLTRlOWEtOTU3Yi0wYmNiNDQ2Y2YzYTMiLCJuYmYiOjE3NjAwODc3MjksImV4cCI6MTc2MDA4OTUyOSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDoyOTkyIiwiYXVkIjoiNDc2QkI5QTEtMDAwMC00OTlGLTg5MjgtNUY1MENFNjQ1NEMzIn0.PWDH4uWVV4Yfr5NlLE-t_-E_4sDXAMDwm3FIHW4ompk';
// const random = Math.floor(Math.random() * 10000);
const username: string = 'iris';
const password: string = 'iris@123';

// Hàm sinh SmsId 
function generateRandomId(prefix) {
  return prefix + Math.floor(Math.random() * 1e10);
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

    test('B2B 2023 - Sending list', async ({ request }, testInfo) => {
        const smsId = generateRandomId('smsIdDev_');
        const content = generateRandomId('ContentDev_');

        await test.step('Testcase 1: Success - Ưu tiên cao - 10', async () => {
            const response: APIResponse = await request.post(`${baseURL}/api/sms`, {
                headers: {
                    Authorization: `Bearer ${access_token}`,
                    'Content-Type': 'application/json'
                },
                data: {
                    "SendingList": [
                        {
                            "Brandname": "IRIS",
                            "IsCheckDuplicate": "0",
                            "Priority": '10',
                            "SmsId": smsId,
                            "PhoneNumber": "84376717799",
                            "Content": content,
                            "ContentType": "0"
                        }
                    ]
                },

            });
            const statusCode = response.status();
            expect(statusCode).toBe(200);
            console.log('response:', await response.json());
        });

        await test.step('Testcase 2: Success - Ưu tiên trung bình - 5', async () => {
            const response: APIResponse = await request.post(`${baseURL}/api/sms`, {
                headers: {
                    Authorization: `Bearer ${access_token}`,
                    'Content-Type': 'application/json'
                },
                data: {
                    "SendingList": [
                        {
                            "Brandname": "IRIS",
                            "IsCheckDuplicate": "0",
                            "Priority": "5",
                            "SmsId": smsId,
                            "PhoneNumber": "84376717799",
                            "Content": content,
                            "ContentType": "0"
                        }
                    ]
                },

            });
            const statusCode = response.status();
            expect(statusCode).toBe(200);
            console.log('response:', await response.json());
        });


        await test.step('Testcase 3: Success - Ưu tiên thấp - 1', async () => {
            const response: APIResponse = await request.post(`${baseURL}/api/sms`, {
                headers: {
                    Authorization: `Bearer ${access_token}`,
                    'Content-Type': 'application/json'
                },
                data: {
                    "SendingList": [
                        {
                            "Brandname": "IRIS",
                            "IsCheckDuplicate": "0",
                            "Priority": "1",
                            "SmsId": smsId,
                            "PhoneNumber": "84376717799",
                            "Content": content,
                            "ContentType": "0"
                        }
                    ]
                },

            });
            const statusCode = response.status();
            expect(statusCode).toBe(200);
            console.log('response:', await response.json());
        });



        await test.step('Testcase 4: Fail - Brandname rỗng or bỏ trống', async () => {
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
                            "Priority": "1",
                            "SmsId": smsId,
                            "PhoneNumber": "84376717799",
                            "Content": content,
                            "ContentType": "0"
                        },
                        {
                            "Brandname": "mama",
                            "SmsId": smsId,
                            "PhoneNumber": "0972139939",
                            "Content": "{{Content}}"
                        }
                    ]
                },

            });
            const statusCode = response.status();
            expect(statusCode).toBe(200);
            console.log('response:', await response.json());

        });

    });
});



