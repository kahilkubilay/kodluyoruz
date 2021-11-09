import { useState, useEffect } from 'react';

function List({ tasks, editTasks }) {
    const [todo, setTodo] = useState({task: '', status: ''});

    useEffect(() => {
        setTodo(todo);
    }, [todo])

    const removeTask = (e) => {
        let removedTaskOrder = parseInt(e.target.attributes.order.value);

        const otherTask = tasks.filter(item => item.order !== removedTaskOrder);

        editTasks(otherTask)
    }

    const setStatus = (e) => {
        let updateTaskOrder = parseInt(e.target.value);
        let updateTasks = [];

        tasks.forEach(item => {
            if(item.order === updateTaskOrder) {
                item.status = !item.status;
            }

            updateTasks.push(item)
        })

        editTasks(updateTasks)
    }

    const listTask = tasks.map((item, index) => {
        let status = item.status;
        let task = item.task;
        let order = item.order;
        
        return <li key={ index }>
                <div>
                    <input name='isDone' type='checkbox' defaultChecked={status ? 'checked': ''} value={ order } 
                        onClick={ setStatus }/>
                    <span>{ status ? task : <del>{ task }</del> }</span>
                </div> 
                <div className='task-remove' order={ order } onClick={ removeTask }></div>
            </li>
    })


    return (
        <div>
            { listTask }
        </div>
    )
}

export default List
