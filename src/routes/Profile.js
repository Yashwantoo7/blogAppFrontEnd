import { Container} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React,{useContext} from 'react'
import { BlogsContext } from '../context/Context'
import {Link} from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import './Profile.css';
const useStyles=makeStyles((theme)=>({
    root:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:'100vh',
        opacity:0.5,
        background:'linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)'
    },
    grid:{
        marginLeft:'15px',
        
    }   ,
    avatar:{
        margin:theme.spacing(1),
        marginLeft:theme.spacing(8),
        width:theme.spacing(10),
        height:theme.spacing(10),
        backgroundColor:'red'
    },
}))


const Profile = () => {
    const {name,email,dob,password,blogs,totalBlogs,id}=useContext(BlogsContext);
    console.log(dob,email,totalBlogs)
    const classes=useStyles();
    return ( 
    <Container>
        <NavBar/>
        <div class="page-content page-container" id="page-content"> 
            <div class="padding">
            <div class="row container d-flex justify-content-center">
                <div class="col-xl-6 col-md-12">
                    <div class="card user-card-full">
                        <div class="row m-l-0 m-r-0">
                            <div class="col-sm-8">
                                <div class="card-block">
                                    <h6 class="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <p class="m-b-10 f-w-600">Name</p>
                                            <h6 class="text-muted f-w-400">{name.charAt(0).toUpperCase()+name.slice(1)}</h6>
                                        </div>
                                        <div class="col-sm-6">
                                            <p class="m-b-10 f-w-600">Email</p>
                                            <h6 class="text-muted f-w-400">{email} </h6>
                                        </div>
                                        <div class="col-sm-6">
                                            <p class="m-b-10 f-w-600">DOB</p>
                                            <h6 class="text-muted f-w-400">{dob.slice(0,10)} </h6>
                                        </div>
                                        <div class="col-sm-6">
                                            <p class="m-b-10 f-w-600">Password</p>
                                            <h6 class="text-muted f-w-400">{password} </h6>
                                        </div>
                                    </div>
                                    <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">BLogs</h6>
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <p class="m-b-10 f-w-600">Total Blogs</p>
                                            <h6 class="text-muted f-w-400">{totalBlogs}</h6>
                                            {totalBlogs>0?<Link to ='/ownblogs' >Blogs</Link>:''}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </Container>
    
    )
}

export default Profile
