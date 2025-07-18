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
        <>
            <div>
                <h1>Task Tracker</h1>
                <p>Welcome to the Task Tracker App!</p>
                <div>
                    <input
                        type="text"
                        placeholder='Enter a task...'
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                    <button onClick={addTask} className=''>Add Task</button>
                </div>
            </div>
            <TaskList tasks={tasks} setTasks={setTasks} />
        </>
    )
}
