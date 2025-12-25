import { Page } from "@playwright/test";

export class GeneralBasePageSMS {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async openMaterialPage() {
        await this.page.goto("http://192.168.1.9:40101/Account/Login?ReturnUrl=%2F");
    }

    async gotoPage(menuPage: string) {
        // const menu = await this.page.locator(`//span[normalize-space(.)='${menuPage}']`);
        const menu = await this.page.getByRole('link', { name: menuPage }).first();
        await menu.waitFor({ state: "visible", timeout: 10000 });
        await menu.click();
    }

    async generateRandomDataNumber(baseName: string) {
        const randomNumber = Math.floor(Math.random() * 100000); // 0 → 99999
        const brandname = `${baseName}_${randomNumber}`;
        return { brandname };
    }
}