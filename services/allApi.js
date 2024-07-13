// const { commonApi } = require("./commonApi")
// import {server} from './serverUrl'

import { commonApi } from "./commonApi"
import {server} from './serverUrl'
// import {serverUrl} from './serverUrl'




//regitser'
 export const registerApi = async (rebBody) =>{
    return await commonApi('POST',`${server}/register`,rebBody,"")
 }