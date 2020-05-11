const http = require('http')

const PORT = 9001

const server = http.createServer((request, response) => {
	console.log(request.url, request.method)
	// /home
	// /profile
	// /random
	let output = ""
	switch (request.url) {
		case "/home":
			switch (request.method) {
				case "GET":
					output = "GET - The is no such place as 127.0.0.1 (or ::1)"
					break;
				case "POST":
					output = "POST - The is no such place as 127.0.0.1 (or ::1)"
					break;
				case "PUT":
					break;
				case "DELETE":
					break;
			}

			break;
		case "/profile":
			output = "You've reach profile"
			break;
		case "/random":
			const number = Math.random() * 100
			output = "You've reached random" + number
			break;
		default:
			output = "Don't forget to tip your server !"
	}
	response.end(output)
})


server.listen(PORT, () => console.log('server ready!'))