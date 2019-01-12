// watch: npx tsc -w -p tsconfig.json
// build: (Maybe use gulp/webpack?)
// dependencies:
// ├── @types/lodash@4.14.119
// ├── lodash@4.17.11
// └── typescript@3.2.2
import { Student } from './modules/Student';
import * as _ from 'lodash';
import * as greeter from './modules/greeter/index.js';

let user = new Student("Jane", "M.", "User");

console.log(_.VERSION);
document.body.innerHTML = greeter(user);
