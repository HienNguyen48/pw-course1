import { test as base, expect } from 'pom/fixtures/api-du-an-iris-sms-fixtures/login-dev-fixture';
import { SendB2B2018SendingListAPI } from 'pom/api/pom-api-du-an-iris/sending-list-b2b-2018-dev-pom-sms-api';

export const test = base.extend<{ sendB2B2018SendingListAPI: SendB2B2018SendingListAPI }>({
    sendB2B2018SendingListAPI: async ({ request, accessToken }, use) => {
        const sendB2B2018SendingListAPI = new SendB2B2018SendingListAPI(request, accessToken);
        await use(sendB2B2018SendingListAPI);
    },
});

export { expect };