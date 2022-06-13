// import React from 'react'
import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import { getAllCourses} from '../services/CourseService'

export default function Courses() {
  const [courseData,setCourseData]=useState([]);
    useEffect(()=>{
      getAllCourses()
       .then(res=>{
         console.log('HI');
         console.log(res.data);
         setCourseData(res.data)
       })
       .catch(err=> console.log(err));
      },[]);

      return (
        <>
          <h2> Courses </h2>
          <div className='row container'>
            {courseData?.map((co)=>
            <div className='col-sm-4' key={co.id}>
            <div className="card" style={{width: '18rem'}}>
    
              <div className="card-body">
                <h5 className="card-title">{co.title}</h5>
                <p className="card-text"> Author : {co.author}</p>
                <Link to={`addenquiry/${co.id}`} className="btn btn-info">Enquire</Link>
               
              </div>
             </div>
            </div>)}
          </div>
        </>
      )
    }