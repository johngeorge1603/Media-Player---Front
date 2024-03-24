import React, { useState } from 'react'
import Add from '../Components/Add'
import View from '../Components/View'
import { Link } from 'react-router-dom'
import Category from '../Components/Category'




function Home() {

   // FOR STATELIFTING
  const [uploadVideoResponse, setUploadVideoResponse] = useState() 
  const [dropResponse, setDropResponse] = useState([])

  return (
    <>
    <div className='container-fluid mt-5 mb-5 d-flex justify-content-between' style={{paddingTop:'30px',}}>

      <div className="add-videos">
        <Add setUploadVideoResponse= {setUploadVideoResponse}/> 
        {/* STATE LIFTING - state is passed onto the child components from the parent component */}
      </div>
      <Link to={'/watchhistory'} style={{textDecoration:'none' , color:'black', fontWeight:'bold'}} className='fs-4'>
      <b>Watch History</b> <i class="fa-solid fa-caret-right"></i>
      </Link>

    </div>

    <div className="container-fluid w-100 d-flex flex-row justify-content-between">

      <div className="all" style={{width:'85%'}}>
        <h4>All videos</h4>
        <View uploadVideoResponse={uploadVideoResponse} setDropResponse={setDropResponse}/>
      </div>

      <div className="categories" style={{width:'15%'}}>
        <h4 className='text-end'>Categories</h4>
          <Category dropResponse={dropResponse} />
      </div>
      
    </div>
    </>
  )
}

export default Home