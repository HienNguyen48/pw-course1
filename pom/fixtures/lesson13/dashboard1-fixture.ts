import { Page, test as base } from "@playwright/test";
//as dùng để đặt tên lại cho 1 từ khóa nào đó

const test = base.extend<{ dashboardPage1: Page }>({
  dashboardPage1: async ({ page }, use) => {
    console.log("(1): Đi tới trang web");
    console.log("(1): Login");
    await use(page);
    console.log("(1): Xóa data test");
  },
});

export{ test };