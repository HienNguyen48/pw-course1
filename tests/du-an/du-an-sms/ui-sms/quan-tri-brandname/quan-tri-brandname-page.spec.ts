import { expect, test } from "@playwright/test";
import { BrandName } from "pom/ui/du-an-sms-ui/brandname/brandname.page";

test("Brandname", async ({ page }) => {
    let brandName = new BrandName(page);

    await test.step("Navigate", async () => {
        await brandName.gotoBrandnamePage();
    })
})