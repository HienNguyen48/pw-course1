import { APIResponse, test, expect } from '@playwright/test';
import { request } from 'http';

const baseURL: string = "https://conduit-api.bondaracademy.com/";
let token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxNDA2fSwiaWF0IjoxNzU5OTk4MTYzLCJleHAiOjE3NjUxODIxNjN9.irwQ_NlOsX_WmtGCtkrSFEld7FpHybNrRYknqSaQp9E';

//đối với UI thì dùng page
//đối với API thì dùng request
test('Demo1 method GET', async ({ request }) => {

    const response: APIResponse = await request.get(`${baseURL}api/articles?limit=10&offset=0`);//hàm GET

    console.log(`status code: ${response.status()}`);

    console.log(await response.json());

})

test('Demo 2 method POST để lấy token', async ({ request }) => {
    const response: APIResponse = await request.post(`${baseURL}api/users/login`, {
        data: {
            "user": {
                "email": "teovn84@gmail.com",
                "password": "teo@123"
            }
        }
    });//hàm POST
    const statusCode = response.status();
    //verify lại xem kết quả status code đúng hay không
    expect(statusCode).toBe(200);//.toBe dùng cho con số hoặc chữ mà k cần await nhiều, thường dùng cho API 
    console.log(`status code: ${response.status()}`);


    //Lấy token ra để sử dụng cho nhưng api khác cần token
    //phải có await thì mới có data và không bị lỗi 
    token = (await response.json()).user.token;//trả về cho 1 cái chuỗi 
    //Verify token để không bị null hoặc k rỗng do token có thể động => defin ed rõ ràng được token
    expect(token).toBeDefined();
    console.log(`token: ${token}`);
});

test('Demo 3 tạo article', async ({ request }) => {
    const response: APIResponse = await request.post(`${baseURL}api/articles/`, {
        data: {
            "article": {
                "title": "Test K122 demo",
                "description": "assss",
                "body": "#Hello",
                "tagList": [
                    "test3"
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
});