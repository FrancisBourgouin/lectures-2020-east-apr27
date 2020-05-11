const http = require('http')

const PORT = 9001

const server = http.createServer((request, response) => {
	console.log(request)
	response.end("Don't forget to tip your server !")
})


server.listen(PORT, () => console.log('server ready!'))