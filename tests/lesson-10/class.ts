import { Page } from "@playwright/test";

class BasePage {
    //thuoc tinh
    xpathDasboard = "#dasboard";
    page: Page;


    //Ham khoi tạo
    constructor( page: Page) {
        this.page = page;
    }

    //method
    async navigateTo(pageName:string){
        await this.page.goto(`http: ${pageName}`);
    }
}

//Khởi tạo ra class con. Muốn dùng class con phải dùng 1 keyword export
 export class LoginPage extends BasePage {
    // thuộc tính
    xpathUssername = "#username";

    //constructor
    constructor(page: Page){
        super(page)
    }

    //method
}

