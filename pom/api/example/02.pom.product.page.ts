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


    //Lấy toàn bộ quatity 
     async getAllQuatity() {
        await this.page.waitForSelector("//tbody//tr");
        const rows = this.page.locator("//tbody//tr");
        const rowCount = await rows.count();
        console.log("Số hàng trong bảng:", rowCount);

    //Tạo một mảng rỗng để chứa các giá trị số lượng lấy được từ từng dòng.
        const quantities: string[] = [];
        
        //Lặp từ hàng thứ 1 đến hàng cuối cùng trong bảng (dựa trên số dòng rowCount).
        for (let i = 1; i <= rowCount; i++) {
            
            //Với mỗi hàng, nó tìm đến ô thứ 3 (td[3]), nơi chứa thông tin số lượng.
            const qty = await this.page.locator(`//tbody//tr[${i}]//td[3]`).textContent();
            
            // Nếu qty khác null, thì .trim() để loại bỏ khoảng trắng.
            // Nếu là null hoặc undefined, thì gán giá trị rỗng ('').
            const value = qty ? qty.trim() : '';
            
            //Thêm giá trị vừa lấy được vào mảng quantities
            quantities.push(value);
            console.log("In ra thông tin của các dòng quatity:", value);
  }
   return quantities;
}

     //Lấy quatity theo tên SP
     async getQuatityByProduct(product: string) {
        const cell = await this.page.locator(`//tr[td[1][normalize-space()='${product}']]/td[3]`);
        const text = await cell.textContent();
         return text ? text.trim() : '';
     }

     //Tính tổng tiền tại giỏ hàng đúng 
    async TotalQuatity(){
        let sumTotal = '';
        for( let i = 1; i <= 3; i++){
            const price = i * 10000;
            console.log (`${i}`);

            for(let j = 1; j <= 3; j++){
                const itemTotal = price * j;
                console.log(`Sản phẩm: ${i}, Giá: ${price} * Số lượng ${j} = ${itemTotal}`);
                sumTotal += itemTotal
            }
        }
        console.log(`Tổng tiền tất cả các sản phẩm trong giỏ hàng: ${sumTotal} VND`);
    }


    }