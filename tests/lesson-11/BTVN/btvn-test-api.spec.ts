import { APIResponse, test, expect } from '@playwright/test';
import { request } from 'http';

const baseURL: string = "https://conduit-api.bondaracademy.com";
let token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjozNjY5NH0sImlhdCI6MTc2MDAwMTQxNSwiZXhwIjoxNzY1MTg1NDE1fQ.uX_d3cbhE5I9GfMcv1-fLswqThGWPxR5RssgsEKuK8c';

//1.Test1: Đăng ký tài khoản
test('Testcase1: Đăng ký tài khoản', async ({ request }) => {
    // const random = Math.floor(Math.random() * 10000);
    // const email = `Nguyenhienit${random}@gmail.com`;


    const response: APIResponse = await request.post(`${baseURL}/api/users`, {
        data: {
            "user": {
                "email": "nguyenhienit100@gmail.com",
                "password": "Gao@15122023",
                "username": `K193-demo`
            }
        }
    });
    const statusCode = response.status();
    expect(statusCode).toBe(201);
    console.log('response:', await response.json());
});

//2.Test 2: 
//Đăng nhập vào tài khoản đã tạo ở test 1
test('Login article', async ({ request }) => {
    const response: APIResponse = await request.post(`${baseURL}/api/users/login`, {
        data: {
            "user": {
                "email": "nguyenhienit100@gmail.com",
                "password": "Gao@15122023"
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
})

//Thêm mới article:
test('Thêm mới article', async ({ request }) => {
    const random = Math.floor(Math.random() * 10000);
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
    console.log('response:', await response.json());
})

//3.  Test 3: Thêm mới 5 comment với nội dung: “Comment 01”, “Comment 02”, “Comment 03”, “Comment 04”, “Comment 05” vào article đã tạo ở test 2. 
test('Add comment new', async ({ request }) => {
    for (let i = 1; i <= 5; i++) {
        const commentBody = `${i}`
        const response: APIResponse = await request.post(`${baseURL}/api/articles/API-in-Playwright-36694/comments`, {
            data: {
                "comment": {
                    "body": commentBody
                }
            },
            headers: {
                'authorization': `Token ${token}`
            }

        })
        const statusCode = response.status();
        expect(statusCode).toBe(200);
        console.log('response:', await response.json());
    }
})

//4. Test 4: Xoá “Comment 02”, “Comment 05” đã tạo ở test 3 
test('Xóa comment 2 & comment 5', async ({ request }) => {
    const response: APIResponse = await request.get(`${baseURL}/api/articles/API-in-Playwright-36694/comments/`)

    console.log(`status code: ${response.status()}`);

    console.log(await response.json());
})





