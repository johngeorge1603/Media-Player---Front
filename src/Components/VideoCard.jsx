import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import {addHistoryAPI} from '../services/allAPI';
import {delVideoAPI} from '../services/allAPI';

function VideoCard({video, setDeleteVideoResponse, insideCategory}) { // video is given as props from view.jsx. data of each is given as the argument 'video' in view.jsx 

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true)
    // add data to watch history when video card is opened
    const {caption, link} = video
    let today = new Date()
    let timeStamp = new Intl.DateTimeFormat('en-us', {year:'numeric', month: '2-digit', day:'2-digit', hour:'2-digit',
    minute:'2-digit', second:'2-digit'}).format(today)
    let videoHistory = {caption, link, timeStamp}
    // API Call
    await addHistoryAPI(videoHistory)

  };

  const deleteVideo = async (id) => {
    await delVideoAPI(id);
    setDeleteVideoResponse(true)
  }

  const dragStarted = (e,id) => {
    // id taken from video to transfer using the event 'e'
    console.log("drag started...video id:" + id);
    e.dataTransfer.setData("videoId", id) // data transferred to categort while drag-drop
  }

  return (
    <>
      
      <Card className='mb-3' draggable onDragStart={e=> dragStarted(e, video?.id)}> 
      {insideCategory? <Card.Img style={{cursor:'pointer'}} onClick={handleShow} height={'100px'} variant="top" src={video?.url} />
      :
      <Card.Img style={{cursor:'pointer'}} onClick={handleShow} height={'180px'} variant="top" src={video?.url} />
      }
      <Card.Body className='p-0 ps-3 m-0 pt-2'>
        <Card.Title className='d-flex justify-content-between align-items-center m-0 p-0'>
          <h6 style={{cursor:'pointer'}} onClick={handleShow}>{video?.caption}</h6>
          {insideCategory? null:<button className='btn' onClick={() => deleteVideo(video?.id)}><i class="fa-solid fa-circle-minus fa-lg" ></i></button>}
        </Card.Title>
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{video?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe className='w-100' width="100%" height="530" src={`${video?.link}?autoplay=1`} title="Boeing: Last Week Tonight with John Oliver (HBO)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>        </Modal.Body>
      </Modal>


    </>
  )
}

export default VideoCard

