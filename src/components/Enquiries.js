// import React from 'react'
import React,{useEffect,useState} from 'react'
// import { Link } from 'react-router-dom';
//import { useParams } from 'react-router-dom';
import { getAllEnquiries} from '../services/CourseService'

export default function Enquiries() {
  const [enquiryData,setEnquaryData]=useState([]);
    useEffect(()=>{
        getAllEnquiries()
       .then(res=>{
         console.log('HI');
         console.log(res.data);
         setEnquaryData(res.data)
       })
       .catch(err=> console.log(err));
      },[]);

      return (
        <>
          <h2> Enquiry Details </h2>
          <div className='row container'>
            {enquiryData?.map((enq)=>
            <div className='col-sm-6' key={enq.id}>
            <div className="card" >
    
              <div className="card-body">
                <h5 className="card-title">{enq.title}</h5>
                <label className="card-text"> Author : {enq.author}</label>
                <div className="card-text"> <b>Details:</b></div>
                <p className="card-text"> <i>{enq.enquiry_text}</i></p>
               
              </div>
             </div>
            </div>)}
          </div>
        </>
      )
    }