import { test as b2b2018send} from "./b2b-2018-fixture/b2b-2018-sendinglist-fixture";
import { test as b2b2023send} from "./b2b-2023-fixture/b2b-2023-sending-fixture";
import {test as b2b2023sendinglist} from "./b2b-2023-fixture/b2b-2023-sendinglist-fixture";
import { test as ocbsendinglist} from "./ocb-fixture/ocb-ho-sendinglist-fixture";
import { test as ocbsend} from"./ocb-fixture/ocb-ho-send-fixture";
import { test as envEnvironment} from "./envEnvironment-variables-fixture";
import { test as logindev} from "./login-dev-fixture";
import { test as randomdata} from "./random-data-fixture";
import { test as mbsendinglist} from "./MB-fixture/mb-sending-list-fixture";
import { test as medlatec} from "./medlatec-fixture/medlatec-sending-list-fixture";

import { mergeTests, test as base, expect } from "@playwright/test";
export const test = mergeTests(base, b2b2018send, b2b2023send,b2b2023sendinglist,ocbsendinglist,ocbsend,envEnvironment,logindev,randomdata, mbsendinglist, medlatec)
export {expect};