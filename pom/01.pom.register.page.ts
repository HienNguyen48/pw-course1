import { Page } from "@playwright/test";
import { MaterialBasePage } from "./01.pom.materialbase.page";
import { userInfo } from "os";


export class RegisterBasePage extends MaterialBasePage {
    xpathUsername : string;
    xpathEmail : string;
    xpathGenderMale : string;
    xpathGenderFemale : string;
    xpathHobbiesReading: string;
    xpathHobbiesTraveling: string;
    xpathHobbiesCooking: string;
    xpathInterests : string;
    xpathCountry: string;
    xpathDateOfBirth: string;
    xpathBtnRegister: string;
    xpathTable: string;


    constructor(page: Page){
        super(page);
        this.xpathUsername = "//input[@id='username']";
        this.xpathEmail = "//input[@id='email']";
        this.xpathGenderMale = "//input[@value='male']";
        this.xpathGenderFemale = "//input[@value='female']";
        this.xpathHobbiesReading = "//input[@value = 'reading']";
        this.xpathHobbiesTraveling = "//input[@value = 'traveling']";
        this.xpathHobbiesCooking = "//input[@value = 'cooking']";
        this.xpathInterests = "//select[@id='interests']";
        this.xpathCountry = "//select[@id='country']";
        this.xpathDateOfBirth= "//input[@id='dob']";
        this.xpathBtnRegister ="//button[text() = 'Register']";
        this.xpathTable = "//table[@id='userTable']//tbody//tr";

    }
    
    async navigateRegisterPage (){
        await this.openMaterialPage();
    }

    async fillUsername(username: string) {
       await this.page.locator(this.xpathUsername).fill(username);
    }

    async fillEmail(email: string) {
       await this.page.locator(this.xpathEmail).fill(email);
    }
    
     async fillInterests() {
       await this.page.locator(this.xpathInterests).selectOption("art");
    }

    async fillCountry() {
       await this.page.locator(this.xpathCountry).selectOption("australia");
    }


     async fillDateOfBirth(dateofbirth: string) {
        const dob = this.page.locator(this.xpathDateOfBirth)
        await dob.click();
        await dob.fill("");
        await dob.type(dateofbirth);
    }

    async Btnregister(){
        await this.page.locator(this.xpathBtnRegister).click();
    }

    async getxpathInfoInTable() {
        const numberOfrow = await this.page.locator("//tbody//tr").count();
        const actualUsername = await this.page.locator(`//tbody//tr[${numberOfrow}]//td[2]`).textContent();
        const userInfo = {
            username: actualUsername,
            email: await this.page.locator(`//tbody//tr[${numberOfrow}]//td[3]`).textContent(),
            information : await this.page.locator(`//tbody//tr[${numberOfrow}]//td[4]`).textContent(),
        }
        
        return userInfo;
    }
    

    async checkGender(gender: string) {
        if(gender.toLowerCase() === "male"){
            await this.page.locator(this.xpathGenderMale).click();
        }else if(gender.toLowerCase() === "female") {
            await this.page.locator(this.xpathGenderFemale).click();
        } else{
            `In ra ${gender} không hợp lệ`
        }
        
    }

    async checkHobbies(hobbies: string){
        if(hobbies.toLocaleLowerCase() === "reading") {
            await this.page.locator(this.xpathHobbiesReading).check();
        }else if(hobbies.toLocaleLowerCase()  === "traveling"){
            await this.page.locator(this.xpathHobbiesTraveling).check();
        }else if(hobbies.toLocaleLowerCase()  === "reading"){
            await this.page.locator(this.xpathHobbiesCooking).check();
        }else{
            `In ra ${hobbies} không đúng giá trị`
        }

    }
}