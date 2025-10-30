import { request, test as base  } from "@playwright/test";

export const text = base.extend<{ArticlePage: Request}>({
    ArticlePage: async ({ request}, use) => {
        console.log("");
        
    };
})

export{test};