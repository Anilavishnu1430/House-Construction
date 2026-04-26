import commonAPI from "./commonAPI"
import { serverURL } from "./serverURL"

//Register API - POST(reqBody)
export const registerAPI = async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/api/register`,reqBody,"")
}

//Login API - POST(reqBody)
export const loginAPI = async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/api/login`,reqBody,"")
}

//GoogleLogin API - POST(reqBody)
export const googleLoginAPI = async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/api/googleLogin`,reqBody,"")
}

//Add project - api/addProject
export const addProjectAPI = async(reqBody,reqHeader)=>{
    return await commonAPI('POST',`${serverURL}/api/addProject`,reqBody,reqHeader)
}

//View project - /api/viewProjects
export const viewAllProjectAPI = async(searchKey,reqHeader)=>{
    return await commonAPI('GET',`${serverURL}/api/viewProjects?search=${searchKey}`,"",reqHeader)
}

//Get A Project - /api/getAProject
export const getAProjectAPI = async(id,reqHeader)=>{
    return await commonAPI('GET',`${serverURL}/api/getAProject/${id}`,"",reqHeader)
}

//Add Quote - api/addQuote
export const addQuoteAPI = async(reqBody,reqHeader)=>{
    return await commonAPI('POST',`${serverURL}/api/addQuote`,reqBody,reqHeader)
}

//USER PROFILE UPDATION - endpoints define
export const updateUserProfileAPI = async(id,reqBody,reqHeader)=>{
    return await commonAPI('PUT',`${serverURL}/api/updateProfile/${id}`,reqBody,reqHeader)
}

//View Quote - /api/viewQuote
export const viewAllQuoteAPI = async(reqHeader)=>{
    return await commonAPI('GET',`${serverURL}/api/viewQuote`,"",reqHeader)
}

//Add Reply - api/addReply
export const addReplyAPI = async(reqBody,reqHeader)=>{
    return await commonAPI('POST',`${serverURL}/api/addReply`,reqBody,reqHeader)
}

//View Reply - /api/viewQuote
export const viewReplyAPI = async(reqHeader)=>{
    return await commonAPI('GET',`${serverURL}/api/viewReply`,"",reqHeader)
}

//Get All Users- /api/getAllUsers
export const getAllUsersAPI = async(reqHeader)=>{
    return await commonAPI('GET',`${serverURL}/api/getAllUsers`,"",reqHeader)
}

//Add Request work - api/addRequestWork
export const addRequestWorkAPI = async(reqBody,reqHeader)=>{
    return await commonAPI('POST',`${serverURL}/api/addRequestWork`,reqBody,reqHeader)
}

//View RequestWork - /api/viewRequestWork
export const viewRequestWorkAPI = async(reqHeader)=>{
    return await commonAPI('GET',`${serverURL}/api/viewRequestWork`,"",reqHeader)
}

//approveRequest - /api/approveRequest
export const approveRequestAPI = async(id,reqHeader)=>{
    return await commonAPI('PUT',`${serverURL}/api/approveRequest/${id}`,"",reqHeader)
}

//rejectRequest - /api/rejectRequest
export const rejectRequestAPI = async(id,reqHeader)=>{
    return await commonAPI('PUT',`${serverURL}/api/rejectRequest/${id}`,"",reqHeader)
}