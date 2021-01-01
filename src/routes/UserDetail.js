import { Box, Container, makeStyles, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import SimpleCard from '../components/Card/Card'
import NavBar from '../components/Navbar/NavBar'
import { BlogsContext } from '../context/Context'


const useStyles = makeStyles({
    root: {
    //   display:'flex',
      marginTop:50,
      marginLeft:10
    },
    title: {
      fontSize: 15,
    },
    pos: {
      marginBottom: 12,
    },
  });


const UserDetail = () => {
    const classes=useStyles();
    const{infoOfHost,blogsOfHost}=useContext(BlogsContext)

    useEffect(()=>{
        
    })
    
  const renderBlogs=(blogs)=>{
      console.log(blogs)
    return  blogs.map(b=>{
      let size=b.blog.length;
      console.log(size)
      let cardArr=[]
      while(size){
        console.log(b.email,b.id,b.blog[size-1]);
          size-=1;
         cardArr.push(<SimpleCard id={b.id} blog={b.blog[size]} email={b.email} />)
      }
      return cardArr;
  })
  }

  const allBlogs=renderBlogs(blogsOfHost)

    return (
        <div>
            <Container fixed>
                <NavBar/>
                <Container className={classes.root} >
                    <h3>Bloger Detail</h3>
                    <Typography className={classes.pos,classes.title} gutterBottom>
                        <Box color='primary.main'>Name : {infoOfHost.name} </Box>
                    </Typography>
                    <Typography className={classes.title} gutterBottom>
                        <Box color='secondary.main'>Email : {infoOfHost.email} </Box>
                    </Typography>
                    <Typography className={classes.title} gutterBottom>
                        <Box color='info.main'>Date Of Birth : {infoOfHost.date_of_birth.slice(0,10)}</Box>
                    </Typography>
                    <Typography className={classes.title} gutterBottom>
                        <Box color='primary.main'>Total Blogs : {infoOfHost.totalblogs}</Box>
                    </Typography>
                </Container>
                {allBlogs}
            </Container>
        </div>
    )
}

export default UserDetail
