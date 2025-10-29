// import { test } from '@playwright/test';
import { test } from '../../../pom/fixtures/index.fixture';
// test ('env demo', async() => {
//     if(process.env.ENV === 'dev'){
//         console.log(process.env.USERNAME_DEV);
//         console.log(process.env.PASSWORD_DEV);
//         console.log(process.env.LOADING_TIME_DEV);
//     }else {
//         console.log(process.env.USERNAME_PROD);
//         console.log(process.env.PASSWORD_PROD);
//         console.log(process.env.LOADING_TIME_PRO);
//     }
// })

//Nếu môi trường là dev => thì sẽ in ra username & password của môi trường dev là ===>>> us-dev & pass-dev
// Ngược lại thì mình sẽ in ra ===>>> us-prod & pass-prod

//1. thêm 2 biến LOADING_TIME_DEV = 5000 & LOADING_TIME_PRO = 2000 vào file env
//Lấy data của LOADING_TIME này ở môi trường prod 

test('demo fixture env config', async ({ envConfig }) => {
  console.log(envConfig.get('USERNAME'));
  console.log(envConfig.get('PASSWORD'));
  console.log(envConfig.get('LOADING_TIME'));
});

