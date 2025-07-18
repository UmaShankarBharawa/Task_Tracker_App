import TaskItem from "./TaskItem";

export default function TaskList(props) {

    const deleteTask = (idToDelete) => {
        const newTasks = props.tasks.filter(task => task.id !== idToDelete);
        props.setTasks(newTasks);
    }

    return (
        <div className=''>
            <ul>
                {props.tasks.map((task) => {
                    return (
                        <TaskItem key={task.id} task={task} deleteTask={() => deleteTask(task.id)} />
                    )
                })}
            </ul>
        </div>

    )
}
