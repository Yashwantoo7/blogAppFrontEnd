import React,{useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import { BlogsContext } from '../../context/Context';
import { useHistory } from 'react-router-dom';
import socketIOClient from 'socket.io-client';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function Rating() {
  const classes = useStyles();
  const [rating, setRating] = React.useState('');
  const [open, setOpen] = React.useState(false);

  let history=useHistory();

  const{id,currentBlogEmail,currentBlog,setCurrentBlog}=useContext(BlogsContext);
// console.log(currentBlog,currentBlogEmail)
  const handleChange = (event) => {
    setRating(event.target.value);
    console.log(rating)
  };
 console.log(rating)
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleSubmit=async (e)=>{
    e.preventDefault()
    try{console.log(currentBlog)
        fetch(`https://blooming-gorge-74715.herokuapp.com/${id}/rating`,{
        method:'post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
            email:currentBlogEmail,
            idx:currentBlog[2],
            amount:currentBlog[3],
            rated:currentBlog[4],
            rating:rating
        })
        }).then(res=>res.json())
        .then(res=>{console.log(res)
            const socket=socketIOClient('https://blooming-gorge-74715.herokuapp.com');
            socket.emit('blog_rated',{data:res.data});
            history.replace('/')
        })
    }
    catch(err){
        console.log(err)
    }
  }

  return (
    <div>
    <Grid>
    <Button className={classes.button} onClick={handleOpen}>
        Rating
      </Button>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Rating</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={rating}
          onChange={handleChange}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>
      </FormControl>
      <Button style={{marginTop:20}} type='submit' onClick={(e)=>handleSubmit(e)}>Rate</Button>
    </Grid>
    </div>
  );
}
