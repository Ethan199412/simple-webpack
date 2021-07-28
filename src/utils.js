import log from './log.js'

let num = 0
export function add(...arg) {
    num += 1
    log('add', num)
    return arg.reduce((prev, curr) => {
        return prev + curr
    }, 0)
}
