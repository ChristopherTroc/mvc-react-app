import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

function HomeDemo(props){
  const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3, 2),
    },
  }));

  const classes = useStyles();

  return(
    <div>
     <Paper className={classes.root}>
       <Typography variant="h5" component="h3">
         Home Demo Front Base Cumplo
       </Typography>
       <Typography component="p">
         This is a base standard project for Cumplo Aps
       </Typography>
     </Paper>
   </div>
  );
}

export default HomeDemo;
