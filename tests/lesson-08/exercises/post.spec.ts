import { expect, test } from "@playwright/test";

// function generateXpathTagName(tagname: string) {
//   const xpathTagName = `//a[text()='${tagname}' or text() = '— ${tagname}']`;
//   return xpathTagName;
// }

// function generateXpathSlugName(tagname: string, slugname: string) {
//   const xpathSlugName = `//td[contains(., '${tagname}')]/following-sibling::td[text() = '${slugname}']`;
//   return xpathSlugName;
// }

// function generateXpathDeleteTagName(tagName: string) {
//   const xpathDeletetagName = `//a[text() = '${tagName}' or text() = '— ${tagName}']/ancestor::td//span[@class = 'delete']`;
//   return xpathDeletetagName;
// }

test.describe("POST - Post", async () => {
    let loginPageURL: string;
    let userCredential, navigationOption;
    let xpath;
    let msgError, msgSuccess;
    let tagNameList: string[] = [];
    let xpathSlugName, xpathTagName, xpathDeleteTagName, xpathRowTagName;
    let xpathMsgRequired = "//p[text()='A name is required for this term.']";
    let xpathMsgNameExist = "//p[text()='A term with the name provided already exists in this taxonomy.']";
    test.beforeAll(async () => {
        loginPageURL = "https://pw-practice-dev.playwrightvn.com/wp-admin";
        userCredential = {
            userName: "k12-mentor",
            password: "M8kPNkjOoph4hYE#g%ERf0tr",
        };
        navigationOption = {
            posts: "//div[normalize-space()='Posts']",
            tags: "//li[normalize-space() = 'Tags']",
            categories: "//li[normalize-space() = 'Categories']",
        };
        xpath = {
            userName: "//input[@id = 'user_login']",
            password: "//input[@id = 'user_pass']",
            btnLogin: "//input[@id = 'wp-submit']",
            buttonAddNewTag: "//input[@value = 'Add New Tag']",
            buttonAddNewCategory: "//input[@value = 'Add New Category']",
            inputTagname: "//input[@id = 'tag-name']",
            inputSlug: "//input[@id = 'tag-slug']",
            parentCategory: "//select[@id = 'parent']",
            errorMsg: "//div[@class = 'notice notice-error']",
            successMsg: "//button[@class = 'notice-dismiss']/preceding-sibling::p",
            slugName1: "//td[@class = 'slug column-slug']",
            errorMsgRequiredTagName: "//p[text()='A name is required for this term.']",
            errorMsgNameExist: "//p[text()='A term with the name provided already exists in this taxonomy.']"
        };
        xpathTagName = (tagname: string) => {
            return `//tbody//a[text()='${tagname}' or text() = '— ${tagname}']`;
        }
        xpathRowTagName = (tagname: string) => {
            return `//tr[td//a[@class='row-title' and text()='${tagname}']]`;
        }
        xpathSlugName = (tagName: string, slugname: string) => {
            return `//td[contains(., '${tagName}')]/following-sibling::td[text() = '${slugname}']`;
        }
        xpathDeleteTagName = (tagName: string) => {
            return `//a[text() = '${tagName}' or text() = '— ${tagName}']/ancestor::td//span[@class = 'delete']`;
        }


    });

    test.beforeEach(async ({ page }) => {
        // Login
        await page.goto(loginPageURL);
        await page.locator(xpath.userName).fill(userCredential.userName);
        await page.locator(xpath.password).fill(userCredential.password);
        await page.locator(xpath.btnLogin).click();

        // Di chuyển đến menu Posts
        await page.locator(navigationOption.posts).click();

        page.on('dialog', async dialog => {
            await dialog.accept();
        })
    });

    test.afterEach(async ({ page }) => {

        // Xóa list tag name vừa tạo
        for (let i = 0; i < tagNameList.length; i++) {
            await page.locator(xpathTagName(tagNameList[i])).hover();
            await page.locator(xpathDeleteTagName(tagNameList[i])).click();
        }
    });

    test("@POST_TAG_001 - Tag - add tag failed", async ({ page }) => {
        await test.step("Click button Add New Tag", async () => {
            // Di chuyển đến sub menu Tags
            await page.locator(navigationOption.tags).click();

            // Click button Add tag
            await page.locator(xpath.buttonAddNewTag).click();

            // Kiểm tra msg lỗi
            await expect(page.locator(xpath.errorMsgRequiredTagName)).toBeVisible();
        });

        await test.step("Điền thông tin tag: name = lesson tag", async () => {
            // Điền tag name và click button Add new tag
            await page.locator(xpath.inputTagname).fill("lesson tag");
            await page.locator(xpath.buttonAddNewTag).click();

            // Verify message lỗi
            await page.locator(xpath.errorMsgNameExist).isVisible();
            await expect(page.locator(xpath.errorMsgNameExist)).toBeVisible();
        });
    });

    test("@POST_TAG_002 - Tag - add tag success", async ({ page }) => {
        await test.step("Điền thông tin tag: name = tag k12 mentor", async () => {
            // Di chuyển đến sub menu Tags
            await page.locator(navigationOption.tags).click();

            // Điền tag name và click button Add new tag
            await page
                .locator(xpath.inputTagname)
                .fill(`tag ${userCredential.userName} mentor`);
            await page.locator(xpath.buttonAddNewTag).click();

            // Verify message add tag thành công
            msgSuccess = await page.locator(xpath.successMsg).textContent();
            expect(msgSuccess).toBe("Tag added.");

            // Verify tag mới được tạo
            await page
                .locator(xpathTagName(`tag ${userCredential.userName} mentor`))
                .isVisible();
        });

        await test.step("Điền thông tin tag: name = tag k12 mentor 02", async () => {
            // Điền tag name, slug name và click button Add new tag
            await page
                .locator(xpath.inputTagname)
                .fill(`tag ${userCredential.userName} mentor 02`);
            await page
                .locator(xpath.inputSlug)
                .fill(`tag-${userCredential.userName}-02`);
            await page.locator(xpath.buttonAddNewTag).click();

            // Verify message add tag thành công
            msgSuccess = await page.locator(xpath.successMsg).textContent();
            debugger;
            expect(msgSuccess).toEqual("Tag added.");

            // Verify tag mới được tạo
            await page
                .locator(
                    xpathTagName(`tag ${userCredential.userName} mentor 02`)
                )
                .isVisible();
            await page
                .locator(
                    xpathRowTagName(
                        `tag ${userCredential.userName} mentor 02`,
                    )
                ).locator(xpath.slugName1)
                .isVisible();
            tagNameList = [
                `tag ${userCredential.userName} mentor`,
                `tag ${userCredential.userName} mentor 02`,
            ];
        });
    });

    test("@POST_TAG_003 - Tag - slug auto remove special character", async ({
        page,
    }) => {
        await test.step("Điền thông tin tag: name = tag k12 mentor 03", async () => {
            // Di chuyển đến sub menu Tags
            await page.locator(navigationOption.tags).click();

            // Điền tag name và click button Add new tag
            await page
                .locator(xpath.inputTagname)
                .fill(`tag ${userCredential.userName} 03`);
            await page.locator(xpath.inputSlug).fill("Đây là tag đặc biệt @100 $200");
            await page.locator(xpath.buttonAddNewTag).click();

            // Verify message add tag thành công
            msgSuccess = await page.locator(xpath.successMsg).textContent();
            expect(msgSuccess).toBe("Tag added.");

            // Verify tag mới được tạo
            await page
                .locator(xpathTagName(`tag ${userCredential.userName} 03`))
                .isVisible();
            await page
                .locator(
                    xpathSlugName(
                        `tag ${userCredential.userName} 03`,
                        "day-la-tag-dac-biet-100-200"
                    )
                )
                .isVisible();
            tagNameList = [`tag ${userCredential.userName} 03`];
        });
    });

    test("@POST_CATEGORY_001 - Category - create category success", async ({
        page,
    }) => {
        await test.step("Điền thông tin tag: name = tag mentor", async () => {
            // Di chuyển đến sub menu Categories
            await page.locator(navigationOption.categories).click();

            // Điền categories name và click button Add new category
            await page
                .locator(xpath.inputTagname)
                .fill(`category ${userCredential.userName} 03`);
            await page
                .locator(xpath.inputSlug)
                .fill(`Đây là category đặc biệt @100 $200`);
            await page.locator(xpath.buttonAddNewCategory).click();

            // Verify message add tag thành công
            msgSuccess = await page.locator(xpath.successMsg).textContent();
            expect(msgSuccess).toBe("Category added.");

            // Verify categories mới được tạo
            await page
                .locator(xpathTagName(`category ${userCredential.userName} 03`))
                .isVisible();

            tagNameList = [`category ${userCredential.userName} 03`];
        });
    });
});