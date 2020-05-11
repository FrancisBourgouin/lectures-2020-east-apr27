const express = require('express')
const server = express()
const PORT = 9001


server.set('view engine', 'ejs')

const generateRandomNumber = (length) => {
	const number = Math.floor(Math.random() * Math.pow(10, length))

	return number
}

const logger = (req, res, next) => {
	console.log("Someone asked for a page")
	console.log(req.url)
	if (Math.random() > 0.5) {
		res.send("You've been randomly selected ")
	} else {
		next()
	}
}

server.use(logger)


server.get('/', (req, res) => res.send('Hello World!'))
server.get('/profile', (req, res) => res.send('Hello World!'))
server.post('/', (req, res) => res.send('Hello World!'))
server.get('/random', (Pollo, Chicken) => Chicken.send("This is the random page"))

server.get('/random/:random_length', (req, res) => {
	// console.log(req.params)
	res.send("Here is the answer to your request " + generateRandomNumber(req.params.random_length))
})

server.get('/greeting/:name', (req, res) => {
	// res.send(`Hi ${req.params.name}`)
	// res.send(`<h1>Hi ${req.params.name}</h1>`)
	// res.json(req.params)
	const templateVars = { name: req.params.name }
	res.render("greeting", templateVars)

})


server.listen(PORT, () => console.log('server ready!'))