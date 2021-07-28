import obj from './const.js'
import { add } from './utils.js'
let sum = add(obj.a, obj.b, obj.c) + add(obj.a, obj.b, obj.c) + add(obj.a, obj.b, obj.c)
console.log('sum', sum)