import { Button, Card, CardActionArea, CardActions, CardContent, Grid, Typography } from "@material-ui/core";
import axios from "axios";

export const Tasks = (props) => {
    const tasks = props.tasks;
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    const deleteTask = (id) => {
        axios.delete(`https://project-todo-app1.herokuapp.com/tasks/delete/${id}`)
            .then((res) => {
                alert(res.message);
                window.location = '/';
            })
            .catch((error) => console.log(error.message))
        
    }

    return(
        <>
        
            
                <Grid container spacing={3}>
                {tasks.map((task) => {
                    return(
                            <Grid item component={Card} xs={12} key={task._id} style={{margin:10, backgroundColor:'#f2f2f2'}}>                             
                                    <CardActionArea>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {task.taskName}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                {new Date(task.deadLine).toLocaleDateString(undefined, options)}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button variant='contained' size='small' style={{float:'right'}} onClick={() => deleteTask(task._id)}>Completed</Button>
                                    </CardActions>
                                </Grid>
                    )            
        })}
        </Grid>
        </>
    )
}