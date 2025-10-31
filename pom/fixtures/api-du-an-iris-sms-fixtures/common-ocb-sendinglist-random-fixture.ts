import { test as ocb } from "./ocb-fixture/ocb-ho-sendinglist-fixture";
import { test as random } from "./random-data-fixture";
import { test as b2b2018sendinglist} from "./b2b-2018-fixture/b2b-2018-sendinglist-fixture";
import { test as loginchung} from "./login-dev-fixture";

import { mergeTests, expect } from "@playwright/test";

export const test = mergeTests(ocb, random, b2b2018sendinglist, loginchung);
export { expect };