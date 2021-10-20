/// <reference types="@types/google.maps" />

import { User } from './User';
import { Company } from './Company';
import { CustomMap } from "./CustomMap";

const user = new User();
const company = new Company();
const customMap = new CustomMap('map');

customMap.addMarker(user);
customMap.addMarker(company);

// Important takeaways from this Lesson:
// 1. Limit the exposed code in index.ts
// 2. Interfaces to limit duplicate code/make code more reusable between classes
// 3. Help TS put errors in the correct location by using the implements clause



