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

//homeProjects

export const homeProjectApi = async () => {
  return await commonApi("GET", `${server}/homeprojects`, "", "");
};


//allProjects
//query parameter = baseUrl?key=value
export const allProjectsApi = async (searchKey,reqHeader) => {
  return await commonApi("GET", `${server}/allprojects?search=${searchKey}`, "", reqHeader);
};

//userProject
export const userProjectApi = async (reqHeader) =>{
  return await commonApi("GET" , `${server}/userprojects`,"",reqHeader)
}

//delete project

export const deleteProjectApi = async(id)=>{
  return await commonApi("DELETE" , `${server}/delete/${id}`,{},"")
}