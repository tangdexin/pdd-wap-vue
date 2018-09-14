
let ENV= {
    development:'dev',
    production:'prod'    
}
let mode = process.env.NODE_ENV;
let env  = ENV[mode];
export default env
