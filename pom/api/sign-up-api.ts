import { APIRequestContext } from "node_modules/playwright/test";

export class SignUpAPI {
    request: APIRequestContext;
    baseURL: string = 'https://conduit.bondaracademy.com';
    endPointSignUp: string = '/api/users';

    constructor(request: APIRequestContext) {
        this.request = request;
    }

    async signUp(email: string, password: string, username: string) {
        const requestUrl: string = `${this.baseURL}${this.endPointSignUp}`;
        const response = await this.request.post(requestUrl, {
            data: {
                "user": {
                    "email": email,
                    "password": password,
                    "username": username
                }
            }
        });
        return response;
    }
}
