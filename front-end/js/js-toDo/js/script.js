let task = '';
let taskListSelector = document.querySelector('#list');
const TASKS = JSON.parse(window.localStorage.getItem('tasks')) || [];

// task list type::: 
//     [{
//         id: '1',
//         desc: 'test test',
//         time: '10.10.2021'
//         status: true / false
//     },
//     {
//         id: '2',
//         desc: 'test test 2222',
//         time: '11.11.2021',
//         status: true / false
//     },
// ];

removeToast = () => {
    document.querySelector('#liveToast.error').classList.remove('show');
    document.querySelector('#liveToast.success').classList.remove('show');
}

setList = (getTasks = TASKS) => {
    document.querySelectorAll('#list li').forEach((listItem, index) => {
        index !== 0 && listItem.remove();
    });

    let taskList = getTasks.map(taskDetail => {
        let listSelector = document.createElement('li');
        listSelector.innerHTML = `<span class="task-desc">${taskDetail.desc}</span> 
            <span class="task-time">${taskDetail.time}
            </span> <span class="close">&times;</span>`
        listSelector.setAttribute('task-id', `${taskDetail.id}`);
        listSelector.classList.add('d-flex', 'justify-content-between')

        if (taskDetail.status || false) {
            listSelector.classList.add('checked');
        }

        return listSelector;
    });

    window.localStorage.setItem('tasks', JSON.stringify(getTasks));

    taskList.forEach(task => {
        taskListSelector.appendChild(task);
    });

    setSelector();
    setStatus();
}

setSelector = () => {
    document.querySelectorAll('li span.close').forEach((event, index) => {
        document.querySelectorAll('li span.close')[index].addEventListener('click', event => {
            let taskNumber = event.target.parentElement.getAttribute('task-id') || '';
            let allTasks = JSON.parse(window.localStorage.getItem('tasks')) || [];
            let taskListWithRemoveData = allTasks.filter(taskDetail => taskDetail.id !== taskNumber);

            setList(taskListWithRemoveData);
        });
    })
}

setStatus = () => {
    document.querySelectorAll('#list li').forEach((event, index) => {
        document.querySelectorAll('#list li')[index].addEventListener('click', event => {
            let taskNumber = event.target.getAttribute('task-id') || '';

            let allTasks = JSON.parse(window.localStorage.getItem('tasks')) || [];
            allTasks.forEach((taskDetail, index) => {
                if (taskDetail.id === taskNumber) {
                    let getStatus = allTasks[index].status;
                    allTasks[index].status = !getStatus;

                    setList(allTasks);
                }
            });
        });
    });
}

setList();
setStatus();

document.querySelector('#liveToastBtn').addEventListener('click', event => {
    taskDesc = document.querySelector('#task').value || '';
    let getList = JSON.parse(window.localStorage.getItem('tasks')) || [];
    let time = new Date();

    if (taskDesc !== '') {
        getList.push({
            id: (getList.length + 1).toString(),
            desc: taskDesc,
            time: time.getDate() + '.' + time.getDay() + '.' + time.getFullYear(),
            status: false
        });

        setList(getList);
        document.querySelector('#task').value = '';
        document.querySelector('#liveToast.success').classList.add('show');
    } else {
        document.querySelector('#liveToast.error').classList.add('show');
    }

    setTimeout(() => {
        removeToast();
    }, 4000);
});

(document.querySelector('#liveToast .close')).addEventListener('click', event => {
    removeToast();
})