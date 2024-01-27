import React, { useState } from 'react';
import axios from 'axios';
import "./write.css"; 


export default function Write() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState(''); 
  const [file, setFile] = useState(null);
  //const mysql= require('mysql'); 

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('category', category);
    formData.append('file', file);

    // Send formData to the server using fetch or axios

    const object = {};
    formData.forEach((value, key) => object[key] = value);
    const json = JSON.parse(JSON.stringify(object));
    console.log(' --------->>>    ', json);
    axios.post('http://localhost:5000/api/posts', json)
      .then(response => {
        console.log('Post submitted successfully:', response.data);
        // Add any additional logic after successful submission
      })
      .catch(error => {
        console.error('Error submitting post:', error);
        // Handle errors here
      });

      
      // const db=require('mysql').createPool({

      //   host:"localhost",
      //   user:"root",
      //   password:"12345678",
      //   database:"blog"
        
      //   })
      // axios.post('/post',(req,res)=>{

      //   const theName= req.body.theName;
        
      //   const theDescription= req.body.theDescription;
        
      //   const sql="INSERT INTO blog.blogs (id, title, description,category,file,created_at) VALUES ('1', 'Hanuman', 'Hanuman Chalisa','Book','Deatils on book','2024-01-01')"
        
      //   db.query(sql , [],(err,result)=>{
        
      //   console.log(result);
        
      //   })
        
      //   })

  };

  return (
    <div className="write">
      <form className="writeForm" onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="writeFormGroup">
          <label htmlFor="title" className="writeLabel">Title</label>
          <input
            type="text"
            id="title"
            className="writeInput"
            placeholder="Enter your title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <label htmlFor="description" className="writeLabel">Description</label>
          <textarea
            id="description"
            className="writeInput writeText"
            placeholder="Write your description..."
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="writeFormGroup">
          <label htmlFor="category" className="writeLabel">Category</label>
          <select
            id="category"
            className="writeSelect"
            value={category}
            onChange={handleCategoryChange}
          >
            <option value="" disabled>Select category</option>
            <option value="technology">Technology</option>
            <option value="education">Education</option>
            <option value="health">Health</option>
            <option value="food">Food</option>
            <option value="sports">Sports</option>
          </select>
        </div>
        <div className="writeFormGroup">
          <label htmlFor="file" className="writeLabel">
            Attach File
          </label>
          <input type="file" id="file" name="file" className="writeInput" onChange={handleFileChange} />
        </div>
        <button className="writeSubmit" type="submit">Publish</button>
      </form>
    </div>
  );
}
