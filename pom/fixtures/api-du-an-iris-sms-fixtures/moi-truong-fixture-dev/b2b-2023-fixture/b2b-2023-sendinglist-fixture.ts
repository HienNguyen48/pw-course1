import { SendB2B2023SendingListAPI} from 'pom/api/pom-api-du-an-iris/moi-truong-dev/sending-list-b2b-2023-dev-pom-sms-api';
import { test as base, expect} from 'pom/fixtures/api-du-an-iris-sms-fixtures/moi-truong-fixture-dev/login-dev-fixture';

export const test = base.extend<{ sendB2B2023SendingListAPI: SendB2B2023SendingListAPI}>({
    sendB2B2023SendingListAPI: async ({request, accessToken}, use) => {
        const sendB2B2023SendAPI = new SendB2B2023SendingListAPI(request,accessToken);
        await use(sendB2B2023SendAPI);
    },
});

export {expect};
