import { expect, Locator, Page } from '@playwright/test';
import { MaterialBasePage } from './01.pom.materialbase.page';


export class ProductPage02 extends MaterialBasePage {
    table: Locator;

    constructor (page: Page){
        super(page);
        this.table = page.locator("//table//ancestor::div[@class= 'cart']");
    }

    
    async navigateProductPage () {
        await this.openMaterialPage();
    }
    
    BtnAddToCart (productName: string){
        return `//div[contains(text(),'${productName}')]//following-sibling::button`;
    }

     async AddProductToCart(productName: string, SL: number){
        await this.page.locator(this.BtnAddToCart(productName)).click({ clickCount: SL });
    }

    //Kiểm tra bảng hiển thị
    async VisibleInTable(){
        await expect(this.table).toBeVisible();
    }

    //Lấy toàn bộ quatity 
     async getAllQuatity() {
        await this.page.waitForSelector("//tbody//tr");
        const rows = this.page.locator("//tbody//tr");
        const rowCount = await rows.count();
        console.log("Số hàng trong bảng:", rowCount);
        
        const quantities: string[] = [];
        
        for (let i = 1; i <= rowCount; i++) {
            const qty = await this.page.locator(`//tbody//tr[${i}]//td[3]`).textContent();
            const value = qty ? qty.trim() : '';
            quantities.push(value);
            console.log("In ra thông tin:", value);
  }
   return quantities;
}

     //Lấy quatity theo tên SP
     async getQuatityByProduct(product: string) {
        const cell = await this.page.locator(`//tr[td[1][normalize-space()='${product}']]/td[3]`);
        const text = await cell.textContent();
         return text ? text.trim() : '';
     }

    // }

