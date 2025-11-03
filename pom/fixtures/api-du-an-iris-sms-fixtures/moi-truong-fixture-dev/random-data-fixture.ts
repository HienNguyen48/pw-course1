import { test as base } from "@playwright/test";
import crypto from "crypto"

export const test = base.extend<{generateRandomData: () => { smsId: string; content: string};}>({
    generateRandomData: async ({ }, use) => {
       await use(() => {
              const randomNumSmsId = crypto.randomInt(10000000000); // random 10 chữ số
                const smsId = `smsIdDev_${randomNumSmsId}`;
                const randomNumContent = crypto.randomInt(100000000);
                const content = `Nội dung lần gửi thứ_${randomNumContent}`;
                return { smsId, content };
        });
    },
});

export {expect} from "@playwright/test"