// Using template literals, build a route handler for the route '/team4' that will send a string with your favorite songs

// Example route :

server.get("/team4", function (req, res) {
	res.send("Just got a GET request to '/'");
});

// Your route:
server.get("/team4", function (req, res) {
	// const favouriteSongs = "Macarena, J'aime ta grand-mère"
	const favouriteSongs = ["Macarena", "J'aime ta grand-mère"]
	// const templateVars = {team4: favouriteSongs}
	res.send(favouriteSongs)
})
