import React, { useEffect, useState } from 'react'
import AddProject from '../components/AddProject'
import EditProject from './EditProject'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faTrash } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { userProjectApi } from '../../services/allApi'

function Myproject() {

  const [ userProject , setUserProject] = useState([])

  const getUserProject = async()=>{
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token");
      const reqHeader = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
      const result = await userProjectApi(reqHeader);
      setUserProject(result.data);
    }
  }
  // console.log(userProject);

  useEffect(()=>{
    getUserProject()
  },[])

  return (
    <div className='shadow p-3 px-3 py-4 rounded'>

      <div className='d-flex justify-content-between'>
          <h4 className='text-success'>My project</h4>
          <AddProject/>
      </div>

     {userProject?.length>0 ?
     userProject.map((item)=>( <div className='mt-4 bg-light rounded p-3 d-flex justify-content-between' >
      <h5>{item.title}</h5>

      <div className="d-flex align-items-center">
        <EditProject/>

        <FontAwesomeIcon icon={faGlobe}  className='fs-5 text-warning ms-3'/>
        <FontAwesomeIcon icon={faGithub} className='fs-5 text-success ms-3'/>
        <FontAwesomeIcon icon={faTrash}  className='fs-5 text-danger ms-3 me-5'/>


      </div>
  </div>))
      :
      <p className='text-warning'>No project to display</p>
      }
    </div>
  )
}

export default Myproject