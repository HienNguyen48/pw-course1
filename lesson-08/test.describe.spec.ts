import { test } from '@playwright/test';

//gom nhóm  Tcs, ở cái test.describe khong can cái page, cho cai page vao mỗi cái test độc lập của mình là được 
test.describe ('Authentication', async() => { 

test('login fail', async ({ page}) => {
     //code 
    })


test('login success', async ({ page}) => {
     //code 
    })

});