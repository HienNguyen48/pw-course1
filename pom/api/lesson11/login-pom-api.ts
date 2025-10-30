import { APIRequestContext } from "@playwright/test";

export class LoginAPI {
    request: APIRequestContext;
    baseURL: string = 'https://conduit-api.bondaracademy.com';
    endPoint: string = '/api/users/login';

    constructor(request: APIRequestContext) {
        this.request = request;
    }

    async UserLogin(email: string, password: string) {
        const url: string = `${this.baseURL}${this.endPoint}`
        const response = await this.request.post(url, {
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                "user": {
                    "email": email,
                    "password": password
                },
            }
        });
        return response;
    }
}