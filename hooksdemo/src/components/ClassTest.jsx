import { useEffect, useState } from "react";
import "./ClassTest.css";
import axios from "axios";



export function ClassTest(){
    const [posts, setPosts]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then((response)=>
        setPosts(response.data)) 
        // console.log(response);
        // response.data

    },[]);



    return(
        <>
        {posts.map((post)=>{
           const {id,name,email,body}=post 
           return <div key={id}>
               <h2 className="name">{name}</h2>
               <p className="email">{email}</p>
               <h4 className="bodi">{body}</h4>
           </div>
        })}
        </>
    )
}