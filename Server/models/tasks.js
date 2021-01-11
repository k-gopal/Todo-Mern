import mongoose from 'mongoose';


const tasksSchema = mongoose.Schema({
    taskName : {
        type: String,
        required: true
    },
    deadLine : {
        type: Date,
        default: Date.now
    }
},
{
    timestamps: true
});


const Tasks = mongoose.model('Tasks', tasksSchema);

export default Tasks;