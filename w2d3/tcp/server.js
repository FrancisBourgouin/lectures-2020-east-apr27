const net = require("net");

const server = net.createServer()
const clientList = []

const broadcast = (message) => {
  for (const client of clientList) {
    client.write(`${message} \n `)
  }
}

const manageNewConnection = connection => {
  console.log("Someone connected")
  connection.setEncoding('UTF-8')
  connection.id = clientList.length + 1
  clientList.push(connection)
  connection.write("Hello Stranger ! \n")
  broadcast("Someone new joined in")

}

const relayMessage = (message, currentConnection) => {
  console.log(data)
  for (const client of clientList) {
    if (client.id !== currentConnection.id) {
      client.write(`${message} \n `)
    }
  }
}



server.on("connection", (currentConnection) => {

  manageNewConnection(currentConnection)

  currentConnection.on('data', data => {
    relayMessage(data, currentConnection)
  })
})


server.listen(8000, () => {
  console.log("Server is listening on port 8000")
})