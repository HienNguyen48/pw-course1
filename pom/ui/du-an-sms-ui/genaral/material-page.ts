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
        const menu = await this.page.locator(`//span[normalize-space(.)='${menuPage}']`);
        await menu.waitFor({ state: "visible" });
        await menu.click();
    }
}