import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router";
import axios from 'axios';
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";

export default function Home() {
  const location = useLocation();
  console.log(location);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts when the component mounts
    axios.get('http://localhost:3001/posts')
      .then(response => {
        setPosts(response.data.posts);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, []); // The empty dependency array ensures the effect runs only once

  return (
    <>
      <Header />
      <div className="home">
        {/* <h1>Blog-Posts</h1> */}
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
            </li>
          ))}
        </ul>
        <Posts />
        <Sidebar />
      </div>
    </>
  );
}
