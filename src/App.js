import React from 'react'
import {Switch, Route} from 'react-router-dom';
import AddBlog from './components/AddBlog/AddBlog';
import Login from './components/Login/Login';
import OwnBlogs from './components/OwnBlogs/OwnBlogs';
import Rating from './components/Rating/Rating';
import SignUp from './components/SignUp/SignUp';
import BlogsContextProvider from './context/Context';
import BlogDetail from './routes/BlogDetail';
import {Home} from './routes/Home';
import Profile from './routes/Profile';
import UpdateProfile from './routes/UpdateProfile';
import UserDetail from './routes/UserDetail';
import Particles from 'react-particles-js'
const particlesOptions={
  particles:{
      number:{
          value:50,
          density:{
              enable:true,
              value_area:800
          }
      }
  }
}

const App = () => {
  return (
    <BlogsContextProvider>
    <div>
    <Particles style={{    
                    position: 'fixed',
                    top: 0,
                    right:0,
                    bottom: 0,
                    left: 0,
                    zIndex: -1,
                }} params={particlesOptions }/>

      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/signup' component={SignUp}/>        
        <Route exact path='/profile' component={Profile}/>
        <Route exact path='/blogdetail' component={BlogDetail}/>
        <Route exact path='/profile/update' component={UpdateProfile}/>
        <Route exact path='/blogdetail/userdetail' component={UserDetail}/>
        <Route exact path='/ownblogs' component={OwnBlogs}/>
        <Route exact path='/addblog' component={AddBlog}/>
        <Route exact path='/blogdetail/rating' component={Rating}/>
      </Switch>
    </div>
     </BlogsContextProvider>
  )
}

export  {App}
