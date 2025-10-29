import { Page, test as base } from "@playwright/test";
//as dùng để đặt tên lại cho 1 từ khóa nào đó

const test = base.extend<{ dashboardPage: Page }>({
  dashboardPage: async ({ page }, use) => {
    console.log("Đi tới trang web");
    console.log("Login");
    await use(page);
    console.log("Xóa data test");
  },
});

export{ test };