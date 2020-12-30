import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { BlogsContext } from '../../context/Context';
import { Box } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

 const SimpleCard=({id,email,blog})=>{
  const classes = useStyles();
  let history=useHistory();
  const {setCurrentBlog,setCurrentBlogEmail}=useContext(BlogsContext);

  const bull = <span className={classes.bullet}>•</span>;
  // console.log('blog in card',id,email,blog)
  let s='Optical character recognition or optical character reader (OCR) is the electronic or mechanical conversion of images of typed, handwritten or printed text into machine-encoded text, whether from a scanned document, a photo of a document, a scene-photo (for example the text on signs and billboards in a landscape photo) or from subtitle text superimposed on an image (for example: from a television broadcast).[1]'
  
  const learnMore=()=>{
    setCurrentBlog(blog);
    setCurrentBlogEmail(email);
    history.push('/blogdetail')
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          <Box color="secondary.main">{email}</Box>
        </Typography>
        <Typography variant="h5" component="h2">
          <Box color="primary.main">{blog[0]}</Box>
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
         Rating   {blog[4]}/5
        </Typography>
        <Typography variant="body2" component="p">
          <br />
          <Box color="info.main">
         { s.slice(0,200)+' . . . . .'}
          </Box>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={learnMore}>Learn More</Button>
      </CardActions>
    </Card>
  );
}
export default  SimpleCard;