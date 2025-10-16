import { APIRequestContext } from "@playwright/test";

export class SendB2B2023SendingListAPI {
    request: APIRequestContext;
    baseURL: string = 'http://192.168.1.9:40010';
    endPoint: string = '/api/sms';
    token;

    constructor(request: APIRequestContext) {
        this.request = request;
    }

    async sendB2B2023SendingList() {
        const url: string = `${this.baseURL}${this.enPoint}`
        const response  = await this.request.post(url, {
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
    }
}