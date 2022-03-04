const http = require('http');

const todos = [
    {id: 1, text: "Todo one"},
    {id: 2, text: "Todo two"},
    {id: 3, text: "Todo three"},
]

const http = http.createServer((req, res) => {
    const {method, url} = req;
    let body = []
    req.on('data', chunk => {
        body.push(chunk)
    }).on('end', () => {
        body = JSON.parse(Buffer.concat(body).toString())
        let status = 404
        const response = {
            success: false,
            data: null,
            error: null
        }
        if (method === 'GET' && url === '/todos') {
            status = 200
            response.success = true
            response.data = todos
        } else if (method === 'POST' && url === '/todos') {
            const {id, text} = body

            if (!id || !text) {
                status = 400
                response.error = "please add id and text"
            } else {

                todos.push({id, text})
                status = 201

                response.success = true
                response.data = todos
            }

        }

        res.writeHead(status, {
            "Content-Type": "application/json"
        })

        res.end(JSON.stringify(response));
    });

});

const PORT = 3009;
//const PORT = 8080;


//server.listen(PORT, "node-api.ltd", () => {
http.listen(PORT, () => {

    console.log(`Server listening on ${PORT}`)
})

