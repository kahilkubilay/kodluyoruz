import { useState, useEffect } from 'react'

function AddTask({ addTasks, tasks }) {
    const [todo, setTodo] = useState({task: '', status: '', order: 0})

    useEffect(() => {
        setTodo(todo)
    }, [todo])

    const onChangeTask = (e) => {
        setTodo({ ...todo, task: e.target.value, status: true, order: tasks.length + 1})
    }

    const onSubmit = (e) => {
        e.preventDefault()

        addTasks([...tasks, todo])
    }

    return (
        <form onSubmit={ onSubmit }>
            <input name="todo" placeholder="What needs to be done?" onChange={onChangeTask} />
        </form>
    )
}

export default AddTask
