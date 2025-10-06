import { Page } from '@playwright/test';
import { MaterialBasePage } from './01.pom.materialbase.page';


export class ProductPage02 extends MaterialBasePage {


    constructor (page: Page){
        super(page);
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

    async getXpathShoppingCartInTable(){
        const sttRow = await this.page.locator("//tbody/tr").count();
        const actualProductName =  await this.page.locator(`//tbody/tr[${sttRow}]//td[1]`).textContent();
        const actualQuatity =  await this.page.locator(`//tbody/tr[${sttRow}]//td[3]`).textContent();
    }
    

    }

