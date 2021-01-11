import { Button, FormControl, FormGroup, Input, InputLabel, Typography } from "@material-ui/core"
import { useState } from "react";
import axios from 'axios';

export const Todo = () => {

  const [typeDate, setTypeDate] = useState('text');
  const [task, setTask] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = (e) => {

    e.preventDefault();

    const newTask = {
      taskName: task,
      deadLine: deadline
    }
    
    axios.post(`https://project-todo-app1.herokuapp.com/tasks/save/`, newTask)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error.message))

    setTask('');
    setDeadline('');

    window.location = '/';
  }

  return(
    <>
    <Typography variant='h4'>
      Add Your ToDo :
    </Typography>
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <FormControl>
          <InputLabel htmlFor='taskName'>Task Name :</InputLabel>
          <Input id='taskName' type='text' value={task} onChange={ (e) => setTask(e.target.value)} />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor='deadLine'>Dead Line :</InputLabel>
          <Input id='deadLine' type={typeDate} onFocus={() => setTypeDate('date')} onBlur={() => setTypeDate('text')} value={deadline} onChange={(e) => setDeadline(e.target.value)} />
        </FormControl>
        <Button disabled={!Boolean(task)}  variant='contained' size='small' style={{marginTop:10}} color='primary' type='submit' >Add Task </Button>
      </FormGroup>
    </form>
    </>
  )
}