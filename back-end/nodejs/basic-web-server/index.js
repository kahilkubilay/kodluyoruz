import { createServer } from "http";

const port = 5000;
const pages = ['/', '/about', '/contact']

const server = createServer((req, res) => {
    const url = req.url;

    let urlState = pages.find(page => page === url);

    if(urlState !== undefined) {
        res.writeHead(
            200,
            {'Content-Type': 'text/html'}
        )
        res.write(`<h2>Welcome to the ${urlState} page</h2>`)
    } else {
        res.writeHead(
            404,
            {'Content-Type': 'text/html'}
        )
        res.write(`${urlState} page is not available.`)
    }

    res.end()
})

server.listen(port, () => {
    console.log(`server started on the ${port} number`)
})

