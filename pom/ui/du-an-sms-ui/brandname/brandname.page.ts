import { expect, Page } from "@playwright/test";
import { GeneralBasePageSMS } from "../genaral/material-page";

export class BrandnamePage extends GeneralBasePageSMS {

    constructor(page: Page) {
        super(page);
    }

    async gotoBrandnamePage() {
        await this.gotoPage("Dịch vụ Brandname");
        await this.gotoPage("Quản trị và cài đặt");
        await this.gotoPage("Brandname B2B");

        await expect(
            this.page.locator("text=Quản trị Brandname B2B")
        ).toBeVisible();
    }
}

