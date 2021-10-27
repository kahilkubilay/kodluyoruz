import axios from "axios"

const getData = (id) => {
    return new Promise(async(resolve, reject) => {
        if(typeof id !== 'string') {
            reject('please enter a string value');
        } else if(id === '') {
            reject('please enter a value');
        }

        const { data } = await axios(`https://jsonplaceholder.typicode.com/users/${id}`);
        resolve(data);
    })
}

export {
    getData
}