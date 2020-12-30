
import {Button, Container ,Grid} from '@material-ui/core';
import React, { useContext, useEffect } from 'react'
import { BlogsContext } from '../../context/Context'
import SimpleCard from '../Card/Card';
import {makeStyles} from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom';
import socketIOClient from 'socket.io-client'
const ENDPOINT='https://blooming-gorge-74715.herokuapp.com';

const useStyles=makeStyles({
  button:{
    marginTop:20,
    justify:'center'
  }
})

const AllBlogs = () => {
  let history=useHistory();

  const classes=useStyles();
    const{blogs,addBlog,setBlogs}=useContext(BlogsContext);
    console.log('blogs are',blogs)

    console.log("connecting")
    const socket=socketIOClient('https://blooming-gorge-74715.herokuapp.com');

    const  updateBlogs= (updatedBlogs,data)=>{
      let i=0;
      for(i=0;i<updatedBlogs.length;i++){
        if(updatedBlogs[i].id===data.data.id){
  
          updatedBlogs[i].blog=data.data.blog
         }
      }
      return updatedBlogs
    }
    // useEffect(()=>{
       setInterval(async ()=>{
        socket.on('update_blogs',data=>{
          let updatedBlogs=[...blogs]
          // console.log(updatedBlogs)
          updatedBlogs=updateBlogs(updatedBlogs,data.data)
        })
      },5000)

    
    // })
    

  const renderBlogs=(blogs)=>{
    return  blogs.map(b=>{
      let size=b.blog.length;
      let cardArr=[]
      while(size){
          size-=1;
         cardArr.push(<SimpleCard id={b.id} blog={b.blog[size]} email={b.email} />)
      }
      return cardArr;
  })
  }
  const allBlogs=renderBlogs(blogs)
  // console.log(renderBlogs(blogs))
  const {searchField}=useContext(BlogsContext);
  const searchedBlogs=()=>{
        let Cards=[]
        // console.log(Cards.length)
        Cards=blogs.map(b=>{let size=b.blog.length;
            let CardArr=[];
        while(size){
            size-=1
            if(b.blog[size][0].toLowerCase().includes(searchField.toLowerCase())){
              CardArr.push(<SimpleCard id={b.id} blog={b.blog[size]} email={b.email} />)
            }
          }
          return CardArr
        })
        // console.log(Cards.length)
        if(Cards.length>0){
          return Cards
        }
  }

    const handleAddBlog=()=>{
      history.push('/addblog')
    }

    return (
            <Container >
              <Grid container justify = "center">
              <Button onClick={handleAddBlog} className={classes.button} variant="contained">Add Blog</Button>
              </Grid>
              <h3>all blogs</h3>
              <Grid container spacing={1}>
                <Grid container item xs={12} spacing={3}>
                  {searchField.length>0?searchedBlogs():allBlogs}
                </Grid>
              </Grid>
            </Container>
    )
}

export default AllBlogs
