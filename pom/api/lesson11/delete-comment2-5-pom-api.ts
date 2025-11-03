import { APIRequestContext } from "@playwright/test";

 export class DeleteContentAPI {
    request: APIRequestContext;
    baseURL: string = "https://conduit-api.bondaracademy.com";
    token: string;

    constructor (request: APIRequestContext, token:string) {
        this.request = request;
        this.token = token;
    }

    async DeleteComment(slug: string, listIdComment: string){
        let url: string = `${this.baseURL}/api/articles/${slug}/comments/${listIdComment[i]}`;
        const response = await this.request.delete(url, {
            headers: {
                 'authorization': `Token ${this.token}`,
            },

        });
        return response;
    }
 }