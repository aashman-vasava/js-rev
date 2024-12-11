// ES6 Module = An external file that contains reusable code that can be imported into other js file.
                // Write reusable code for many diff. apps.
                // Can contain variables, classes, functions.. and more 
// 7H:34m

import {PI, getArea, getCircumference, getVolume} from './mathUtil.js'

console.log(PI)

const circumference = getCircumference(10)
const area = getArea(10)
const volume = getVolume(10);

console.log(volume)