import { test as base } from "@playwright/test";
import * as dotenv from "dotenv";

//load .env
dotenv.config();

export class EnvEnvironmentVariables {
    get(key: string) {
        const env = process.env.ENV?.toLowerCase();
        let keyPostFix: string;

        switch (process.env.ENV) {
            case "dev":
                keyPostFix = "_DEV";
                break;
            case "uat":
                keyPostFix = "_UAT";
                break;
            case "prod":
                keyPostFix = "";
                break;
            default:
                throw new Error(`ENV không hợp lệ: ${process.env.ENV}. Vui lòng đặt ENV = dev | uat | prod`);
        }
        const fullKey = `${key}${keyPostFix}`
        const value = process.env[fullKey];

        if (!value) {
            throw new Error(`⚠️ Không tìm thấy biến môi trường: ${fullKey}`);
        }

        return value;
    }


    //Lay base theo loai API
    getBaseURL(apiType: string): string {
        const key = `BASE_URL_${apiType.toUpperCase()}`;
        return this.get(key);
    }

    // (tuỳ chọn) in log ra console
    logEnvironment() {
        console.log("=====================================");
        console.log(`🌍 ENV hiện tại: ${process.env.ENV}`);
        console.log(`👤 USERNAME: ${this.get("USERNAME")}`);
        console.log(`🔑 PASSWORD: ${this.get("PASSWORD")}`);
        console.log(`🔗 OCB BaseURL: ${this.getBaseURL("OCB")}`);
        console.log(`🔗 B2B_2018 BaseURL: ${this.getBaseURL("B2B_2018")}`);
        console.log(`🔗 B2B_2023 BaseURL: ${this.getBaseURL("B2B_2023")}`);
        console.log("=====================================");
    }
}

const test = base.extend<{ envEnvironmentVariables: EnvEnvironmentVariables }>({
    envEnvironmentVariables: async ({ }, use) => {
        const envEnvironmentVariables = new EnvEnvironmentVariables();
        envEnvironmentVariables.logEnvironment();
        await use(envEnvironmentVariables)
    },
});

export { test };


