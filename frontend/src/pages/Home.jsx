import React, { useEffect, useState } from 'react'
import Blogcard from '../components/Blogcard'
import { getBlogByCategory, getBlogs } from '../api/Api'
import { useSearchParams } from "react-router-dom";
const Home = () => {
  const [blogs,setBlogs] = useState(null)
  let [searchParams, setSearchParams] = useSearchParams();

    /// All Blogs Or Filter blogs
     useEffect(()=>{
        const fetchData = async () => {
            try {
              if(searchParams.get('category')) {
                const {data} = await getBlogByCategory(searchParams.get('category'));
                setBlogs(data)
              } else {
                const {data} = await getBlogs();
                setBlogs(data)
              }
            } catch (error) {
              console.error('Error fetching data:', error);
            }
        };
        fetchData();
     },[searchParams])


  return (
    <div>
      {(blogs==null || blogs.length == 0) ? <h1 className='flex justify-center '>No blog created Yet!!</h1> 
        :<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"> 
           {blogs.map((blog,i)=> <Blogcard key = {i} blog= {blog}/>)}  
        </div>
        }
    </div>
  )

}

export default Home