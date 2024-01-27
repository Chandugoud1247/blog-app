// Sports.js
// Education.js
import React from 'react';
import "./singlePost.css";

const Sports = () => {
  return (
    
    <div className="singlePost">
      <div className="singlePostWrapper">
      <h1>Sports Feed</h1><br/>

         <span>
           <img src={process.env.PUBLIC_URL + '/spo.jpg'} alt="Author post" className="aboutImage" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <img src={process.env.PUBLIC_URL + '/sports.jpg'} alt="Author post" className="aboutImage" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <img src={process.env.PUBLIC_URL + '/spo2.jpeg'} alt="Author post" className="aboutImage" />
           </span>
        <h1 className="singlePostTitle">
          Latest Sports in Trend
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Mehta</b>
          </span>&nbsp;
          <span className="singlePostDate">2022</span>
            
        </div>
        <p className="singlePostDesc">
        Games and sports are very useful for the body. The human
body needs exercise to keep fit. So games and sports are an
important part of education.
They are helpful in developing the physique and mind of the
student. A sound body possesses a sound mind. If we are
physically weak, we can not have the fertile brain.
Games and sports keep us healthy. They keep us active, makes
us smart and alert.
More bookish knowledge is useful. It does not lead to the
proper development of personality. All work and no play makes
jack dull boy. Mere studies would not suffice.
Merely sports won’t do. The two should be blended in a
suitable proportion. Both are essential for a wholesome
personality.
Games and sports give a sense of duty of loyalty. In every game,
there are two teams. One win and another loses.
The winners and the losers should take the victory and defeat
alike. Both of parties should greet each other heartily after the
game.
Secondly, games and sports teach us discipline. It is a chief
quality of a person. It is quality which makes a character.
Thirdly, games broaden our outlook. The players always play
with the best spirit of a good player.
They need have no bias. There is no question of nationality,
caste, creed or color. Thus games and sports promote
international brotherhood and affection amongst the people of
the world. They promote world peace too.
Games and sports teach the spirit of sportsmanship.
Sportsmanship teaches cooperation, team spirit, and proper
behavior. They are beneficial to the public also. When matches
are played, spectators enjoy it
          <br />
          <br />
       
        </p>
      </div>
    </div>
  );
}

export default Sports;
