// const { commonApi } = require("./commonApi")
// import {server} from './serverUrl'

import { commonApi } from "./commonApi";
import { server } from "./serverUrl";
// import {serverUrl} from './serverUrl'

//regitser
export const registerApi = async (rebBody) => {
  return await commonApi("POST", `${server}/register`, rebBody, "");
};

//login
export const loginApi = async (reqBody) => {
  return await commonApi("POST", `${server}/login`, reqBody, "");
};

//addProject

export const addProjectApi = async (rebBody, reqHeader) => {
  return await commonApi("POST", `${server}/addproject`, rebBody, reqHeader);
};
