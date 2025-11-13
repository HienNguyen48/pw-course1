import { test as base, expect } from 'pom/fixtures/api-du-an-iris-sms-fixtures/moi-truong-fixture-dev/login-dev-fixture';
import { VNPTSendingAPI } from 'pom/api/pom-api-du-an-iris/moi-truong-dev/send-vnpt-dev-pom-sms-api';

export const test = base.extend<{ vnptSendingAPI: VNPTSendingAPI }>({
    vnptSendingAPI: async ({ request, accessToken }, use) => {
        const vnptSendingAPI = new VNPTSendingAPI(request, accessToken);
        await use(vnptSendingAPI);
    },
});

export { expect };


