
import {Button, Container ,Grid} from '@material-ui/core';
import React, { useContext, useEffect } from 'react'
import { BlogsContext } from '../../context/Context'
import SimpleCard from '../Card/Card';
import {makeStyles} from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom';
import {socket} from '../../routes/Home';

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

    const  updateBlogs= (updatedBlogs,data)=>{
      let i=0;
      let found=false
      for(i=0;i<updatedBlogs.length;i++){
        if(updatedBlogs[i].id===data.data.id){
          found=true;
          updatedBlogs[i].blog=data.data.blog
         }
      }
      if (found===false){
        updatedBlogs.push(data.data)
      }
      setBlogs(updatedBlogs)
      return updatedBlogs
    }
    useEffect(()=>{
        socket.on('update_blogs',data=>{
          let updatedBlogs=[...blogs]
          updatedBlogs=updateBlogs(updatedBlogs,data.data)
        })
    },[])
    

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
  const {searchField}=useContext(BlogsContext);
  const searchedBlogs=()=>{
        let Cards=[]
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
              <Grid  >
                <Grid >
                  {searchField.length>0?searchedBlogs():allBlogs}
                </Grid>
              </Grid>
            </Container>
    )
}

export default AllBlogs
