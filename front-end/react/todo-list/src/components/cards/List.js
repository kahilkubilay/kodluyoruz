import { useState, useEffect } from 'react';

function List({ tasks, editTasks }) {
    const [todo, setTodo] = useState({task: '', status: ''});

    useEffect(() => {
        setTodo(todo);
    }, [todo])

    const removeTask = (e) => {
        let removedTaskOrder = parseInt(e.target.attributes[0].value);

        const otherTask = tasks.filter(item => item.order !== removedTaskOrder);

        editTasks(otherTask);
    }

    const listTask = tasks.map((item, index) => {
        let status = item.status;
        let task = item.task;
        
        return <li key={ index }>
                {!status ? <span>{ task }</span> : <del> {task}</del>}
                <button onClick={ removeTask } order={ item.order }>Removed</button>
            </li>
    })


    return (
        <div>
            { listTask }
        </div>
    )
}

export default List
