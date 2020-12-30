import { Box, Container, Typography } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useContext } from 'react'
import NavBar from '../components/Navbar/NavBar'
import { BlogsContext } from '../context/Context'
import {makeStyles} from '@material-ui/core/styles'
import { Link, useHistory } from 'react-router-dom'
import Rating from '../components/Rating/Rating'

const useStyles = makeStyles({
    root: {
    //   display:'flex',
      marginTop:5,
      marginLeft:10
    },
    title: {
      fontSize: 14,
    },
    link:{
      "&:hover":{
        cursor:'pointer'
      }
    },
    pos: {
      marginBottom: 12,
    },
  });

const BlogDetail = () => {
    const classes=useStyles();
    let history=useHistory();
    const{infoOfHost,setInfoOfHost,setBlogsOfHost,blogsOfHost}=useContext(BlogsContext)
    const{id,currentBlogEmail,currentBlog}=useContext(BlogsContext);
    // const handleUserDetail=()=>{
    //   history.push('/blogdetail/userdetail')
    // }

    async function getInfo(){
      try{
         const res= await fetch(`https://blooming-gorge-74715.herokuapp.com/${id}/getinfo`,{
              method: 'post',
              headers:{'Content-Type':'application/json'},
              body:JSON.stringify({
                  email:currentBlogEmail
              })
          })
          const user=await res.json()
          console.log(user)
          if(user.status==="success"){
              await setInfoOfHost(user.info);
              await setBlogsOfHost(user.blogs);
              console.log(infoOfHost,blogsOfHost)
          };
          history.push('/blogdetail/userdetail')
      }
      catch(err){
          console.log(err);
      }
  }

    return (
        <div>
        <Container fixed >
        <NavBar/>
            <h3> Blog Detail</h3>
        <Container className={classes.root}>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
          <Box className={classes.link} onClick={getInfo} color="secondary.main">{currentBlogEmail}</Box>
            {/* <Box onClick={handleUserDetail} color="secondary.main">{currentBlogEmail}</Box> */}
            </Typography>
            <Typography variant="h5" component="h2">
            <Box color="primary.main">{currentBlog[0]}</Box>
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
            Rating  {currentBlog[4]} /5
            </Typography>
            <Typography variant="body2" component="p">
            <br />
            <Box color="info.main">{currentBlog[1]}</Box>
            </Typography>
        </Container>
        <Rating/>
            </Container>
        </div>
    )
}

export default BlogDetail
