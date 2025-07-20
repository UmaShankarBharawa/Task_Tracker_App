import { useState } from "react";
import TaskList from "./TaskList";

export default function TaskForm() {


    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);

    }

    const addTask = () => {
        if (inputValue.trim().length > 0) {
            const newTask = {
                id: Date.now(),
                title: inputValue.trim()
            }
            setTasks([...tasks, newTask]);
            setInputValue('');
        }
    }

    return (
        <div className=" bg-gray-900 flex flex-col items-center justify-center min-h-screen">
            <div className="bg-gray-300 w-full max-w-[60rem] p-10 rounded shadow-lg/20 shadow-gray-300">
                <h1 className="text-center text-xl text-gray-900">Task Tracker</h1>
                <p className="text-center text-gray-800">Welcome to the Task Tracker App!</p>
                <div className="flex items-center justify-center mt-2">
                    <input
                        type="text"
                        placeholder='Enter a task...'
                        value={inputValue}
                        onChange={handleInputChange}
                        className="border border-gray-400 p-2 rounded mr-2 focus:outline"
                    />
                    <button onClick={addTask} className='border-none cursor-pointer bg-blue-600 transform hover:scale-105 hover:bg-blue-800 transition duration-700 px-3 py-2 text-white text-sm rounded shadow-lg'>Add Task</button>
                </div>
            </div>
            <TaskList tasks={tasks} setTasks={setTasks} />
        </div>
    )
}
