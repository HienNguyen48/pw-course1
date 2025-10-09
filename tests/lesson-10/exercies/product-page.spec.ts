import { test, expect } from '@playwright/test';
import { ProductPage02 } from 'pom/02.pom.product.page';

test("Bài học 2: Product page", async ({ page }) => {
    const number1 = 3;
    const number2 = 2;
    const number3 = 1;

    const productPageOne = new ProductPage02(page);

    await test.step('Bài học 2: product page', async () => {
        await productPageOne.navigateProductPage();
        await productPageOne.gotoPage("product");
    });

    await test.step("Thêm SP 1: 2 sản phẩm vào giỏ hàng", async () => {
        await productPageOne.AddProductToCart("Product 1", number1);
    });

    await test.step("Thêm SP 2: 3 sản phẩm vào giỏ hàng", async () => {
        await productPageOne.AddProductToCart("Product 2", number2);
    });

    await test.step("Thêm SP 3: 1 sản phẩm vào giỏ hàng", async () => {
        await productPageOne.AddProductToCart("Product 3", number3);
    });

    //Kiểm tra bảng hiển thị 
    await test.step("verify thông tin", async () => {

        const allQuatities = await productPageOne.getAllQuatity();
        console.log(`In ra thông tin tổng số lượng SP: ${allQuatities}`)

        const allQuatitiesByProduct = await productPageOne.getQuatityByProduct("Product 1");
        console.log(`In ra thông tin số lượng Product 1: ${allQuatitiesByProduct}`)

        expect(allQuatitiesByProduct).toBe('3');
    });

    //Kiểm tra tính tổng giá của tất cả sản phẩm 
    await test.step("Tính tổng của all sản phẩm", async() => {
        const TotalAllprice = await productPageOne.TotalQuatity();
        console.log(`In ra thông tin tổng số tiền của tất cả SP: ${TotalAllprice}`);
    })



});