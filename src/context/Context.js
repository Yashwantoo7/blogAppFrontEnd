import React,{useState,createContext} from 'react'
export const BlogsContext=createContext();

const BlogsContextProvider = (props) => {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [dob,setDOB]=useState('');
    const [password,setPassword]=useState('');
    const [blogs,setBlogs]=useState([]);
    const [totalBlogs,setTotalBlogs]=useState(null);
    const [rating,setRating]=useState(null);
    const [loggedIn,setLoggedIn]=useState(false);
    const [selectedBlog,setSelectedBlog]=useState(null)
    const [id,setID]=useState(null);
    const [ownBlogs,setOwnBlogs]=useState([]);
   const [currentBlogEmail,setCurrentBlogEmail]=useState('');
   const [currentBlog,setCurrentBlog]=useState([]);
   const [infoOfHost,setInfoOfHost]=useState({});
   const [blogsOfHost,setBlogsOfHost]=useState([]);
   const [searchField,setSearchField]=useState('')

    const addBlog=(blog)=>{
        setBlogs([...blogs,blog]);
    }

    return (
        <BlogsContext.Provider
            value={{infoOfHost,setInfoOfHost,blogsOfHost,setBlogsOfHost,searchField,setSearchField,
                name,setName,email,setEmail,dob,setDOB,password,setPassword,
                blogs,setBlogs,totalBlogs,setTotalBlogs,rating,setRating,ownBlogs,setOwnBlogs,
                id,setID,loggedIn,setLoggedIn,addBlog,selectedBlog,setSelectedBlog
                ,currentBlog,currentBlogEmail,setCurrentBlog,setCurrentBlogEmail}}>
                {props.children}
        </BlogsContext.Provider>
    )
}

export default BlogsContextProvider
