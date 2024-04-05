import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { createBlog, uploadFile } from '../api/Api';

const Createblog = () => {
    const emptyBlog = {
        "title":'',
        "imageUrl": '',
        "category": '',
        "description": "<p><br></p>"
    }

    const [newBlog,setNewBlog] = useState(emptyBlog);
    const [file,setFile]= useState(null);
    const [isSubmit,setIsSubmit]= useState(null);
    const [isDisabled, setIsDisabled] = useState(false);
    
    useEffect(() => {
        const createNewBlog = async () => {
            const result = await createBlog(newBlog);
            if (result.data) {
                setIsSubmit('Blogs Created Successfully!');
                setNewBlog(emptyBlog);
                setFile(null);
                document.getElementById('fileupload').value = '';
            } else{
                setIsSubmit('Blog not Created!');
            }
            setIsDisabled(false);
        };
        if (newBlog.imageUrl.trim().length>0) {
            createNewBlog();
        }
    }, [newBlog.imageUrl]);



    const menu = [
        {text:'Nature',path:'/'},
        {text:'Travel',path:'/'},
        {text:'Technology',path:'/'},
        {text:'Politics',path:'/'},
    ]

    const handleUpload = (e) => {
         setFile(e.target.files[0]);
    }

    const handleSubmit = async() => {
       setIsDisabled(true);
     // check title category  description and file
    if(newBlog.title.trim().length > 0 
    && newBlog.category.trim().length > 0 
    && newBlog.description.trim().length > 0 && file !==null){

    // upload image
    let uploadedFile = await uploadFile(file);
    if (uploadedFile.path) {
        setNewBlog(prevState => ({...prevState,imageUrl: uploadedFile.path}));
    }
   
    } else {
        setIsSubmit('Please enter all input');
        setIsDisabled(false);
    }
}

  return (
    <div className='flex w-full items-center justify-center'>
    <div className="bg-slate-200 w-[60%] p-5 rounded-xl">
        <h1 className='text-2xl mb-5'>Create Blog Post</h1>
        <div className="flex flex-col">
            <label htmlFor="" className='ml-1 text-gray-500'>Title</label>
            <input type="text" className='h-10 border border-gray-300 rounded my-2 p-2' value={newBlog.title} onChange={(e)=> setNewBlog({...newBlog,title:e.target.value})} />
            <label htmlFor="" className='ml-1 text-gray-500'>Category</label>
            <select  name="" id="" className='h-10 border border-gray-300 rounded my-2 p-2' value={newBlog.category} onChange={(e)=> setNewBlog({...newBlog,category:e.target.value})} >
                <option value="" default disabled>Select Category</option>
                {menu.map((x,i) => {
                    return <option value={x.text} key={i}>{x.text}</option>
                })}
            </select>
            <label htmlFor="" className='ml-1 text-gray-500'>Image</label>
            <input id='fileupload' type="file" className='  border-gray-300 rounded my-2 p-2'  onChange={(e)=> handleUpload(e)} />
            <label htmlFor="" className='ml-1 text-gray-500'>Description</label>
            <ReactQuill className='bg-white rounded mb-2 mt-2 editingarea' theme="snow" value={newBlog.description} onChange={(e)=> setNewBlog({...newBlog,description:e})} />
            <hr />
            <button disabled ={isDisabled} onClick={handleSubmit}  className='bg-slate-500 text-white h-8 w-[100px] mt-2 rounded'>Submit</button>
            {isSubmit && <div>{isSubmit}</div>}
        </div>
    </div>
</div>
  )
}

export default Createblog