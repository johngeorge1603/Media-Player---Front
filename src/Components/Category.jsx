import React, { useEffect } from 'react'
import { useState } from 'react';
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {addCategoryAPI, updateCategoryAPI} from '../services/allAPI';
import {getCategoryAPI} from '../services/allAPI';
import {deleteCategoryAPI} from '../services/allAPI';
import {videoAPI} from '../services/allAPI';
import VideoCard from './VideoCard'




function Category(dropResponse) {

  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [allCategories, setAllCategories] = useState([]);


  useEffect(() => {
    getAllCategories()
  },[dropResponse])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAdd = async () => {
    if (categoryName) {
      const result = await addCategoryAPI({categoryName, allVideos:[]})

      if(result.status>=200 && result.status<300) {
        handleClose()
      }else {
       alert(result.message)
      }
      getAllCategories()

    } else {
      alert(`Please fill the form`)
    }
  }

  const getAllCategories = async () => {
    const {data} = await getCategoryAPI(); //data can also be given as the parameter of getCategoryAPI()
    setAllCategories(data);
  }

  const deleteCategory = async (id) => {
    await deleteCategoryAPI(id);
    getAllCategories();
  }

  const dragOver = (e) => {
    console.log(`video card dragging over the category`);
    e.preventDefault()
    // has to drag over target before dropping 
  }

  const videoDrop = async (e, categoryId) => {
    const videoId = e.dataTransfer.getData("videoId")
    console.log("video id:" + videoId + "dropped! Inside category" + categoryId);

    const {data} = await videoAPI(videoId); // to get the details of video that is being dragged
    console.log(data); 

    const selectedCategory = allCategories.find(item => item.id===categoryId)
    selectedCategory.allVideos.push(data) // details of the video is pushed into the selected category
    console.log(selectedCategory);

    await updateCategoryAPI(categoryId, selectedCategory);
    getAllCategories()
  }

  console.log(allCategories);

  const catDragStart= (e,videoId, categoryId) => {
    let dataShare= {videoId, categoryId}; 
    e.dataTransfer.setData("data", JSON.stringify(dataShare))// stringify as both videoid and category id has to be stored
    console.log(`video drag started`); 
  }

  return (
    <>
      
      <div className='d-grid'>
      <Button className='btn btn-warning' onClick={handleShow}>
          Add Category
        </Button>
      </div>


      {
        allCategories?.length>0?allCategories.map(category => (
          <div className='border rounded p-3 mt-3' droppable='true' onDragOver={e => dragOver(e)} onDrop= {e => videoDrop(e, category?.id)}>
            <div className='d-flex justify-content-between align-items-center'>
              <h6>{category?.categoryName}</h6>
              <button className='btn' onClick={()=> deleteCategory(category?.id)}><i class="fa-solid fa-circle-minus fa-lg" ></i></button>
            </div>

            <Row>
              {
                category?.allVideos?.length>0? category?.allVideos.map(card=>(
                  <Col sm={12} draggable onDragStart={e=> catDragStart(e, card.id, category.id)}>
                    {/* video id and category id should be taken as video is located in a specific category. Inital drag only required video id */}
                    <div>
                     <VideoCard video={card} insideCategory={true}/> 
                     {/* inside category given to hide delete button when inside category
                          when insidecatgeory is false, button will be shown .....rest in videocard
                     */}
                    </div>
                  </Col>
                )):null 
              }
            </Row>
          </div>
        )): <p className='fs-5 text-center text-danger'>No Categories Added</p>
      }
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false} centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Fill the field</Modal.Title>
          </Modal.Header>

          <Modal.Body>

                <FloatingLabel
              controlId="floatingInputid"
              label="Enter Category Name"
              className="mb-3"
            >
              <Form.Control type="email" onChange={e=> setCategoryName(e.target.value)} placeholder="Enter Category Name" />
              </FloatingLabel>

          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleAdd}>Add</Button>
          </Modal.Footer>

        </Modal>

    </>
  )
}

export default Category