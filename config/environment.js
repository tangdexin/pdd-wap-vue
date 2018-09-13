
let envList= {
    development:'dev',
    production:'prod'    
}
let mode = process.env.NODE_ENV;
console.log(mode)
let env  = envList[mode];
console.log(env)
export let config = {
    api:'http://',
    timeout:'1000'
}
export default env
// export {env};