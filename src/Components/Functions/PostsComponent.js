import React, { useEffect, useState } from "react";
import axios from "axios";

const PostsComponent = () => {
  const [posts, setPosts] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const callAPI = async () => {
      const results = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${count}`
      );
      console.log(results);
      setPosts(results.data);
    };
    callAPI();
  }, [count]);

  const handleClick = () => {
    setCount((prevState) => prevState + 1);
  };
  return (
    <div>
      <button onClick={handleClick}>Click {count} times</button>
      {posts.map((post) => (
        <h3 key={post.id}>{post.title}</h3>
      ))}
    </div>
  );
};

export default PostsComponent;
