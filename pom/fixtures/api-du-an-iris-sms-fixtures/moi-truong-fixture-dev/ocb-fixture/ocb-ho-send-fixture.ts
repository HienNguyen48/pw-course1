import { test as base, request} from '@playwright/test';
import { SendOCBHOSendAPI } from 'pom/api/pom-api-du-an-iris/moi-truong-dev/send-ocb-ho-dev-pom-sms-api';

export const test = base.extend<{ sendOCBHOSendAPI: SendOCBHOSendAPI; }>({
    sendOCBHOSendAPI: async ({ request}, use) =>  {
        const sendOCBHOSendAPI = new SendOCBHOSendAPI(request);
        await use(sendOCBHOSendAPI);
    },
})
 export { expect} from '@playwright/test'