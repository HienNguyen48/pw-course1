import { test as base, expect} from 'pom/fixtures/api-du-an-iris-sms-fixtures/moi-truong-fixture-dev/login-dev-fixture';
import { SendB2B2023SendAPI} from 'pom/api/pom-api-du-an-iris/moi-truong-dev/sending-don-b2b-2023-dev-pom-sms-api';
import { request } from 'http';
import { access } from 'fs';

export const test = base.extend<{ sendB2B2023SendAPI: SendB2B2023SendAPI}>({
    sendB2B2023SendAPI: async ({request, accessToken}, use) => {
        const sendB2B2023SendAPI = new SendB2B2023SendAPI(request,accessToken);
        await use(sendB2B2023SendAPI);
    },
});

export {expect};