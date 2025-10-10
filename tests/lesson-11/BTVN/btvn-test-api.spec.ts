import { APIResponse, test, expect } from '@playwright/test';

const baseURL: string = "https://conduit-api.bondaracademy.com";
let token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjozNjY5NH0sImlhdCI6MTc2MDAwMTQxNSwiZXhwIjoxNzY1MTg1NDE1fQ.uX_d3cbhE5I9GfMcv1-fLswqThGWPxR5RssgsEKuK8c';
const random = Math.floor(Math.random() * 10000);
const username = `K17_username_${random}`;
const email = `nguyenhienit_${random}@gmail.com`;
const password = `Gao@${random}`;
let slug = '';
let listSlug: string[] = [];
let listIdComment: string[] = [];


test.describe('BTVN lesson 11', () => {

    //TC1: Đăng ký tài khoản
    test('Testcase1: Đăng ký tài khoản', async ({ request }) => {

        const response: APIResponse = await request.post(`${baseURL}/api/users`, {
            data: {
                "user": {
                    "email": email,
                    "password": password,
                    "username": username
                }
            }
        });


        //verify statusCode
        expect(response.status()).toBe(201);

        //verify response body
        const responseBody = await response.json();
        const actualEmail: string = responseBody['user']['email'];
        const actualUserName: string = responseBody['user']['username'];

        expect(actualEmail).toBe(email);
        expect(actualUserName).toBe(username);
    });

    //2.Test 2: 
    //Đăng nhập vào tài khoản đã tạo ở test 1
    test('Testcase 2 - a: Login article', async ({ request }) => {
        const response: APIResponse = await request.post(`${baseURL}/api/users/login`, {
            data: {
                "user": {
                    "email": email,
                    "password": password
                }
            }
        });
        const statusCode = response.status();
        //verify lại xem kết quả status code đúng hay không
        expect(statusCode).toBe(200);//.toBe dùng cho con số hoặc chữ mà k cần await nhiều, thường dùng cho API 
        console.log(`status code: ${response.status()}`);


        //Lấy token ra để sử dụng cho nhưng api khác cần token
        //phải có await thì mới có data và không bị lỗi 
        token = (await response.json()).user.token;//trả về cho 1 cái chuỗi .(.user.token là đang lấy ở response khi chạy API)
        //Verify token để không bị null hoặc k rỗng do token có thể động => defin ed rõ ràng được token
        expect(token).toBeDefined();
        console.log(`token: ${token}`);
        //In ra 20 kí tự đầu tiên của token nếu không muốn in toàn bộ token thì sẽ dùng câu lệnh này 
        console.log(`Logged in successfully, token: ${token.substring(0, 20)}...`);
    })

    //Thêm mới article:
    test('Testcase 2 -b: Thêm mới article', async ({ request }) => {
        const articleName = `API in Playwright ${random}`;
        const articleAbout = `How to use Playwright to create article ${random}`;
        const articleTags = ` Playwright Viet Nam, pw, pw-k17 ${random}`;
        const articleBody = ` Nội dung mô tả lần: ${random}`;

        const response: APIResponse = await request.post(`${baseURL}/api/articles/`, {
            data: {
                "article": {
                    "title": articleName,
                    "description": articleAbout,
                    "body": articleBody,
                    "tagList": [
                        articleTags
                    ]
                }
            },
            headers: {
                'authorization': `Token ${token}`
            }
        });
        const statusCode = response.status();
        expect(statusCode).toBe(201);

        const responseBody = await response.json();
        slug = responseBody.article.slug; // ✅ Gán slug toàn cục cho test sau
        console.log(`Created article slug: ${slug}`);
    })

    //3.  Test 3: Thêm mới 5 comment với nội dung: “Comment 01”, “Comment 02”, “Comment 03”, “Comment 04”, “Comment 05” vào article đã tạo ở test 2. 
    test('Testcase 3: Add comment new', async ({ request }) => {
        let url: string = `${baseURL}/api/articles/${slug}/comments`;
        for (let i = 1; i <= 5; i++) {
            const response: APIResponse = await request.post(url, {
                headers: {
                    'authorization': `Token ${token}`
                },
                data: {
                    "comment": {
                        "body": `Comment 0${i}`
                    }
                }
            });
            //verify status
            const statusCode = response.status();
            expect(statusCode).toBe(200);

            //verify response body
            const responseBody = await response.json();
            const actualcommentId = responseBody.comment.id;
            const actualcommentBody: string = responseBody.comment.body;
            expect(actualcommentBody).toBe(`Comment 0${i}`);

            //get data 02 & 05
            if (actualcommentBody === `Comment 02` || actualcommentBody === `Comment 05`) {
                listIdComment.push(actualcommentId);
                // listSlug.push(slug);//[Slug02, Slug05]
                // listSlug.push(responseBody.comment.id);
            }
        }
    });


    //4. Test 4: Xoá “Comment 02”, “Comment 05” đã tạo ở test 3 
    test('Testcase 4: Xóa comment 2 & comment 5', async ({ request }) => {

        for (let i = 0; i < listIdComment.length; i++) {
            const url: string = `${baseURL}/api/articles/${slug}/comments/${listIdComment[i]}`;
            const response: APIResponse = await request.delete(url, {
                headers: {
                    'authorization': `Token ${token}`,
                },

            });
            console.log(`Delete comment ID: ${listIdComment}`)
            expect(response.status()).toBe(200);
        }
    });

    //5. Test 6: Xóa article đã tạo ở test02
    test('Testcase 5: Xóa article đã tạo', async ({ request }) => {
        const url: string = `${baseURL}/api/articles/${slug}`
        const response: APIResponse = await request.delete(url, {
            headers: {
                'authorization': `Token ${token}`,
            },
        })
        console.log(`Delete article slug: ${slug}`)
        expect(response.status()).toBe(204);
    });
});





