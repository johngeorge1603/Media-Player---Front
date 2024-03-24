import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import {uploadVideoAPI} from '../services/allAPI';

function Add({setUploadVideoResponse}) {

  const [uploadVideo, setUploadVideo] = useState({
    id:'' ,
    caption:'' ,
    url:'' ,
    link:''
  })
  console.log(uploadVideo);
  

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  // Youtube Link (Change value of input)

  const watchToEmbed = (e) => {

  // https://www.youtube.com/watch?v=QbbFvR_RDbg ====> URL when copied. But embedded url is required
  // https://www.youtube.com/embed/QbbFvR_RDbge

    const {value} = e.target // {value} here is the attribute of the input field, therefore in {}
    if(value.includes("")) {
      let vID = value.split("v=")[1].slice(0,11) // slice to make sure last 11 letters are selected. not really required here
      console.log(`https://www.youtube.com/embed/${vID}`);
      setUploadVideo({...uploadVideo, link:`https://www.youtube.com/embed/${vID}`})
    }
    else {
      setUploadVideo({...uploadVideo, link:""})
    }
  }




  // Upload
  const handleUpload = async () => {

    const {id, caption, url, link} = uploadVideo;

    if(!id || !caption || !url || !link) {
      alert(`Please fill all fields`)
    }
    else{
      const result = await uploadVideoAPI(uploadVideo);
      console.log(result);
      if (result.status>=200 && result.status<300) {
        console.log(result.status);
        // success
        handleClose();
        // reset input fields
        setUploadVideo({id:"", caption:"", url:"", link:""});
        setUploadVideoResponse(result.data)
      }
      else{
        alert(result.status)
      } 
      return result
    }

    


  }


  return (
    <>
  
    <div className='d-flex align-items-center'>
      <button className='btn text-dark btn-success rounded fs-5 p-1 ps-3 pe-3 pt-2' onClick={handleShow} style={{color:'white', height:'40px'}}>
        Upload Videos
      <i class="fa-solid fa-circle-arrow-up text-dark ms-2 fa-lg"></i>
         </button>
    </div>


    {/* Modal */}

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Your Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill all fields</p>
          <FloatingLabel controlId="floatingInputId1" label="Enter Video ID" className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter Video ID"
              onChange={e => setUploadVideo({ ...uploadVideo, id: e.target.value })}
            />
          </FloatingLabel>

          <FloatingLabel controlId="floatingInputId2" label="Enter Video Title" className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter Video Title"
              onChange={e => setUploadVideo({ ...uploadVideo, caption: e.target.value })}
            />
          </FloatingLabel>

          <FloatingLabel controlId="floatingInputId3" label="Enter Image URL" className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter Image URL"
              onChange={e => setUploadVideo({ ...uploadVideo, url: e.target.value })}
            />
          </FloatingLabel>

          <FloatingLabel controlId="floatingInputId4" label="Enter Video Link" className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter Video Link"
              onChange={watchToEmbed}
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleUpload}>Upload</Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Add