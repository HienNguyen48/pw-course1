import { APIResponse, test, expect } from '@playwright/test';
import { SignUpAPI } from 'pom/sign-up-api';

const username = "GaoNho2022";
const email = "Gaonho22@gmail.com";
const password = "Gao@122021";

let signUpAPI: SignUpAPI;

test.describe('Demo POM API', () => {

    test('Test SignUp', async ({ request }) => {

        signUpAPI = new SignUpAPI(request);
        
        const response: APIResponse = await signUpAPI.signUp(email, password, username);

        //verify statusCode
        expect(response.status()).toBe(201);

        // verify response body
        const responseBody = await response.json();
        const actualEmail: string = responseBody.user.email;
        const actualUserName: string = responseBody.user.username;

        expect(actualEmail).toBe(email);
        expect(actualUserName).toBe(username);
    });
});

