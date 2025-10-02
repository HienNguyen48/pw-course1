import { test } from "@playwright/test";
import { LoginPage } from "./class";

test ("Class extends", async ( { page }) => {
    const loginPage = new LoginPage(page);
    loginPage.navigateTo // kế thừa tại đây 
}
)

