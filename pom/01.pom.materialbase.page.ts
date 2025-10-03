import { Page, Locator } from "@playwright/test";
import { ProductPage } from "./production.page";
import { register } from "module";


export class MaterialBasePage {
    page: Page;
    xpathRegisterPage: string;
    xpathProductPage: string;
    cssTodoPage: string;
    personalNote: Locator;


    constructor(page: Page){
        this.page = page;
        this.xpathProductPage = "//a[contains(text(),'Bài học 2: Product page')]";
        this.xpathRegisterPage = "//a[contains(text(),'Bài học 1: Register Page')]";
        this.cssTodoPage = "//a[contains(text(),'Bài học 3: Todo page')]";

        this.personalNote = page.locator("//a[contains(text(),'Bài học 4: Personal notes')]");
    }
    
    async openMaterialPage() {
        this.page.goto("https://material.playwrightvn.com/");

    }

    async gotoPage(pageName: string){
        // await this.page.click(`//a[contains(text(),'${pageName}')]`);
        switch (pageName){
            case "product":
                await this.page.click(this.xpathProductPage);
                break;

            case "register":
                await this.page.click(this.xpathRegisterPage);
                break;

            case "todo":
                await this.page.click(this.cssTodoPage);
                break;
            
            default:
                throw new Error (`Trang ${pageName} không hỗ trợ`)
        }
    }




}