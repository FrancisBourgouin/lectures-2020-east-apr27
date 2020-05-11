// Using template literals, build a route handler for the route '/team2' that will send a string with your favorite hobbies

// Example route :

server.get("/team2", function (req, res) {
	res.send("Just got a GET request to '/'");
});


// Your route:



server.get("/team2", (req, res) => {
	const hobby = {
		favHobby1: "Video Games",
		favHobby2: "Cooking",
		favHobby3: "YT rabbithole"
	}
	const michael = {
		favoriteHobby: "YT rabbithole"
	}
	res.send(`Team2's favourite hobbies are: ${hobby.favHobby1}, ${hobby.favHobby2}, ${hobby.favHobby3}`);
});







// michael's notes
/*



*/
