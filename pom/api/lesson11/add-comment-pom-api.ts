import { APIRequestContext } from "@playwright/test";

export class AddCommentAPI {
    request: APIRequestContext;
    baseURL: string = 'https://conduit-api.bondaracademy.com';
    token: string;

    constructor(request: APIRequestContext, token: string) {
        this.request = request;
        this.token = token;
    }

    async AddComment(slug: string, commentBody: string) {
        let url: string = `${this.baseURL}/api/articles/${slug}/comments`;
        const response = await this.request.post(url, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${this.token}`
            },
            data: {
                "comment": {
                    "body": commentBody
                }
            }
        });
        return response;
    }
}