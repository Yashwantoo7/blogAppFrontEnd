import React,{useContext} from 'react'

import useStyles from './SignUPStyles';

import {Button, Container, CssBaseline, Grid, Typography} from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {TextField} from  '@material-ui/core'
import {Link,useHistory} from 'react-router-dom'
import { BlogsContext } from '../../context/Context';

const SignUp = () => {
    const {name,setName,email,setEmail,
        dob,setDOB,password,setPassword,setBlogs
        ,setLoggedIn,setID,setTotalBlogs,setOwnBlogs}=useContext(BlogsContext);
    
    let history=useHistory();

    const classes=useStyles();
    const handleName=(e)=>{
        setName(e.target.value)
    }

    const handleEmail=(e)=>{
        setEmail(e.target.value)
    }
    
    const handlePassword=(e)=>{
        setPassword(e.target.value)
    }
    
    const handleDob=(e)=>{
        // console.log(e.target.value)
        setDOB(e.target.value)
    }
    
    const handleSubmit=async (e)=>{
        try{
            e.preventDefault();
            // console.log(name,email,dob,password)
            await fetch('https://blooming-gorge-74715.herokuapp.com/signup',{
                method:'post',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({
                    name,email,password,
                    date_of_birth:dob
                })
                })
                .then(res=>res.json())
                .then(user=>{
                    console.log(user)
                    if(user.status==='success'){
                        setLoggedIn(true);
                        setID(user.userData.id);
                        setTotalBlogs(user.userData.totalblogs);
                        setBlogs(user.data);
                        setOwnBlogs(user.ownBlogs)
                        history.push('/');
                    }
                })
            
        }
        catch(err){
            console.log(err)
        }
    }

    return (
        <div>
        <Container component='main' maxWidth='xs' >
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component='h1' variant='h5'>
                    Sign Up
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            onChange={(e)=> handleName(e)}
                            autoComplete='fname'
                            name='firstName'
                            variant='outlined'
                            required
                            fullWidth
                            id='firstName'
                            label='First Name'
                            autoFocus
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        onChange={(e)=> handleDob(e)}
                        id="DOB"
                        label="DOB"
                        type="date"
                        defaultValue="2017-05-24"
                        className={classes.textField}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                            onChange={(e)=> handleEmail(e)}
                            variant='outlined'
                            required
                            fullWidth
                            id='email'
                            label='Email Address'
                            name="email"
                            autoComplete='email'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            onChange={(e)=> handlePassword(e)}
                            variant='outlined'
                            required
                            fullWidth
                            name='password'
                            id='password'
                            label='Password'
                            type='password'
                            id='password'
                            autoComplete='current-password'
                        />
                    </Grid>
                    </Grid>
                    <Button
                        onClick={(e)=>handleSubmit(e)}
                        type='submit'
                        fullWidth
                        variant='contained'
                        color='primary'
                        className={classes.submit}
                        >
                            Sign Up
                    </Button>
                    <Grid container justify="flex-end">
                    <Grid item>
                    <Link to="/Login">
                        Already have an account? Sign in
                    </Link>
                    </Grid>
                    </Grid> 
                </form>
            </div>
        </Container>            
        </div>
    )
}

export default SignUp
