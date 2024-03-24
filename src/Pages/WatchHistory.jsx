import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {getHistoryAPI} from '../services/allAPI';
import {delHistoryAPI} from '../services/allAPI';


function WatchHistory() {

  const [history, setHistory] = useState({});

  useEffect(() => {
    getHistory();

  }, [])

  const getHistory = async () => {
    const result = await getHistoryAPI()
    if (result.status == 200) {
      setHistory(result.data)
    }
    else {
      console.log(`API Failed`);
      console.log(result.message);
    }
  }

  const removeHistory = async (id) => {
    await delHistoryAPI (id);
    getHistory();
  }

  return (
    <>
    <div  className='container-fluid mt-5 mb-5 d-flex justify-content-between' style={{paddingTop:'30px'}}>
      <h2>Watch History</h2>
      <Link to={'/home'} style={{textDecoration:'none' , color:'black', fontWeight:'bold'}} className='fs-4'>
      <i class="fa-solid fa-caret-left"></i> 
      <b> Home</b>
      </Link>
    </div>


    <table className='table mb-5 container shadow w-100 text-center'>
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>URL</th>
            <th>Time Strap</th>
            <th>Remove</th>
          </tr>
        </thead>

        <tbody>
          {
            history?.length>0?history?.map((video,index) => (
              <tr>
            <td>{index+1}</td>
            <td>{video?.caption}</td>
            <td><a href={video?.link} target='_blank'>{video?.link}</a></td>
            <td>{video?.timeStamp}</td>
            <td> <button className='btn' onClick={() => removeHistory(video?.id)}> <i class="fa-regular fa-square-minus"></i> </button></td>
          </tr>
            )): <p>History Empty</p>
          }
        </tbody>
      </table>
    
    </>
  )
}

export default WatchHistory