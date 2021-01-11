import Tasks from '../models/tasks.js'


export const home = async(req, res) => {
    try {
        const allTasks = await Tasks.find();
        res.status(200).json(allTasks);
    } catch (error) {
        res.status(404).json({message:error.message});
    }
}


export const saveTask = (req, res) => {

    const newTask = new Tasks({
        taskName: req.body.taskName,
        deadLine: req.body.deadLine
    });

    try {
        newTask.save();   
        res.status(201).json(newTask);
    } catch (error) {
        res.status(409).json({message:error.message});
    }

}


export const deleteTask = (req, res) => {
    try {
        Tasks.deleteOne({_id:req.params.id})
            .then(() => console.log('Data deleted.'))
            .catch((error) => console.log(error));
        res.status(201).json({message:'Task Completed.'});
    } catch (error) {
        res.status(409).json({message:error.message});
    }
}