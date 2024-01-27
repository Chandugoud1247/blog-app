// Health.js
// Education.js
import React from 'react';
import "./singlePost.css";

const Health = () => {
  return (
    
    <div className="singlePost">
      <div className="singlePostWrapper">
      <h1>Health Feed</h1><br/>

         <span>
           <img src={process.env.PUBLIC_URL + '/hea1.jpeg'} alt="Author post" className="aboutImage" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <img src={process.env.PUBLIC_URL + '/hea22.jpeg'} alt="Author post" className="aboutImage" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <img src={process.env.PUBLIC_URL + '/hea3.jpeg'} alt="Author post" className="aboutImage" />
           </span>
        <h1 className="singlePostTitle">
          Latest Health Post
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Razak</b>
          </span>&nbsp;
          <span className="singlePostDate">1 hour ago</span>
            
        </div>
        <p className="singlePostDesc">
        The Value of Vaccines to Mitigate Antimicrobial Resistance — Evidence from Low- and Middle-Income Countries
A recent report by One Health Trust researchers highlights the importance of boosting vaccination coverage to slow the pace of antimicrobial resistance. The analysis focuses on the impact of increasing vaccination coverage on the AMR-related health and economic burden in thirteen low- and middle-income countries. It emphasizes the need for policymakers to use this evidence base to expand coverage of vaccinations in routine immunization schedules and introduce new vaccines with a demonstrable contribution to reducing AMR and antibiotic use, such as those targeting rotavirus and typhoid infections. As COVID-19 cases increased globally, so did antibiotic sales.
OHT and collaborators analyzed sales data on 4 oral broad-spectrum antibiotics in 71 countries during the COVID-19 pandemic. While sales fell sharply in March 2020, they recovered to near pre-pandemic levels by May 2022. Across continents, a 10 percent increase in monthly COVID-19 cases was associated with 0.3 percent higher antibiotic sales per 1,000 people.  Antibiotic stewardship is essential to prevent COVID-19 from becoming another influenza-like illness for which antibiotics are routinely and inappropriately prescribed.
          <br />
          <br />
       
        </p>
      </div>
    </div>
  );
}

export default Health;

