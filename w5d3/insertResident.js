// 

const { Client } = require('pg')
const client = new Client({
  user: 'francis',
  host: 'localhost',
  database: 'animalcrossing',
  password: 'francis',
  port: 5432,
})

const name = process.argv[2]
const dateOfBirth = process.argv[3]
const hasVehicle = process.argv[4]
const islandId = process.argv[5]


const query = `INSERT INTO residents (name, birthday, has_vehicle, island_id) VALUES ($1,$2,$3,$4) RETURNING *;`
const values = [name, dateOfBirth, hasVehicle, islandId]

const evilName = `');;;;DROP TABLE`


client
  .connect()
  .then(conn => {
    client.query(query, values).then(res => {
      console.log(res.rows[0])
      client.end()
    })

  })
