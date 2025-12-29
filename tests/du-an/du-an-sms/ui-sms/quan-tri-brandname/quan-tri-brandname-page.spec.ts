import { test, expect } from "@playwright/test";
import { LoginPageSMS } from "pom/ui/du-an-sms-ui/login/login.page";
import { BrandnamePage } from "pom/ui/du-an-sms-ui/brandname/brandname.page";

const userNameSuccess = "test.admin";
const passWordSuccess = "Abc123456@";
let newBrandname: string;

test.describe("Brandname", async () => {
    test("Mở màn hình thêm mới brandname", async ({ page }) => {

        await test.step("Navigate Brandname", async () => {
            let loginPageSMS = new LoginPageSMS(page);
            await loginPageSMS.openLoginPage();
            await loginPageSMS.login(userNameSuccess, passWordSuccess);
            await loginPageSMS.verifySuccess();

        })

        const brandnamePage = new BrandnamePage(page);
        await test.step("Click Thêm mới => mở ra màn hình thêm mới", async () => {
            await brandnamePage.gotoBrandnamePage();
        })

        await test.step("Click Thêm mới => mở ra màn hình thêm mới", async () => {
            await brandnamePage.clickBtnThemMoi();
        })

        await test.step("Fill thông tin trên màn hình thêm mới", async () => {
            const  {brandname} = await brandnamePage.generateRandomDataNumber("iris_");
            newBrandname = brandname;
            await brandnamePage.Addbrandname("iris", brandname);
            await brandnamePage.applyAllTelcoConfig(["VIETTEL", "VINA", "ITELECOM", "REDDI"]);
            await brandnamePage.checkBtnCaiDat();
            await brandnamePage.clikBtnXacNhanThemMoiBrandname();
        })

        await test.step("verify brandname đã thêm mới", async()=>{
            await brandnamePage.verifyBrandnameAddSuccess("iris",newBrandname);
        })
    })
})





