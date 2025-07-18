
export default function TaskItem(props) {
    return (
            <div className='flex items-center'>
                <li className=''>
                    {props.task.title}
                </li>
                <button onClick={props.deleteTask}>Delete Task</button>
            </div>
    )
}
