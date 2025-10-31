import { test as base} from '@playwright/test'

export class EnvConfig {
    //truyền vào key dạng string 
    get(key: string){
        let keyPostFix;//khai báo ra tên môi trường 
        if(process.env.ENV === 'dev'){
            keyPostFix = '_DEV';
        }else {
            keyPostFix = '_PROD';
        }
        //Nối key & keyPostFix
        return process.env[`${key}${keyPostFix}`];
    }
}

const test = base.extend<{ envConfig: EnvConfig}>({
    envConfig: async({ }, use) => {
        const envConfig = new EnvConfig();
        await use (envConfig)
    },
});
export{test}