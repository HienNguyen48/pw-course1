//Khai báo hết tất cả các file vào đây nếu Th có nhiều hơn 1 fixture 
import { test as t1 } from "./dashboard-fixture"
import { test as t2 } from "./dashboard1-fixture";
import { test as envConfig} from "./envConfig-fixture"

//gom những fixture vào 1 cái test 
import { mergeTests } from "@playwright/test";

export const test = mergeTests(t1, t2, envConfig)