import axios from "axios";
const apiUrl = 'https://blog-app-q6m0.onrender.com'

// getAllBlogs
export const getBlogs = async() => {
    return await axios.get(`${apiUrl}/blogs`)
    .then((res)=> res.data)
    .catch((err)=> err);
};
export const getBlogByCategory = async(cat) => {
    return await axios.get(`${apiUrl}/blogByCategory/${cat}`)
    .then((res)=> res.data)
    .catch((err)=> err);
};

// Create Blog
export const createBlog = async (data) => {
    return await axios.post(`${apiUrl}/blogs`, data)
      .then((res)=> res.data)
      .catch((err)=> err);
};

/// Upload File
export const uploadFile = async (file) => {
    const formdata = new FormData();
    formdata.append('file',file);
    const config = {
        headers : {
            'content-Type' : 'multipart/form-data'
        }
    }
    return await axios.post(`${apiUrl}/uploadImage`, formdata, config)
      .then((res)=> res.data)
      .catch((err)=> err);
};

/// GetBlogById
export const getBlogById = async(id) => {
    return await axios.get(`${apiUrl}/blogs/${id}`)
    .then((res)=> res.data)
    .catch((err)=> err);
};
