import{ test as base, expect} from 'pom/fixtures/api-du-an-iris-sms-fixtures/moi-truong-fixture-dev/login-dev-fixture';
import { SendMBSendingListAPI } from 'pom/api/pom-api-du-an-iris/moi-truong-dev/sending-list-MB-dev-pom-sms-api';

export const test = base.extend<{ sendMBSendingListAPI: SendMBSendingListAPI}>({
    sendMBSendingListAPI: async ({request, accessToken}, use) => {
        const sendMBSendingListAPI = new SendMBSendingListAPI(request,accessToken);
        await use(sendMBSendingListAPI);
    },
});

export {expect};
