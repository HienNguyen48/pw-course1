import { expect, Page } from "@playwright/test";
import { GeneralBasePageSMS } from "../genaral/material-page";

export class BrandnamePage extends GeneralBasePageSMS {
    xpathBtnThemmoi = "//span[contains(text(), 'Thêm mới')]";
    CssClickComboboxKH = "//label[contains(normalize-space(),'Khách hàng')]/following::span[contains(@class,'select2-selection')][1]";
    // inputKhachHang = "";
    inputBrandname = "input#txtBrandname";
    xpathBtnKiemTra = "//button[@onclick='CheckExistBrandName()' and text()='Kiểm tra']";
    inputNgayhethan = "//input[@id='txtExpDate']";
    inputGhiChu = "//textarea[@id='txtNote']";
    checkTelco = {
        VIETTEL: 'Viettel', VINA: 'Vinaphone', MOBIFONE: 'Mobifone', VIETNAMOBILE: 'Vietnamobile', GTEL: 'GTel', ITELECOM: 'ITelecom', REDDI: 'Reddi'
    };
    checkNCC = {
        NCC_IRIS: 'IRIS',
        NCC_GAPIT: 'GAPIT',
        NCC_VMG: 'VMG',
        NCC_SOUTHTELECOM: 'SOUTHTELECOM',
        NCC_VIETGUYS: 'NCC_VIETGUYS',
        NCC_INCOM: 'NCC_INCOM',
        NCC_NEO: 'NEO',
        NCC_CMC: 'CMC',
        NCC_VNET: 'VNET',
        NCC_HNI: 'HNI',
        NCC_HNI_PVCB: 'HNI-PVCB',
        NCC_PROVIONE: 'NCC_PROVIONE',
        NCC_Vietnamobile: 'NCC_Vietnamobile',
        NCC_Viettel: 'Viettel',
        NCC_ViettelBankplus: 'ViettelBankplus',
        NCC_VNPTVAS: 'VNPTVAS',
        NCC_Gtel: 'Gtel',
        NCC_HGC: 'HGC',
        NCC_MVAS: 'MVAS',
        NCC_MinhThanh: 'MinhThanh',
        NCC_VNPAY: 'VNPAY'
    };
    checkGroup = {
        GROUP_TC_CK_BH: 'Tài chính, chứng khoán, bảo hiểm',
        GROUP_YT_GD: 'Y tế, giáo dục',
        GROUP_Khac: 'Khác  ',
        GROUP_NH: 'Ngân hàng',
        GROUP_NL: 'Năng lượng',
        GROUP_CN: 'Công nghiệp',
        GROUP_MXH: 'Mạng xã hội',
        GROUP_TMDT: 'Thương mại điện tử',
        GROUP_GX: 'Gọi xe'
    }
    Telco_Provider_Group = {
        VIETTEL: [
            { provider: 'NCC_GAPIT', group: 'GROUP_TC_CK_BH' },
            { provider: 'NCC_IRIS', group: 'GROUP_NH' },
            { provider: 'NCC_NCC_VMG', group: 'GROUP_MXH' },
            { provider: 'NCC_NEO', group: 'GROUP_TMDT' }
        ],
        VINA: [
            { provider: 'NCC_MinhThanh', group: 'GROUP_GX' },
            { provider: 'NCC_VNPAY', group: 'GROUP_YT_GD' },
            { provider: 'NCC_Gtel', group: 'GROUP_NL' },
            { provider: 'NCC_Vietnamobile', group: 'GROUP_Khac' }
        ],
        ITELECOM: [
            { provider: 'NCC_VIETGUYS', group: 'GROUP_GX' },
            { provider: 'NCC_HGC', group: 'GROUP_YT_GD' },
            { provider: 'NCC_ViettelBankplus', group: 'GROUP_NL' },
            { provider: 'NCC_PROVIONE', group: 'GROUP_Khac' }
        ],
        REDDI: [
            { provider: 'NCC_INCOM', group: 'GROUP_Khac' },
            { provider: 'NCC_MVAS', group: 'GROUP_GX' },
            { provider: 'NCC_VNPAY', group: 'GROUP_TMDT' },
            { provider: 'NCC_HNI', group: 'GROUP_YT_GD' }
        ]

    }
    constructor(page: Page) {
        super(page);
    }
    async gotoBrandnamePage() {
        await this.gotoPage("Dịch vụ Brandname");
        await this.gotoPage("Quản trị và cài đặt");
        await this.gotoPage("Brandname B2B");

        await expect(
            this.page.locator("text=Quản trị Brandname B2B")
        ).toBeVisible({ timeout: 10000 });
    }
    async clickBtnThemMoi() {
        await this.page.locator(this.xpathBtnThemmoi).click();
        const textThemMoiBrandname = this.page.locator("//h3[@class='m-portlet__head-text' and normalize-space(.)='Thêm mới Brandname']");
        await expect(textThemMoiBrandname).toBeVisible();
    }
    async fillKhachHang(khachhang: string) {
        const selectKhachHang = this.page.locator(this.CssClickComboboxKH);
        await selectKhachHang.waitFor({ state: "visible" });
        await selectKhachHang.click();

        //chọn option theo text(iri/ BIDV...)
        const optionKH = this.page.locator(`//li[contains(@class,'select2-results__option') and normalize-space()='${khachhang}']`);
        await optionKH.waitFor({ state: "visible" });
        await optionKH.click();

        await expect(this.page.locator("#select2-dlDoiTac-container")).toHaveText(khachhang);
    }
    async fillBrandname(brandname: string) {
        if (!brandname || brandname.trim() === "") {
            console.log("Vui lòng nhập brandname");
        }
        const brandnameinput = this.page.locator(this.inputBrandname);
        await brandnameinput.waitFor({ state: "visible" });
        await brandnameinput.fill(brandname);

        const buttonKiemTra = this.page.locator(this.xpathBtnKiemTra);
        await buttonKiemTra.click();
    }
    async Addbrandname(khachhang: string, brandname: string) {
        await this.fillKhachHang(khachhang);
        await this.fillBrandname(brandname);
    }
    async fillEndDate() {

    }
    async telcoCheckbox(name: string) {
        return await this.page.locator(`//input[@id='ckViettel' and @value = '${name}']`).check();
    }
    async checkCaiDat(name: string) {
        return this.page.locator(`//button[@onclick="ShowModalConfig('${name}')"]`)
    }

}

