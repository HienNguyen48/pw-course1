import { test, expect } from '@playwright/test';
import { ProductPage02 } from 'pom/02.pom.product.page';
import { ProductPage } from 'pom/production.page';

test("Bài học 2: Product page", async ({ page }) => {

    const productPageOne = new ProductPage02(page);

    await test.step('Bài học 2: product page', async () => {
        await productPageOne.navigateProductPage();
        await productPageOne.gotoPage("product");
    })

    await test.step("Thêm SP 1: 2 sản phẩm vào giỏ hàng", async() => {
        await productPageOne.AddProductToCart("Product 1", 2);
    })

    await test.step("Thêm SP 2: 3 sản phẩm vào giỏ hàng", async() => {
        await productPageOne.AddProductToCart("Product 2", 3);
    })

      await test.step("Thêm SP 3: 1 sản phẩm vào giỏ hàng", async() => {
        await productPageOne.AddProductToCart("Product 3", 1);
    })

    // await test.step("Verify thông tin trong table", async() => {
    //     const userInfoProduct = await productPageOne.getXpathShoppingCartInTable();

    // })



});

