
import { Container ,Grid} from '@material-ui/core';
import React, { useContext } from 'react'
import { BlogsContext } from '../../context/Context'
import SimpleCard from '../Card/Card';
import NavBar from '../Navbar/NavBar';

const OwnBlogs = () => {
    const{ownBlogs,email,id}=useContext(BlogsContext);
    const blogs=ownBlogs
    // console.log('own blogs are',blogs[0].blog.length)

  const renderBlogs=(blogs)=>{
    return  blogs.map(b=>{
      let size=b.blog.length;
      // console.log(size)
      let cardArr=[]
      while(size){
        // console.log(b.email,b.id,b.blog[size-1]);
          size-=1;
         cardArr.push(<SimpleCard id={id} blog={b.blog[size]} email={email} />)
      }
      return cardArr;
  })
  }
  const OwnBlogs=renderBlogs(blogs)
  // console.log(renderBlogs(blogs))
    return (
        <div>
            <Container >
            <NavBar/>
              <h3>Own-Blogs</h3>
                <Grid >
                  {OwnBlogs}
                </Grid>
            </Container>
        </div>
    )
}

export default OwnBlogs
