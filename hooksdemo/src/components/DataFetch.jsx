import React, { useState, useEffect } from "react";
import axios from "axios";

export function DataFetch() {
  const [posts, setPosts] = useState([]);
  //   const [post, setPost] = useState([]);
  //   const [id, setId] = useState(1);
  //   const [btnId, setBtnId] = useState(1);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      //   console.log(response.data);
      setPosts([posts, ...response.data]);
      setFilteredData([posts, ...response.data]);
    });
  }, []);

  //   useEffect(() => {
  //     axios
  //       .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  //       .then((response) => {
  //         console.log(response.data);
  //         setPost(response.data);
  //       })
  //       .catch((err) => console.log(err));
  //   }, [btnId]);

  useEffect(() => {
    const afterFilterData = posts.filter((post) => {
      if (post.title) {
        // console.log("inside if");
        // console.log(search, post.title.includes(search));
        return post.title.includes(search);
      }
    });
    // console.log(afterFilterData);
    setFilteredData(afterFilterData);
  }, [search]);

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredData.map((post) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))}
      {/* <h1>{post.title}</h1>
      <p>{post.body}</p> */}
      {/* <button onClick={() => setId((prev) => prev + 1)}>click - {id}</button> */}
      {/* <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={() => setBtnId}>click</button> */}
    </div>
  );
}
