import { useState } from 'react';
import List from './List';
import AddTask from './AddTask';
import './style.css';

function Card() {
    const [todos, setTodos] = useState([
        {
            task: 'clear the table',
            status: false,
            order: 1
        }, {
            task: 'love the cats',
            status: true,
            order: 2,
        }, {
            task: 'do it homeworks',
            status: false,
            order: 3,
        }, {
            task: 'listen to music',
            status: true,
            order: 4
        }
    ]);

    return (
      <div id='card' className='card'>
        <AddTask tasks={ todos } addTasks={ setTodos }/>
        <List tasks={ todos } editTasks={ setTodos } />
      </div>
    )
}

export default Card
