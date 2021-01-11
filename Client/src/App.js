import React, { useEffect, useState } from 'react';
import {Time} from './components/Time'
import { Tasks } from './components/Tasks'
import {Todo} from './components/Todo'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Card, CardContent, Container, Grid, Toolbar, Typography } from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('https://project-todo-app1.herokuapp.com/tasks/view/')
    .then((res) => setTasks(res.data))
    .catch((error) => console.log(error));
  },[])

  

  const classes = useStyles();

  return (<>
    <Container maxWidth="lg">
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h5' className={classes.title}>
            ToDo App
          </Typography>
            <Time />
        </Toolbar>
      </AppBar>
      <Grid container spacing={2} style={{marginTop:10}}>
        <Grid item xs={7}>
        <Card>
          <CardContent>
              <Tasks tasks={ tasks }/>
          </CardContent>
        </Card>
        </Grid>
        <Grid item xs={5}>
        <Card>
          <CardContent>
              <Todo />
          </CardContent>
        </Card>
        </Grid>
      </Grid>
    </Container>

  </>
    
  );
}

export default App;
