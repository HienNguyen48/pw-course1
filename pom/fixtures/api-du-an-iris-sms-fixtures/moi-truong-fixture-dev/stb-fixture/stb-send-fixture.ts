import { test as base, expect } from 'pom/fixtures/api-du-an-iris-sms-fixtures/moi-truong-fixture-dev/login-dev-fixture';
import { SendSTBSendingAPI } from 'pom/api/pom-api-du-an-iris/moi-truong-dev/send-stb-dev-pom-sms-api';

export const test = base.extend<{ sendSTBSendingAPI: SendSTBSendingAPI}>({
    sendSTBSendingAPI: async ({request, accessToken}, use) => {
        const sendSTBSendingAPI = new SendSTBSendingAPI(request,accessToken);
        await use(sendSTBSendingAPI);
    },
});

export {expect};


