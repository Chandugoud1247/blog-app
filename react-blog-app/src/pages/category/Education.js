// Education.js
import React from 'react';
import "./singlePost.css";

const Education = () => {
  return (
    
    <div className="singlePost">
      <div className="singlePostWrapper">
      <h1>Educational Feed</h1><br/>
       <span>
        <img src={process.env.PUBLIC_URL + '/edu1.jpeg'} alt="Author post" className="aboutImage" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <img src={process.env.PUBLIC_URL + '/edu.jpeg'} alt="Author post" className="aboutImage" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <img src={process.env.PUBLIC_URL + '/edu2.jpeg'} alt="Author post" className="aboutImage" />
        </span>
        <h1 className="singlePostTitle">
          Latest Educational Post
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Rahul</b>
          </span>&nbsp;
          <span className="singlePostDate"> 3 hour ago</span>
            
        </div>
        <p className="singlePostDesc">
        Education is the transmission of knowledge, skills, and character traits and comes in many forms. Formal education happens in a complex institutional framework, like public schools. Non-formal education is also structured but takes place outside the formal schooling system, while informal education is unstructured learning through daily experiences. Formal and non-formal education are divided into levels that include early childhood education, primary education, secondary education, and tertiary education. Other classifications focus on the teaching method, like teacher-centered and student-centered education, and on the subject, like science education, language education, and physical education. The term "education" can also refer to the mental states and qualities of educated people and the academic field studying educational phenomena.
          <br />
          <br />
       
        </p>
      </div>
    </div>
  );
};

export default Education;
