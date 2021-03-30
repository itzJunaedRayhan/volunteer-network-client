import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './AddEvents.css'
const AddEvents = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imgURL, setImgURL] = useState(null)
    
    const onSubmit = data => {
      const eventData = {
        name : data.name,
        imgURL : imgURL
      };

      const url = `http://localhost:5055/addEvent`
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(eventData)
      })
      .then(res => console.log('server side response', res))
    };
    const handleImageUpload = event =>{
        const imageData = new FormData();
        imageData.set('key', 'f1a588f6a881d78d82b0abbe9cec8c3a')
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            // console.log(response.data.data.display_url);
            setImgURL(response.data.data.display_url)
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return (
        <div className="addEvent">
            <h3>Add Your Awesome Events here</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input name="name" defaultValue="New exiting Event" ref={register} />
            <br/><br/>
            <input name="exampleRequired" type="file" onChange={handleImageUpload} />
            <br/><br/>
            <input type="submit" />
            </form>
        </div>
    );
};

export default AddEvents;