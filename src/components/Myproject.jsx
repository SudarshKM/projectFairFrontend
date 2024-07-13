import React from 'react'
import AddProject from '../components/AddProject'
import EditProject from './EditProject'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faTrash } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function Myproject() {
  return (
    <div className='shadow p-3 px-3 py-4 rounded'>

      <div className='d-flex justify-content-between'>
          <h4 className='text-success'>My project</h4>
          <AddProject/>
      </div>

      <div className='mt-4 bg-light rounded p-3 d-flex justify-content-between' >
          <h5>Media Player</h5>

          <div className="d-flex align-items-center">
            <EditProject/>

            <FontAwesomeIcon icon={faGlobe}  className='fs-5 text-warning ms-3'/>
            <FontAwesomeIcon icon={faGithub} className='fs-5 text-success ms-3'/>
            <FontAwesomeIcon icon={faTrash}  className='fs-5 text-danger ms-3 me-5'/>


          </div>
      </div>
    </div>
  )
}

export default Myproject