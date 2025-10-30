import { APIRequestContext } from "@playwright/test";

export class AddArticleAPI {
    request: APIRequestContext;
    baseURL: string = 'https://conduit-api.bondaracademy.com';
    endPoint: string = '/api/articles/';
    token: string;

    constructor(request: APIRequestContext, token: string) {
        this.request = request;
        this.token = token;
    }

    async AddArticle(articleName: string, articleAbout: string, articleBody: string, articleTags: string) {
        const url: string = `${this.baseURL}${this.endPoint}`
        const response = await this.request.post(url, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${this.token}`
            },
            data: {
                "article": {
                    "title": articleName,
                    "description": articleAbout,
                    "body": articleBody,
                    "tagList": [
                        articleTags
                    ]
                }
            }
        });
        return response;
    }
}