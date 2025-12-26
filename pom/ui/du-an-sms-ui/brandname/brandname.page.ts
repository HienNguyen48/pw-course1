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
    xpathBtnLuu = "//button[@class = 'btn btn-primary' and text() =' Lưu']";
    xpathBtnCaiDat = "button#btnBrandnameSettings";
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
            { provider: 'NCC_VMG', group: 'GROUP_MXH' },
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
        const btnThemMoi = this.page.locator(this.xpathBtnThemmoi);

        await expect(btnThemMoi).toBeVisible();
        await expect(btnThemMoi).toBeEnabled();

        await btnThemMoi.click();

        // chờ input đặc trưng
        await expect(
            this.page.locator(this.inputBrandname)
        ).toBeVisible({ timeout: 10000 });
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
    // async fillEndDate() {

    // }
    async ChecktelcoCheckbox(name: keyof typeof this.checkTelco) {
        const text = this.checkTelco[name];

        const checkboxTelco = this.page.locator(`//input[@name='cbTelco' and @value='${text}']`)
        const label = this.page.locator(`//label[contains(normalize-space(), 'Mở luồng ${text}')]`);

        if (await checkboxTelco.isChecked()) return;
        await label.click();

    }
    async checkCaiDat(telco: keyof typeof this.checkTelco) {
        const text = this.checkTelco[telco];
        const checkCaiDat = this.page.locator(`//button[@onclick="ShowModalConfig('${text}')"]`);
        await expect(checkCaiDat).toBeVisible();
        await checkCaiDat.click();
    }
    // async checkNhaCungCap(NCC: keyof typeof this.checkNCC) {
    //     const text = this.checkNCC[NCC];
    //     const checkNhaCungCap = this.page.locator(`//input[@type='checkbox' and @value='${text}']/following-sibling::label[1]`);
    //     await expect(checkNhaCungCap).toBeVisible();

    //     await checkNhaCungCap.click();
    //     // const labelinputcheckbox = checkNhaCungCap.locator("xpath=following-sibling::label[1]");

    //     // await checkNhaCungCap.waitFor({ state: 'visible' });

    //     // if (!(await checkNhaCungCap.isChecked())) {
    //     //     await checkNhaCungCap.check({ force: true });
    //     //     // await this.page.waitForTimeout(1000);
    //     // }
    // }

    async checkNhaCungCap(NCC: keyof typeof this.checkNCC) {
        const text = this.checkNCC[NCC];

        const checkboxUI = this.page.locator(
            `//input[@type='checkbox' and @value='${text}']/ancestor::label`
        );

        await expect(checkboxUI).toBeVisible();
        await checkboxUI.click();
    }
    async checkNhom(group: keyof typeof this.checkGroup) {
        const text = this.checkGroup[group];
        const clickcomboNhom = this.page.locator(`//span[contains(@class,'select2-selection__rendered')]`);
        await clickcomboNhom.waitFor({ state: 'visible' });
        await clickcomboNhom.click();

        const ChonNhom = this.page.locator(`//li[contains(@class,'select2-results__option') and normalize-space()='${text}']`);
        await ChonNhom.waitFor({ state: 'visible' });
        await ChonNhom.click();

        await expect(clickcomboNhom).toHaveText(text);
    }
    async applyAllTelcoConfig(telcos: string[]) {
        for (const telco of telcos) {
            //click vào các telco
            await this.ChecktelcoCheckbox(telco as keyof typeof this.checkTelco);

            // await this.checkCaiDat(telco as keyof typeof this.checkCaiDat);

            //Lấy ds NCC & group theo telco đã chọn
            //ép kiểu telco(bằng cách dùng as keyof typeof) thành key hợp lệ của object để typescript k báo lỗi
            const listNCC = this.Telco_Provider_Group[telco as keyof typeof this.Telco_Provider_Group];

            //nếu telco k có ncc => bỏ qua 
            if (!listNCC || listNCC.length === 0) continue;
            //lặp qua tất cả các ncc & group 
            for (const item of listNCC) {
                const { provider, group } = item;
                await this.checkCaiDat(telco as keyof typeof this.checkCaiDat);
                //chọn ncc
                await this.checkNhaCungCap(provider as keyof typeof this.checkNCC);
                await this.checkNhom(group as keyof typeof this.checkGroup);

                //click Lưu
                const btnLuu = this.page.locator(this.xpathBtnLuu);
                if (await btnLuu.isVisible()) {
                    await btnLuu.click();
                }
                await this.page.waitForSelector(this.xpathBtnLuu, {
                    state: 'detached'
                });


            }

        }
    }
    async checkBtnCaiDat() {
        const btnCaiDat = this.page.locator(this.xpathBtnCaiDat);
        await expect(btnCaiDat).toBeVisible();
        await btnCaiDat.click();
    }

}

