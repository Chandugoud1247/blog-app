import React, { useRef, useEffect } from "react";
import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  const postsRef = useRef([]);

  useEffect(() => {
    // Access the first post and call the focus method
    postsRef.current[0]?.focus();
  }, []);

  return (
    <div className="posts">
      {[
        {
          title: "TECHNOLOGY",
          date: "24-01-2024",
          description: "Technology is the application of conceptual knowledge for achieving practical goals, especially in a reproducible way. ",
          imageUrl: "https://emeritus.org/wp-content/uploads/2023/11/tech.png",
        },
        {
          title: "EDUCATION",
          date: "20-12-2023",
          description: "Education is the transmission of knowledge, skills, and character traits and comes in many forms. Formal education happens in a complex institutional framework, like public schools. ",
          imageUrl: "https://blog.adobe.com/en/publish/2022/09/08/media_199508d79870be49377a327889db41dfa867c18ba.jpeg?width=1200&format=pjpg&optimize=medium",
        },
        {
          title: "FOOD",
          date: "26-08-2023",
          description: "Food is one of the basic necessities of life. Food contains nutrients—substances essential for the growth, repair, and maintenance of body tissues and for the regulation of vital processes. ",
          imageUrl: "https://media.post.rvohealth.io/wp-content/uploads/2020/08/reasons-to-eat-real-food-1200x628-facebook-1200x628.jpg", 
        },
        
        {
          title: "HEALTH",
          date: "18-07-2023",
          description: "Health can be promoted by encouraging healthful activities, such as regular physical exercise and adequate sleep, and by reducing or avoiding unhealthful activities or situations, such as smoking or excessive stress. ",
          imageUrl: "https://cms-api-in.myhealthcare.co/image/20220910103120.jpeg",
        },
        {
          title: "SPORTS",
          date: "30-12-2022",
          description: "A human activity involving physical exertion and skill as the primary focus of the activity, with elements of competition or social participation where rules and patterns of behaviour governing the activity exist formally through organisations and is generally recognised as a sport.",
          imageUrl: "https://cache.careers360.mobi/media/article_images/2022/9/17/Importance-of-Sports-in-student-life.jpg",
        },
      ].map((post, index) => (
        <Post key={index} ref={(ref) => (postsRef.current[index] = ref)} {...post} />
      ))}
    </div>
  );
}
