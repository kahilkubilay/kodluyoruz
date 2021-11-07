import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons'


function List({ tasks, editTasks }) {
    const [todo, setTodo] = useState({task: '', status: ''});

    useEffect(() => {
        setTodo(todo);
    }, [todo])

    const removeTask = (e) => {
        let removedTaskOrder = parseInt(e.target.attributes[0].value);
        console.log(e);
        console.log(e.target);

        const otherTask = tasks.filter(item => item.order !== removedTaskOrder);

        editTasks(otherTask)
    }

    const setStatus = (e) => {
        console.log(e);

        let updateTaskOrder = parseInt(e.target.attributes[0].value);
        let updateTasks = [];

        tasks.map(item => {
            if(item.order === updateTaskOrder) {
                item.status = !item.status;
            }

            updateTasks.push(item);
        })

        editTasks(updateTasks);
    }

    const listTask = tasks.map((item, index) => {
        let status = item.status;
        let task = item.task;
        let order = item.order;
        
        return <li key={ index }>
                {/* <FontAwesomeIcon icon={faCoffee} />  */}
                {/* <FontAwesomeIcon icon={ faCheckCircle } onClick={ setStatus } order={ item.order } />
                {!status ? <span>{ task }</span> : <del> {task}</del>}
                <button onClick={ removeTask } order={ order }> Removed </button> */}

                {status ? 
                    <div className="done">
                        <button className="check" onClick={ setStatus }>
                            <FontAwesomeIcon icon={ faCheck } className="task-done-circle fontAwesome"/>
                        </button>
                        <del>{ task }</del>
                        {/* <FontAwesomeIcon icon={ faTrash } className="task-remove fontAwesome"/> */}
                    </div> 
                    : 
                    <div className="waiting">
                        <button className="check">
                            {/* <FontAwesomeIcon icon={ faCheck } className="task-done-circle fontAwesome"/> */}
                        </button>

                        <span>{ task }</span>
                       
                    </div> 
                }

                <div className="remove" order={ 'ANAN' } onClick={ removeTask } value='ANAN'>
                    <FontAwesomeIcon icon={ faTrash } className="task-remove fontAwesome" order='ANAN'/>
                </div>

            </li>
    })


    return (
        <div>
            { listTask }
        </div>
    )
}

export default List
