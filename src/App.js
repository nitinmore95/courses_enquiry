import React from 'react'
import Nav from './components/Nav'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Courses from './components/Courses'
import AddEnquiry from './components/AddEnquiry'
import Enquiries from './components/Enquiries'

export default function App() {
  return (
    <main>
      <Router>
      <Nav/>
      <section className='container'>
           <Routes>
              <Route path='/' element={<Courses/>}/>
             
              <Route path="/addenquiry/:id" element={<AddEnquiry/>}/>
              <Route path="/enquiries/" element={<Enquiries/>}/>
           </Routes>
      </section>
      </Router>
    </main>
  )
}
