let posts = [
    {title: 'post1', text: "post1 some text", author: "author1"},
    {title: 'post2', text: "post2 some text", author: "author2"},
    {title: 'post3', text: "post3 some text", author: "author3"},
    {title: 'post4', text: "post4 some text", author: "author4"}
]

let  listPost = () => posts.map(post => {
    console.log(post);
})

const addingPost = (data) => {
    posts.push(data);
}

const addPost = new Promise((resolve, reject) => {
    let someData = {title: 'post5', text: "post5 some text", author: "author5"}

    if(someData !== undefined) {
        addingPost(someData);
        resolve(someData)
    } else {
        reject('failed');
    }
})

const showAddedPost = async () => {
    addPost
        .then(showData => {
            console.log('added::')
            console.log(showData);
        })
        .catch(err => {
            console.log('check added data, please..');
            console.log(`check added data, please:: ${err}`);
        })
    
    listPost();
}

showAddedPost();