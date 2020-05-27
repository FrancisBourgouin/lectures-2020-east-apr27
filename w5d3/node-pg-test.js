const { Client } = require('pg')
const client = new Client({
  user: 'francis',
  host: 'localhost',
  database: 'animalcrossing',
  password: 'francis',
  port: 5432,
})


client.connect().then(res => {
  client.query('SELECT * FROM islands').then(res => {
    console.log(res.rows, res.rowCount) // Hello world!
    client.end()
  })
})
