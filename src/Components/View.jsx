import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { Col, Row } from 'react-bootstrap'
import {allVideosAPI} from '../services/allAPI';
import {getCategoryAPI} from '../services/allAPI';
import {updateCategoryAPI} from '../services/allAPI';




function View({uploadVideoResponse,setDropResponse}) {

  const [allVideos, setAllVideos] = useState([]);
  const [deleteVideoResponse, setDeleteVideoResponse] = useState(false);

  useEffect(() => {
    getAllVideos();
    setDeleteVideoResponse(false)
  },[uploadVideoResponse, deleteVideoResponse]) // lifted state from add--> to load video as soon as uploaded. Previously []. and lifted state from viewcard to delete video


  const getAllVideos = async () => {

    const result = await allVideosAPI();
    if (result.status === 200) {
      console.log(result);
      setAllVideos(result.data)
    }
    else {
      console.log(`API Failed`);
      setAllVideos([])
    }
  };

  console.log(allVideos);


  const dragOverView = (e) => {
    e.preventDefault()
  }

  const videoDropView = async (e) => {
    const {videoId, categoryId} = JSON.parse(e.dataTransfer.getData("data"));
    console.log(videoId, categoryId);
    
    // getting category details to update
    const {data} = await getCategoryAPI()
    const selectedCategory = data.find(item => item.id === categoryId)
    let result = selectedCategory.allVideos.filter(it => it.id!==videoId) // selecting all videos other than the dragged video
    console.log(result);
    // updating the category after removing video
    let {id, categoryName} = selectedCategory; // get id and name from selected category
    let newCategory = {id, categoryName, allVideos:result}; // new variable containing id, name , allvideos
    console.log(newCategory);

    const res = await updateCategoryAPI(categoryId, newCategory) // updating category with the rest of the videos
    setDropResponse(res);
  }

  return (
    <>
    <Row className='pe-2' droppable="true" onDragOver={e=> dragOverView(e)} onDrop={(e) => videoDropView(e)}>
      {allVideos?.length>0? allVideos.map(video => ( 
        // .lenght>0 not required (works without it)

        <Col sm={12} md={6} lg={4} xl={3}>
        <VideoCard video={video} setDeleteVideoResponse= {setDeleteVideoResponse}/> 
        {/* video is the argument in post api. array is stored as 'video'. that is now displayed in the card (check AllAPI.js) */}
        </Col>

      )):
      <p>nothing to display</p>
    }

      
    </Row>
    
    </>
  )
}

export default View