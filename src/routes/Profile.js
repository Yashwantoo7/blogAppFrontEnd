import { Container, Grid ,Paper,Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React,{useContext} from 'react'
import { BlogsContext } from '../context/Context'
import Avatar from '@material-ui/core/Avatar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {Link} from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';

const useStyles=makeStyles((theme)=>({
    root:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:'100vh',
        backgroundColor:'#607d8b'
        // backgroundImage: 
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
        <div>
            <Container >
            <NavBar/>
           <Paper elevation={5} className={classes.root}>

           <Grid className={classes.grid} >           
           <Avatar className={classes.avatar}>
                    <AccountCircleIcon fontSize='large'/>
            </Avatar>
           <Typography variant="h4" component="h2">
          Name: {name.charAt(0).toUpperCase()+name.slice(1)} 
        </Typography>
        <Typography variant="h5" component="h2">
          ID: {id} 
        </Typography>
        <Typography variant="h5" component="h2">
          Email: {email} 
        </Typography>
        <Typography variant="h5" component="h2">
            Password:{password}
        </Typography>
        <Typography variant="h5" component="h2">
          DOB: {dob.slice(0,10)} 
        </Typography>
        <Typography variant="h5" component="h2">
            Total Blogs: {totalBlogs}
        </Typography>
        {totalBlogs>0?<Link to ='/ownblogs' >Blogs</Link>:''}
        </Grid>
        </Paper>
       </Container>
        </div>       
    )
}

export default Profile
