import { test, expect } from "../../../pom/fixtures/api-du-an-iris-sms-fixtures/moi-truong-fixture-dev/common-fixture"

let access_token: string = '';
const isCheckDuplicate: string = "1";
const isCheckDuplicate1: string = "0";
const messageType: string = "30";
const brandname: string = 'IRIS';
const phoneNumber: string = "84374619213";
const contentType: string = "1";
const unitId: string = "iristest01";
const telco: string = "";



test.describe('Dự án SMS môi trường dev', () => {

    test.beforeEach('Testcase 1: Get token', async ({ loginAPI }) => {

        const response = await loginAPI.UserLoginMTTest('password', 'iris', 'iris@123');

        const statusCode = response.status();
        expect(statusCode).toBe(200);
        console.log(`status code: ${response.status()}`);

        access_token = (await response.json()).access_token;
        expect(access_token).toBeDefined();
        expect(access_token.length).toBeGreaterThan(0);
        console.log(`access_token: ${access_token}`);

        //In ra 20 kí tự đầu tiên của token nếu không muốn in toàn bộ token thì sẽ dùng câu lệnh này 
        console.log(`Logged in successfully, token: ${access_token.substring(0, 20)}...`);

        console.log("\n" + "=".repeat(100) + "\n");
    });

    test("MEDLATEC - Sending list", async ({ sendMedlatecSendingListAPI, generateRandomData }) => {

        // ---------------- TESTCASE 01 ----------------
        await test.step(`Testcase 01: MEDLATEC - SendingList -  Lỗi do UnitId không hợp lệ`, async () => {
            const { smsId: smsId1, content: content1 } = generateRandomData();
            const { smsId: smsId2, content: content2 } = generateRandomData();

            const success0 = [
                {
                    "Brandname": brandname,
                    "IsCheckDuplicate": isCheckDuplicate,
                    "UnitId": unitId,
                    "SmsId": smsId1,
                    "PhoneNumber": phoneNumber,
                    "Content": content1,
                    "ContentType": contentType,
                    "Telco": telco
                },
                {
                    "Brandname": brandname,
                    "IsCheckDuplicate": isCheckDuplicate,
                    "UnitId": unitId,
                    "SmsId": smsId2,
                    "PhoneNumber": phoneNumber,
                    "Content": content2,
                    "ContentType": contentType,
                    "Telco": telco
                }

            ]
            console.log("🚀  Testcase 01: MB - SendingList -  Lỗi do UnitId không hợp lệ");
            console.log(` => SMS 1: Brandname = ${success0[0].Brandname}, SmsId = ${success0[0].SmsId}, Content = ${success0[0].Content}`);
            console.log(` => SMS 2: Brandname = ${success0[1].Brandname}, SmsId = ${success0[1].SmsId}, Content = ${success0[1].Content}`);

            const responses = await sendMedlatecSendingListAPI.SendMedlatecMultiSendingList(success0);

            console.log("👉 Status thực tế:", responses.status());
            expect(responses.status()).toBe(200);

            const body = await responses.json();
            console.log("📩 Response:", JSON.stringify(body, null, 2));

            expect(body).toHaveProperty("ResultList");
            expect(Array.isArray(body.ResultList)).toBe(true);

            for (const result of body.ResultList) {
                const { Code, SmsId } = result;
                console.log('📩 Response item:', { Code, SmsId });
                expect(Code).toBe("5");
            }

            console.log("✅ Testcase 01 passed — Response hợp lệ! — Code: 200");
            console.log("\n" + "=".repeat(100) + "\n");

        });

        await test.step(`Testcase 02: MEDLATEC - SendingList -  UnitId rỗng hoặc bị bỏ trống`, async () => {
            const { smsId: smsId1, content: content1 } = generateRandomData();
            const { smsId: smsId2, content: content2 } = generateRandomData();

            const success04 = [
                {
                    "Brandname": brandname,
                    "IsCheckDuplicate": isCheckDuplicate,
                    "UnitId": "",
                    "SmsId": smsId1,
                    "PhoneNumber": phoneNumber,
                    "Content": content1,
                    "ContentType": contentType,
                    "Telco": telco
                }

            ]
            console.log("🚀  Testcase 02: MEDLATEC - SendingList -  UnitId rỗng hoặc bị bỏ trống");
            console.log(` => SMS 1: Brandname = ${success04[0].Brandname}, SmsId = ${success04[0].SmsId}, Content = ${success04[0].Content}`);

            const responses = await sendMedlatecSendingListAPI.SendMedlatecMultiSendingList(success04);

            console.log("👉 Status thực tế:", responses.status());
            expect(responses.status()).toBe(200);

            const body = await responses.json();
            console.log("📩 Response:", JSON.stringify(body, null, 2));

            expect(body).toHaveProperty("ResultList");
            expect(Array.isArray(body.ResultList)).toBe(true);

            for (const result of body.ResultList) {
                const { Code, SmsId } = result;
                console.log('📩 Response item:', { Code, SmsId });
                expect(Code).toBe("4");
            }

            console.log("✅ Testcase 02 passed — Response hợp lệ! — Code: 200");
            console.log("\n" + "=".repeat(100) + "\n");

        });


    });
});
