import env from './environment.js'
import hostDev from './host-config-dev.js'
import hostProd from './host-config-prod';

let host = {
    dev: hostDev.host,
    prod: hostProd.host
}
export default host[env]
