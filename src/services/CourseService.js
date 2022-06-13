import axios from "axios";
const APIURL="http://localhost:3001/courses/";
const APIURLENQ="http://localhost:3001/enquiries/";
function getAllCourses(){
    return axios.get(APIURL);
}
function getCourseById(id){
    return axios.get(`${APIURL}${id}`);
}

function addEnquiry(data){
    return axios.post(APIURLENQ,data);
}
function getAllEnquiries(){
    return axios.get(APIURLENQ);
}
export {getAllCourses,getCourseById,addEnquiry,getAllEnquiries};