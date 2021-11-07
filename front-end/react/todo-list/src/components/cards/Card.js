import { useState } from 'react';
import List from './List';
import AddTask from './AddTask';
import './style.css';

function Card() {
    const [todos, setTodos] = useState([
        {
            task: 'clear the table',
            status: true,
            order: 1
        }, {
            task: 'love the cats',
            status: false,
            order: 2,
        }, {
            task: 'do it homeworks',
            status: true,
            order: 3,
        }, {
            task: 'listen to music',
            status: false,
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
