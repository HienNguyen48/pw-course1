import{ test as base, expect} from 'pom/fixtures/api-du-an-iris-sms-fixtures/moi-truong-fixture-dev/login-dev-fixture';
import { NamABankSendingListAPI } from 'pom/api/pom-api-du-an-iris/moi-truong-dev/sending-list-nam-a-bank-pom-api';

export const test = base.extend<{ namABankSendingListAPI: NamABankSendingListAPI}>({
    namABankSendingListAPI: async ({request, accessToken}, use) => {
        const namABankSendingListAPI = new NamABankSendingListAPI(request,accessToken);
        await use(namABankSendingListAPI);
    },
});

export {expect};
