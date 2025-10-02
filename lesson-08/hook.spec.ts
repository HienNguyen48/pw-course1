import { test } from '@playwright/test';

test.describe('demo hook', async () => {

    // test.beforeAll(async () => {
    //     console.log('- Before All');
    // })

    // test.afterAll(async () => {
    //     console.log('- After all');
    // })

    // test.beforeEach(async () => {
    //     console.log(' -- Before each');
    // })

    //  test.afterEach(async () => {
    //     console.log(' -- after each');
    // })

    // test('Test1', async() => {
    //     console.log(` --- test 1`);
    // })

    //  test('Test2', async() => {
    //     console.log(` --- test 2`);
    // })

    //BeforeAll => chạy được 1 lần thui
    // Muốn mở trang web khi chạy các TCs thì mình phải dùng Before each => vì trước mình chưa có hook => thì mình phải có mở trang web ở mỗi Tcs
    //Nhưng đã học hook thì trước khi chạy các Tcs thì phải mở trang web => nên dùng before each (đừng lặp lại những hành động mình đã làm ở mỗi Tcs )
    test.beforeEach(async () => {
        console.log('- Mở trang web');
    })

    test('TC01 - Login fail', async({}) => {
        console.log('input username sai');
        console.log('input pasword sai');
        console.log('click button login');
    });


    test('TC02 -Login success', async({}) => {
        console.log('input username đúng');
        console.log('input pasword đúng ');
        console.log('click button login');
    });

});