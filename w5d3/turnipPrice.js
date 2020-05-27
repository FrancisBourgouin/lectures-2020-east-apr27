const { Client } = require('pg')
const client = new Client({
  user: 'francis',
  host: 'localhost',
  database: 'animalcrossing',
  password: 'francis',
  port: 5432,
})

const lowestOrHighest = process.argv[2]

let query;
if (lowestOrHighest === "highest") {
  query = "SELECT * FROM islands ORDER BY turnip_price DESC LIMIT 1"
} else if (lowestOrHighest === "lowest") {
  query = "SELECT * FROM islands ORDER BY turnip_price ASC LIMIT 1"
}
//OR

const anotherQuery = `SELECT * FROM islands ORDER BY turnip_price ${lowestOrHighest === 'highest' ? 'DESC' : 'ASC'} LIMIT 1`

//OR
let modifier = ""
switch (lowestOrHighest) {
  case "highest":
    modifier = "DESC"
  case "lowest":
    modifier = "ASC"
  default:
    modifier = "DESC"
}
const yetAnotherQuery = `SELECT * FROM islands ORDER BY turnip_price ${modifier} LIMIT 1`


client
  .connect()
  .then(conn => {
    client.query(query).then(res => {
      console.log(res.rows[0])
      client.end()
    })

  })
