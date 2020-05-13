const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser")
const { loginUser, registerUser } = require("./helpers")
const app = express();


const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.set("view engine", "ejs");

// User should have name, email and password
const users = [
  { name: "Pequeño Pollo de la Pampa", email: "pockpock@chicken.com", password: "cluck" }
  // {name:"", email:"", password:""},
]


app.get("/", (req, res) => {
  const templateVars = { name: req.cookies.name }
  res.render("home", templateVars)
});

app.get("/login", (req, res) => {
  res.render("login")
})

app.post("/login", (req, res) => {
  const loginResult = loginUser(users, req.body)
  switch (loginResult) {
    case "Bad email":
      res.send("Email doesn't exist")
      break;
    case "Bad password":
      res.send("Password doesn't match email")
      break
    default:
      res.cookie('name', loginResult.name)
      res.redirect('/')
  }
})

app.get("/register", (req, res) => {
  res.render("register")
})

app.post("/register", (req, res) => {
  if (registerUser(users, req.body)) {
    res.cookie('name', req.body.name)
    res.redirect('/')
  } else {
    res.send("Judgment time.")
  }
})

app.post("/logout", (req, res) => {
  res.clearCookie('name')
  res.redirect('/')
})


app.listen(port, () => console.log(`Express server running on port ${port}`));
