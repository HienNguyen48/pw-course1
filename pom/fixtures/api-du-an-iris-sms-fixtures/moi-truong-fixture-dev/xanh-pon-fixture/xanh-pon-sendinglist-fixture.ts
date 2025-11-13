import{ test as base, expect} from 'pom/fixtures/api-du-an-iris-sms-fixtures/moi-truong-fixture-dev/login-dev-fixture';
import { XanhPonSendingListAPI } from 'pom/api/pom-api-du-an-iris/moi-truong-dev/sending-list-xanh-pon-pom-sms-iris-api';

export const test = base.extend<{ xanhPonSendingListAPI: XanhPonSendingListAPI}>({
    xanhPonSendingListAPI: async ({request, accessToken}, use) => {
        const xanhPonSendingListAPI = new XanhPonSendingListAPI(request,accessToken);
        await use(xanhPonSendingListAPI);
    },
});

export {expect};
