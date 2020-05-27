const express = require("express");
const bodyParser = require("body-parser");
const { Client } = require('pg')
require("dotenv").config();
const generateHelpers = require('./helpers')

const db = new Client({
  user: process.env.DBUSER,
  host: process.env.DBHOST,
  database: process.env.DBNAME,
  password: process.env.DBPASSWORD,
  port: process.env.DBPORT,
})

// const { fetchAllIslands, fetchAllResidents, fetchSpecificIsland } = require('./helpers')(db)
const { fetchAllIslands, fetchAllResidents, fetchSpecificIsland } = generateHelpers(db)

const port = process.env.PORT || 3000;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.get("/", (req, res) => {
  res.send("Hello!");
});

app.get('/islands', (req, res) => {
  fetchAllIslands()
    .then(dbRes => res.json(dbRes.rows))
})

app.get('/islands/:island_name', (req, res) => {
  fetchSpecificIsland(req.params.island_name)
    .then(dbRes => res.json(dbRes.rows))
})


app.get('/residents', (req, res) => {
  fetchAllResidents()
    .then(dbRes => res.json(dbRes.rows))
})

db.connect(conn => {
  app.listen(port, () => {
    console.log('server is ready')
  })

})