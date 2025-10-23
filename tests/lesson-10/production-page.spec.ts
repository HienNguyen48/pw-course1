import { test } from "@playwright/test";
//import { ProductPage} from "pom/production.page";


test.skip('produc Page', async ( { page }) => {
    //bắt buộc phải có khai báo hàm khởi tạo
    //VD để khai báo 1 con người thì tôi cần có 1 cái CCCD thì lúc đó mới có thể công nhận đó la 1 người được 
    const productPage = new ProductPage(page);


    await test.step("Navigate to Product page", async() =>{
        await productPage.navigateProductpage();
    })

    await test.step("Click on Product 1: 2 items", async () =>{
        await productPage.AddproductTocart("Product 1", 2);
    });

    await test.step("Click on Product 2: 3 items", async () =>{
        await productPage.AddproductTocart("Product 2", 3);
    });

    await test.step("Click on Product 3: 1 items", async () =>{
        await productPage.AddproductTocart("Product 3", 1);
    });
})