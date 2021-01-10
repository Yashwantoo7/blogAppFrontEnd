import React,{useContext} from 'react'
import {useHistory} from 'react-router-dom';
import {Button, Container, CssBaseline, Grid, Typography} from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {TextField} from  '@material-ui/core'
import { BlogsContext } from '../../context/Context';

import useStyles from './LoginStyle'

const Login = () => {
    const {setName,email,setEmail,blogs,
        setDOB,password,setPassword,setBlogs
        ,setLoggedIn,setID,setTotalBlogs,setOwnBlogs}=useContext(BlogsContext);
    
    let history=useHistory()

    const classes=useStyles();

    const handleEmail=(e)=>{
        setEmail(e.target.value)
    }
    
    const handlePassword=(e)=>{
        setPassword(e.target.value)
    }
    
    const handleSubmit=(e)=>{
        try{
            e.preventDefault();
            console.log(email,password)
            fetch('https://blooming-gorge-74715.herokuapp.com/login',{
                method:'post',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({
                    email,password   
                })
                })
                .then(res=>res.json())
                .then(user=>{
                    console.log('data is',user)
                    if(user.status==='success'){
                    setName(user.userData.name)
                    setID(user.userData.id)
                    setDOB(user.userData.date_of_birth)
                    setLoggedIn(true)
                    setTotalBlogs(user.userData.totalblogs)
                    setBlogs(user.data);
                    setOwnBlogs(user.ownBlogs)
                    history.push('/');
                    }
                    else{
                        console.log(user.status)
                    }
                })
            
        }
        catch(err){
            console.log(err)
        }
    }

    return (
        <Container component='main' maxWidth='xs'>
        <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component='h1' variant='h5'>
                    Login
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                    <Grid item xs={12} >
                        <TextField
                            onChange={(e)=>handleEmail(e)}
                            autoComplete='email'
                            name='email'
                            variant='outlined'
                            required
                            fullWidth
                            id='email'
                            label='Email'
                            autoFocus
                        />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        onChange={(e)=>handlePassword(e)}
                        id="password"
                        label="Password"
                        autoComplete='email'
                        name='email'
                        variant='outlined'
                        required
                        fullWidth
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
                            Sign In
                    </Button>
                </form>
                </div>
        </Container>
    )
}

export default Login
