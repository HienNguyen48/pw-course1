import { test } from '@playwright/test';

test.describe('demo hook', async () => {
    // test.beforeAll(async () => {
    //     console.log('- Before All');
    // });
    // test.afterAll(async () => {
    //     console.log('- After All');
    // })

    // test.beforeEach(async () => {
    //     console.log(' --before each');
    // })

    // test.afterEach(async () => {
    //     console.log(' --after each');
    // })

    // test('Test1', async () => {
    //     console.log(` ---test 1`);
    // })

    // test('Test2', async () => {
    //     console.log(` ---test 2`);
    // })


    test.beforeEach(async () => {
        console.log('Mở trang web');
    })

    test('Login fail', async () => {
        // console.log('Mở trang web');
        console.log('input username sai');
        console.log('input password sai');
        console.log('click button login');
    });

    test('Login success', async () => {
        // console.log('Mở trang web');
        console.log('input username đúng');
        console.log('input password đúng');
        console.log('click button login');
    });
})