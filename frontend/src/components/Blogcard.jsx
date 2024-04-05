import React from 'react'
import {Link} from 'react-router-dom'
import dateFormat from "dateformat";
import { formatedDescription } from '../utlis/text-format';
import { IoApps } from "react-icons/io5";

const Blogcard = (props) => {
    const apiUrl = 'https://blog-app-q6m0.onrender.com/'
    const {blog} = props;
    return (
        <div className='bg-white shadow-md overflow-hidden rounded-xl'>
            <Link to={`/blog/${blog.id}`}>
                <div className="flex flex-col w-full">
                    <div className="w-full h-[250px] bg-no-repeat bg-cover bg-center " > 
                     <img style={{height:'250px', width:'500px'}} src={apiUrl+blog.imageurl} alt="" />
                     </div>
                    <div className='py-2 px-4'>
                        <h5 className='mt-1 text-xl text-left'>{blog.title}</h5>
                        <p className='text-sm text-left opacity-80'>{`${formatedDescription(blog.description)}....`}</p>
                        <small className='text-xsm text-left opacity-90'>{dateFormat(blog.createdAt,"mmmm dS, yyyy, h:MM TT")}</small>
                        <p className='flex justify-start items-center opacity-70 mt-2'>
                        <IoApps />
                        <span className='text-sm text-left ml-2'>{blog.category}</span>
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Blogcard