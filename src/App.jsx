import { useEffect, useState } from "react";
import Content from "./components/Content";

export default function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const url = "https://wp.chrisrg.dk/wp-json/wp/v2/posts?_embed&categories=1?_embed&categories=3";
      const response = await fetch(url);
      const data = await response.json();
      setPosts(data);
    }
    getPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => {
        <Content post={post} key={post.id} />;
      })}
    </div>
  );
}
