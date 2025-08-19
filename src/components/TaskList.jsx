import TaskItem from "./TaskItem";

export default function TaskList(props) {


    const handleCheckboxChange = (idToToggle) => {
        props.setTasks(prevTasks => 
            prevTasks.map(task => {
                return task.id === idToToggle ? { ...task, isCompleted: !task.isCompleted } : task
            })
        )
    }

    const deleteTask = (idToDelete) => {
        const newTasks = props.tasks.filter(task => task.id !== idToDelete);
        props.setTasks(newTasks);
    }

    return (
        <div className='border p-5 w-full max-w-[60rem] mt-4 rounded shadow-lg/20 shadow-gray-200 bg-gray-200'>
            <ul>
                {props.tasks.map((task) => {
                    return (
                        <TaskItem key={task.id} task={task} deleteTask={() => deleteTask(task.id)} onToggle={()=> handleCheckboxChange(task.id)} />
                    )
                })}
            </ul>
        </div>

    )
}
