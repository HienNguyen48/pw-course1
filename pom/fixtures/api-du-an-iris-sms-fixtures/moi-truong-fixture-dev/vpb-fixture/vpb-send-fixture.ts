import{ test as base, expect} from 'pom/fixtures/api-du-an-iris-sms-fixtures/moi-truong-fixture-dev/login-dev-fixture';
import { VPBSendingAPI } from 'pom/api/pom-api-du-an-iris/moi-truong-dev/send-vpb-pom-sms-api';

export const test = base.extend<{ vpbSendingAPI: VPBSendingAPI }>({
    vpbSendingAPI: async ({ request, accessToken}, use) => {
        const vpbSendingAPI = new VPBSendingAPI(request, accessToken);
        await use(vpbSendingAPI);
    },
});

export {expect};
