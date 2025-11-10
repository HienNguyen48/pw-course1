import{ test as base, expect} from 'pom/fixtures/api-du-an-iris-sms-fixtures/moi-truong-fixture-dev/login-dev-fixture';
import { SendMedlatecSendingListAPI } from 'pom/api/pom-api-du-an-iris/moi-truong-dev/send-medlatec-pom-sms-api';

export const test = base.extend<{ sendMedlatecSendingListAPI: SendMedlatecSendingListAPI}>({
    sendMedlatecSendingListAPI: async ({request, accessToken}, use) => {
        const sendMedlatecSendingListAPI = new SendMedlatecSendingListAPI(request,accessToken);
        await use(sendMedlatecSendingListAPI);
    },
});

export {expect};
