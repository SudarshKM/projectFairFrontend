import React from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import ProjectCard from '../components/ProjectCard'


function Project() {
  return (
<>
<Header/>

<h1 className='text-center mt-5'>Projects</h1>

<div className="row w-100 mt-5">
  <div className="col-md-4"></div>
  <div className="col-md-4 d-flex align-items-center mb-4 p-5">
    <input type="text" placeholder='Technologies' className='form-control' style={{height:"50px"}}/>
    <FontAwesomeIcon className=' ' icon={faMagnifyingGlass} style={{marginLeft:"-35px"}}/>
  </div>
  <div className="col-md-4"></div>
</div>


<div className="container-fluid mt-5">
  <div className="row">
    <div className="col-md-4"></div>
    <div className="col-md-4">
      <ProjectCard/>
    </div>
    <div className="col-md-4"></div>
  </div>
</div>

<p className='text-center text-danger mt-5 fs-4'>No Project to disolay</p>

</>
  )
}

export default Project