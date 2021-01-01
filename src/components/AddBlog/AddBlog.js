import { Button, Container, Grid, TextareaAutosize } from '@material-ui/core'
import React from 'react'
import { useContext } from 'react'
import { BlogsContext } from '../../context/Context'
import NavBar from '../Navbar/NavBar'
import {useHistory} from 'react-router-dom'
// import socketIOClient from 'socket.io-client'
import {socket} from '../../routes/Home'

const AddBlog = () => {
    let history=useHistory()
    let title=''
    let blog=''
    const {email,totalBlogs,id,addBlog,setTotalBlogs}=useContext(BlogsContext)
    const handleTitle=(e)=>{
        // console.log(e.target.value)
        title=e.target.value
    }
    const handleBlog=(e)=>{
        // console.log(e.target.value)
        blog=e.target.value
    }   

    // console.log(id,email,totalBlogs)
    const handleAdd=()=>{
        // console.log(" jfkdjk")
        if (title.length>0 && blog.length>0 ){
            // console.log('title',title,'blog',blog)
            // console.log(id,email,totalBlogs)
            // console.log(" jfkdjk")
            // console.log(id,email,totalBlogs)
            fetch(`https://blooming-gorge-74715.herokuapp.com/${id}/addblog`,{
                method:'post',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({
                    email,
                    totalblogs:totalBlogs,
                    title,blog  
                })
            }).then(res=>res.json())
            .then(res=>{
                if(res.status==="success"){
                    // console.log(res.data)
                    addBlog(res.data)
                    setTotalBlogs(totalBlogs+1)
                    title=''
                    blog=''
                    // const socket=socketIOClient('https://blooming-gorge-74715.herokuapp.com');
                    socket.emit('blog_added',{data:res.data});
                    history.replace('/')

                }
            }
                )
            // console.log(data)
        }
    }

    return (
        <div>
            <Container fixed>
                <NavBar/>
                <h3>add blog</h3>
                <Grid>                
                    <TextareaAutosize onChange={(e)=>handleTitle(e)}
                        rowsMax={2}
                        aria-label="maximum height"
                        placeholder="write title"
                        defaultValue="title"
                />
                </Grid>
                <Grid>
                    <TextareaAutosize onChange={(e)=>handleBlog(e)}
                        rowsMax={10}
                        aria-label="maximum height"
                        placeholder="write blog"
                        defaultValue="blog"
                    />
                </Grid>
                <Grid container justify='center'>
                    <Button onClick={handleAdd}  variant='contained' color='secondary'>Add</Button>
                </Grid>
            </Container>
        </div>
    )
}

export default AddBlog
