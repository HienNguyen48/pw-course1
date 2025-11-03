import { test as b2b2018send} from "./b2b-2018-fixture/b2b-2018-sendinglist-fixture";
import { test as b2b2023send} from "./b2b-2023-fixture/b2b-2023-sending-fixture";
import {test as b2b2023sendinglist} from "./b2b-2023-fixture/b2b-2023-sendinglist-fixture";
import { test as ocbsendinglist} from "./ocb-fixture/ocb-ho-sendinglist-fixture";
import { test as envEnvironment} from "./envEnvironment-variables-fixture";
import { test as logindev} from "./login-dev-fixture";
import { test as randomdata} from "./random-data-fixture";

import { mergeTests, test as base, expect } from "@playwright/test";
export const test = mergeTests(base, b2b2018send, b2b2023send,b2b2023sendinglist,ocbsendinglist,envEnvironment,logindev,randomdata)
export {expect};