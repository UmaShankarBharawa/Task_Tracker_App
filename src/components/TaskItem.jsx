
export default function TaskItem(props) {

    return (
        <div className='flex items-center shadow-[0_3px_10px_0_rgba(0,_0,_0,_0.2)] bg-gray-100 rounded-sm py-2 px-5 my-5 justify-between'>
            <li
                className='wrap-anywhere mr-2'
            >
                <input
                    type="checkbox"
                    checked={props.task.isCompleted}
                    onChange={props.onToggle}
                />
                {props.task.title}
            </li>
            <button onClick={props.deleteTask} className="border-none cursor-pointer hover:bg-red-700 bg-red-600 px-3 py-1 text-white rounded text-sm shadow-lg transform hover:scale-105 transition duration-700">Delete</button>
        </div>
    )
}
