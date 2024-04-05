import React, { useEffect, useState } from 'react'
import Blogcard from '../components/Blogcard'
import { getBlogByCategory, getBlogs } from '../api/Api'
import { useSearchParams } from "react-router-dom";
const Home = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [blogs,setBlogs] = useState(null)

    //  useEffect(()=>{
    //     const fetchData = async () => {
    //         try {
    //           const {data} = await getBlogs();
    //           setBlogs(data)
    //         } catch (error) {
    //           console.error('Error fetching data:', error);
    //         }
    //     };

    //     fetchData();
    //  },[])

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


    // const data = [
    //     {
    //         title:'Is it worth investing in real estate ? Advantages and disadvantages',
    //         imageUrl:'https://picsum.photos/id/200/500/200',
    //         description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...',
    //         createdAt:'24 Jan, 2024',
    //         comments:'0'
    //     },
    //     {
    //         title:'Is it worth investing in real estate ? Advantages and disadvantages',
    //         imageUrl:'https://picsum.photos/id/208/500/200',
    //         description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...',
    //         createdAt:'24 Jan, 2024',
    //         comments:'0'
    //     },
    //     {
    //         title:'Is it worth investing in real estate ? Advantages and disadvantages',
    //         imageUrl:'https://picsum.photos/id/10/500/200',
    //         description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...',
    //         createdAt:'24 Jan, 2024',
    //         comments:'0'
    //     },
    //     {
    //         title:'Is it worth investing in real estate ? Advantages and disadvantages',
    //         imageUrl:'https://picsum.photos/id/206/500/200',
    //         description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...',
    //         createdAt:'24 Jan, 2024',
    //         comments:'0'
    //     },
    //     {
    //         title:'Is it worth investing in real estate ? Advantages and disadvantages',
    //         imageUrl:'https://picsum.photos/id/15/500/200',
    //         description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...',
    //         createdAt:'24 Jan, 2024',
    //         comments:'0'
    //     },
    //     {
    //         title:'Is it worth investing in real estate ? Advantages and disadvantages',
    //         imageUrl:'https://picsum.photos/id/204/500/200',
    //         description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...',
    //         createdAt:'24 Jan, 2024',
    //         comments:'0'
    //     },
    //     {
    //         title:'Is it worth investing in real estate ? Advantages and disadvantages',
    //         imageUrl:'https://picsum.photos/id/203/500/200',
    //         description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...',
    //         createdAt:'24 Jan, 2024',
    //         comments:'0'
    //     },
    //     {
    //         title:'Is it worth investing in real estate ? Advantages and disadvantages',
    //         imageUrl:'https://picsum.photos/id/202/500/200',
    //         description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...',
    //         createdAt:'24 Jan, 2024',
    //         comments:'0'
    //     },
    //     {
    //         title:'Is it worth investing in real estate ? Advantages and disadvantages',
    //         imageUrl:'https://picsum.photos/id/201/500/200',
    //         description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...',
    //         createdAt:'24 Jan, 2024',
    //         comments:'0'
    //     },
    // ]

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