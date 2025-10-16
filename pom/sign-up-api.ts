import { APIRequestContext } from "@playwright/test";
export class SignUpAPI {
    //POM chỉ chauws hành động thôi, k chứa  logic validate 
    request: APIRequestContext;
    baseURL: string = 'https://conduit.bondaracademy.com/';
    endPointSignUp: string = '/api/users';

    constructor(request: APIRequestContext) {
        this.request = request;
    }

    async signUp(email: string, password: string, username: string) {
        const requestUrl: string = `${this.baseURL}/api/users`;
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