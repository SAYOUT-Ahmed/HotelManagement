// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import { getRoomById, updateRoom } from '../utils/ApiFunctions'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'


const EditRoom = () => {
  const [room, setRoom] = useState({
    photo: null,
    roomType: "",
    roomPrice: "",
})


const [imagePreview, setImagePreview] = useState("")
const [successMessage, setSuccessMessage] = useState("")
const [errorMessage, setErrorMessage] = useState("")

const  {roomId} = useParams()
useEffect( () => {
  const fetchRoom = async () => {
    try {
      const roomData = await getRoomById(roomId)
      setRoom(roomData)
      setImagePreview(roomData.photo)
    } catch (error) {
      console.error(error)
    }
  }
  fetchRoom()
}, [roomId])
    

const handleImageChange = (e) => {
  const selectedImage = e.target.files[0]
  setRoom({ ...room, photo: selectedImage })
  setImagePreview(URL.createObjectURL(selectedImage))
}

const handleInputChange = (event) => {
  const { name , value } = event.target
  setRoom({...room, [name]: value})
}

const handleSubmit = async (event) => {
  event.preventDefault()

  try {
    const response = await updateRoom(roomId, room)
    if (response.status === 200) {
      setSuccessMessage("Room updated successfully!")
      const updatedRoomData = await getRoomById(roomId)
      setRoom(updatedRoomData)
      setImagePreview(updatedRoomData.photo)
      setErrorMessage("")
    }else{
      setErrorMessage("Error updating room")
    }
  } catch (error) {
    console.error(error)
    setErrorMessage(error.message)
    
  }
}


return (
  <>
      <section className='container, mt-5 mb-5'>
          <div className='row justify-content-center'>
              <div className='col-md-8 col-lg-6'>
                  <h2 className='mt-5 mb-2'>Add a new room</h2>
                  {successMessage && (
                      <div className='alert alert-success' role='alert'> {successMessage} </div>
                  )}

                  {errorMessage && (
                      <div className='alert alert-danger' role='alert'> {errorMessage} </div>
                  )}
                  <form onSubmit={handleSubmit}>
                      <div className='mb-3'>
                          <label htmlFor='roomType' className='form-label hotel-color'> Room Type </label>
                          <input type="text" className='form-control' id='roomType' name='roomType' value={room.roomType} onChange={handleInputChange}/>
                      </div>

                      <div className='mb-3'>
                          <label htmlFor='roomPrice' className='form-label hotel-color'> Room Price </label>
                          <input type='number' className='form-control' required id='roomPrice' name='roomPrice' value={room.roomPrice}
                              onChange={handleInputChange}/>

                      </div>

                      <div className='mb-3'>
                          <label htmlFor='photo' className='form-label hotel-color'> Photo </label>
                          <input required type='file' className='form-control' id='photo' name='photo' onChange={handleImageChange}/>
                          {imagePreview && (
                              <img src={`data:image/jpeg;base64,${imagePreview}`} 
                               alt="room preview"
                               style={{ maxWidth: "400px", maxHeight: "400px" }}
                               className='mt-3' />
                          )}
                      </div>

                      <div className='d-grid gap-2 d-md-flex mt-2'>
                        <Link to={"/existing-rooms"} className="btn btn-outline-info ml-5">
                          back
                        </Link>
                          <button type='submit' className='btn btn-outline-warning'>
                              Edit Room
                          </button>
                      </div>
                  </form>
              </div>
          </div>
      </section>
  </>
)
}

export default EditRoom