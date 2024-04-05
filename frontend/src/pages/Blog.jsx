import React, { useEffect, useState } from 'react'
import dateFormat from "dateformat";
import parse from 'html-react-parser';
import { useParams } from 'react-router-dom';
import { getBlogById } from '../api/Api';
const Blog = () => {
  let {id} = useParams();
  const apiUrl = 'http://localhost:3000/'
  const[blog,setBlog] = useState(null);
  useEffect(()=>{
    const getBlog= async() =>{
      try {
      const {data} = await getBlogById(id);
      setBlog(data)
      } catch(err){
        console.error('Error fetching data:', err);
      }
    }
    getBlog();
  },[])

  return (
    <>
   { blog && 
   <div className='flex justify-center items-center'>
     <div className="flex flex-col w-[60%] overflow-hidden">
        <h1 className='mt-1 text-3xl font-extrabold'>{blog.title}</h1>
    
        <div className="flex mt-4 mb-4">
            <small>{dateFormat(blog.createdAt,"mmmm dS, yyyy, h:MM TT")}</small>
        </div>
        <img className='rounded-lg' src= {apiUrl+blog.imageurl} alt="" />
        <div className='mt-5'>
            {parse(blog.description)}
        </div>
    </div>
    </div>
   }
    </>
  )
}

export default Blog