import { APIRequestContext } from "@playwright/test";

export class RegisterAPI {

    request: APIRequestContext;
    baseURL: string = 'https://conduit-api.bondaracademy.com';
    endPoint: string = '/api/users';

    constructor(request: APIRequestContext) {
        this.request = request;
    }

    async UserRegister(email: string, password: string, username: string) {
        const url: string = `${this.baseURL}${this.endPoint}`
        const response = await this.request.post(url, {
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                "user": {
                    "email": email,
                    "password": password,
                    "username": username
                },
            }
        });
        return response;
    }
}