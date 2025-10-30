import { APIResponse, test, expect } from '@playwright/test';
import { request } from 'http';
import { url } from 'inspector';
import { AddArticleAPI } from 'pom/api/lesson11/add-article-pom-api';
import { AddCommentAPI } from 'pom/api/lesson11/add-comment-pom-api';
import { RegisterAPI } from 'pom/api/lesson11/btvn-lesson11-register-pom-api';
import { LoginAPI } from 'pom/api/lesson11/login-pom-api';
import { title } from 'process';

const baseURL: string = "https://conduit-api.bondaracademy.com";
let token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjozNjY5NH0sImlhdCI6MTc2MDAwMTQxNSwiZXhwIjoxNzY1MTg1NDE1fQ.uX_d3cbhE5I9GfMcv1-fLswqThGWPxR5RssgsEKuK8c';

function generateRandomData() {
    const random = Math.floor(Math.random() * 10000);
    const username = `K17_username_${random}`;
    const email = `nguyenhienit_${random}@gmail.com`;
    const password = `Gaonho@1512${random}`;
    return { email, username, password };
}

let registeredEmail = '';
let registeredUsername = '';
let registeredPassword = '';

let slug = '';
let listSlug: string[] = [];
let listIdComment: string[] = [];

let registerAPI: RegisterAPI;
let loginAPI: LoginAPI;
let addArticleAPI: AddArticleAPI;
let addCommentAPI: AddCommentAPI;


test.describe('BTVN lesson 11', () => {
    test('🚀  End - to - End', async ({ request }) => {

        //TC1: Đăng ký tài khoản
        await test.step('🚀  Testcase 01: Đăng ký tài khoản', async () => {
            registerAPI = new RegisterAPI(request);

            for (let i = 1; i <= 1; i++) {
                const { email, password, username } = generateRandomData();
                try {
                    const response: APIResponse = await registerAPI.UserRegister(email, password, username);

                    console.log(`🟢  Testcase1: Đăng ký tài khoản => gửi lần: ${i}: ${email},  ${username},  ${password}`);

                    // //verify statusCode
                    // expect(response.status()).toBe(201);

                    // //verify response body
                    // const responseBody = await response.json();
                    // const actualEmail: string = responseBody['user']['email'];
                    // const actualUserName: string = responseBody['user']['username'];

                    // expect(actualEmail).toBe(email);
                    // expect(actualUserName).toBe(username);

                    const statusCode: number = response.status();
                    const responseBody = await response.json();

                    console.log(`📩 Status: ${statusCode}`)
                    console.log(`Response body: ${JSON.stringify(responseBody, null, 2)}`);

                    if (statusCode === 201) {
                        console.log(`✅  Đăng ký lần ${i} thành công: username: ${username}, password: ${password}, email: ${email}`)
                    } else {
                        console.log(`❌  Đăng ký lần ${i} thất bại: username: ${username}, password: ${password}, email: ${email}`)
                    }

                    expect(statusCode).toBe(201);
                    expect(responseBody.user.email).toBe(email);
                    expect(responseBody.user.username).toBe(username);

                    registeredEmail = email;
                    registeredPassword = password;
                    registeredUsername = username;


                } catch (err) {
                    console.log(`❌  Error: ${err}`);
                    throw err;
                }
            };
        });

        //2.Test 2: 
        //Đăng nhập vào tài khoản đã tạo ở test 1
        await test.step('🚀  Testcase 02 - 02.1: Login article', async () => {

            loginAPI = new LoginAPI(request);
            const response: APIResponse = await loginAPI.UserLogin(registeredEmail, registeredPassword);

            const statusCode = response.status();
            //verify lại xem kết quả status code đúng hay không
            expect(statusCode).toBe(200);//.toBe dùng cho con số hoặc chữ mà k cần await nhiều, thường dùng cho API 
            console.log(`🟢  status code: ${response.status()}`);

            //Lấy token ra để sử dụng cho nhưng api khác cần token
            //phải có await thì mới có data và không bị lỗi 
            token = (await response.json()).user.token;//trả về cho 1 cái chuỗi .(.user.token là đang lấy ở response khi chạy API)
            //Verify token để không bị null hoặc k rỗng do token có thể động => defin ed rõ ràng được token
            expect(token).toBeDefined();
            console.log(`token: ${token}`);
            //In ra 20 kí tự đầu tiên của token nếu không muốn in toàn bộ token thì sẽ dùng câu lệnh này 
            console.log(`🟢  Logged in successfully, token: ${token.substring(0, 20)}...`);
        });

        //Thêm mới article:
        await test.step('🚀  Testcase 02 - 02.2: Thêm mới article', async () => {
            const random = Math.floor(Math.random() * 100000000000000);
            const articleName = `API in Playwright ${random}`;
            const articleAbout = `How to use Playwright to create article ${random}`;
            const articleTags = ` Playwright Viet Nam, pw, pw-k17 ${random}`;
            const articleBody = ` Nội dung mô tả lần: ${random}`;

            addArticleAPI = new AddArticleAPI(request, token);
            for (let i = 1; i <= 1; i++) {
                try {
                    const response: APIResponse = await addArticleAPI.AddArticle(articleName, articleAbout, articleBody, articleTags);
                    const statusCode: number = response.status();
                    const responseBody = await response.json();
                    slug = responseBody.article.slug;
                    console.log(`✅ Gán slug toàn cục: ${slug}`);

                    console.log(`📩  Status: ${statusCode}`)
                    console.log(`📄  Response body: ${JSON.stringify(responseBody, null, 2)}`);

                    if (statusCode === 201) {
                        console.log(`✅  Thêm mới lần ${i} thành công: : articleAbout: ${articleAbout}, articleBody: ${articleBody}, articleName: ${articleName}, articleTags: ${articleTags}`)
                    } else {
                        console.log(`❌  Thêm mới lần ${i}  thất bại: articleAbout: ${articleAbout}, articleBody: ${articleBody}, articleName: ${articleName}, articleTags: ${articleTags}`)
                    }

                    expect(statusCode).toBe(201);

                    const { title } = responseBody;
                    console.log(slug);
                    console.log(title);
                } catch (err) {
                    console.log(`❌  Error: ${err}`);
                    throw err;
                }
            };
        });

        //3.  Test 3: Thêm mới 5 comment với nội dung: “Comment 01”, “Comment 02”, “Comment 03”, “Comment 04”, “Comment 05” vào article đã tạo ở test 2. 
        await test.step('🚀  Testcase 03: Add 5 comments', async () => {
            console.log("🔑 Token hiện tại:", token);
            console.log("🧩 Slug hiện tại:", slug);

            if (!slug || !token) {
                throw new Error("❌ Thiếu slug hoặc token! Hãy kiểm tra lại Testcase 1 và 2 trước đó.");
            }

            addCommentAPI = new AddCommentAPI(request, token);

            for (let i = 1; i <= 5; i++) {
                const commentBody = `Comment 0${i}`;
                console.log(`🟢  Gửi comment lần ${i}: ${commentBody}`);

                const response: APIResponse = await addCommentAPI.AddComment(slug, commentBody);
                const statusCode = response.status();
                const responseBody = await response.json();

                console.log(`📩  Status: ${statusCode}`);
                console.log(`📄  Response body: ${JSON.stringify(responseBody, null, 2)}`);

                expect(statusCode).toBe(200);
                expect(responseBody.comment.body).toBe(commentBody);

                const actualCommentId = responseBody.comment.id;
                if (commentBody === 'Comment 02' || commentBody === 'Comment 05') {
                    listIdComment.push(actualCommentId);
                }

                console.log(`📝  Add comment lần ${i}: ${commentBody} (id: ${actualCommentId})`);
            }
        });

        //4. Test 4: Xoá “Comment 02”, “Comment 05” đã tạo ở test 3
        await test.step('Testcase 4: Xóa comment 2 & comment 5', async () => {

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
        await test.step('Testcase 5: Xóa article đã tạo', async () => {
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
});





