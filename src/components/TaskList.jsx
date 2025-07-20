import TaskItem from "./TaskItem";

export default function TaskList(props) {

    const deleteTask = (idToDelete) => {
        const newTasks = props.tasks.filter(task => task.id !== idToDelete);
        props.setTasks(newTasks);
    }

    return (
        <div className='border p-5 w-full max-w-[60rem] mt-4 rounded shadow-lg/20 shadow-gray-200 bg-gray-200'>
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
