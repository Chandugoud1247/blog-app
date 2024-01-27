// Food.js
// Education.js
import React from 'react';
import "./singlePost.css";

const Food = () => {
  return (
    
    <div className="singlePost">
      <div className="singlePostWrapper">
      <h1>Food Blogs</h1><br/>

        <span>
           <img src={process.env.PUBLIC_URL + '/food1.jpeg'} alt="Author post" className="aboutImage" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <img src={process.env.PUBLIC_URL + '/food.jpeg'} alt="Author post" className="aboutImage" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <img src={process.env.PUBLIC_URL + '/food3.jpeg'} alt="Author post" className="aboutImage" />
           </span>
        <h1 className="singlePostTitle">
          Latest Food Blog
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Jhony</b>
          </span>&nbsp;
          <span className="singlePostDate"> 2023</span>
            
        </div>
        <p className="singlePostDesc">
        Food is the basic human need to stay alive. Moreover, it is the need of every living organism. Therefore it is important that we should not waste food. Our world consists of different types of cultures. These cultures have varieties of dishes of food in them.e cannot deny the importance of food in our lives. As it is the basic need to survive. Yet some people waste not thinking that there are still some people that do not get any of it. We should always be careful while taking a meal on our plates.

In other words, we should take only that much that our stomach can allow. Or else there will be wasting of food. In India there are many people living in slums, they do not have proper shelter. Moreover, they are not able to have even a one-time meal. They starve for days and are always in a state of sickness.
          <br />
          Indian cuisine – Indian cuisine is always filled with a lot of herbs and spices. Furthermore, the specialty of Indian dishes is, it is always filled with curries. Whether veg or non-veg the dishes are in curry form. Moreover, Indian cuisine has so many varieties of food that has further branches. The Branch consists of Mughal cuisine which is mostly of non-vegetarian dishes. Also, almost every Indian love Muglia dishes.
          <br />
       
        </p>
      </div>
    </div>
  );
};

export default Food;
