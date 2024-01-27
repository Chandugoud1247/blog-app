import React from 'react';
import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
      <h1>Trends in Technology</h1><br/>
        <span>
           <img src={process.env.PUBLIC_URL + '/tec.jpeg'} alt="Author post" className="aboutImage" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <img src={process.env.PUBLIC_URL + '/tech1.jpg'} alt="Author post" className="aboutImage" />&nbsp;&nbsp;&nbsp;&nbsp;
           <img src={process.env.PUBLIC_URL + '/tech11.jpg'} alt="Author post" className="aboutImage" />
           </span>
        <h1 className="singlePostTitle">
          Trending Tech Blogs
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Safak</b>
          </span>&nbsp;
          <span className="singlePostDate">1 hour ago</span>
            
        </div>
        <p className="singlePostDesc">
        Technology is the application of conceptual knowledge for achieving practical goals, especially in a reproducible way.[1] The word technology can also mean the products resulting from such efforts,[2][3] including both tangible tools such as utensils or machines, and intangible ones such as software. Technology plays a critical role in science, engineering, and everyday life.

Technological advancements have led to significant changes in society. The earliest known technology is the stone tool, used during prehistoric times, followed by the control of fire, which contributed to the growth of the human brain and the development of language during the Ice Age. The invention of the wheel in the Bronze Age allowed greater travel and the creation of more complex machines. More recent technological inventions, including the printing press, telephone, and the Internet, have lowered barriers to communication and ushered in the knowledge economy.

While technology contributes to economic development and improves human prosperity, it can also have negative impacts like pollution and resource depletion, and can cause social harms like technological unemployment resulting from automation. As a result, there are ongoing philosophical and political debates about the role and use of technology, the ethics of technology, and ways to mitigate its downsides.
          <br />
          <br />
       
        </p>
      </div>
    </div>
  );
}