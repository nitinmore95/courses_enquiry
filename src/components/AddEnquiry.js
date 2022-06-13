// import React from 'react'
import React,{useEffect,useState} from 'react'
import { useParams,useNavigate } from 'react-router-dom';
import { getCourseById,addEnquiry} from '../services/CourseService'

export default function AddEnquiry() {
  const [courseData,setCourseData]=useState([]);
  const {id}=useParams();
    
    const [state,setState]=useState({'course_id':'','title':'','author':'','enquiry_text':''});
    const navigate=useNavigate();
    const handler=(event)=>{
      
     const {name,value}=event.target;
     let course_id=document.getElementById('course_id').value;
     let title=document.getElementById('title').value;
     let author=document.getElementById('author').value;
     let enquiry_text=document.getElementById('enquiry_text').value;
     //alert(enquiry_text);
     setState({'course_id':course_id,'title':title,'author':author,'enquiry_text':enquiry_text});
     
    }
 
 
    useEffect(()=>{
      getCourseById(id)
       .then(res=>{
       
         console.log(res.data);
         setCourseData(res.data)
       })
       .catch(err=> console.log(err));
      },[]);

      const postData=(event)=>{
        event.preventDefault();
       console.log(state);
        addEnquiry(state)
        .then(res=>{
            if(res.data){
                alert("Added Enquiry");
                navigate("/enquiries");
            }
        })
        .catch(err=> console.log(err))
 }
      return (
        <>
           <h2> Add Enquiry</h2>
          <div className='row container'>
          
        <form onSubmit={postData}>
            <div className='form-group'>
                <label> Id : {courseData.id}</label>
                <input type="hidden" name="course_id" id="course_id"  className='form-control' value={courseData.id}  />
            </div>
            <div className='form-group'>
                <label> Course Name : <b>{courseData.title}</b></label>
                <input type="hidden" name="title" id="title" className='form-control' value={courseData.title}  />
            </div>
            <div className='form-group'>
                <label> Author : {courseData.author}</label>
                <input type="hidden" name="author" id="author" className='form-control' value={courseData.author} />
            </div>
            
            <div className='form-group'>
                <label> Details</label>
                <textarea name="enquiry_text" id="enquiry_text"  className='form-control' onChange={handler}></textarea>
            </div>
            <br/>
            <input type="submit" value="Add" className='btn btn-success'/>
        </form>
        </div>
         
        </>
      )
    }