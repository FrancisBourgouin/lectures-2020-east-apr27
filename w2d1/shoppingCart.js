// Takes in a list of items : {name:"Milk", price:"3.99"} {name:"Chicken", price:"9.99"}
// {} vs [] (objects (think objectify) dependent properties of an item), arrays (list of independent items)
// Give us the total, subtotal, tax amount, list of product names


const expectedOutput = {
  total: 00,
  subtotal: 00,
  taxAmount: 00,
  listOfNames: "The list is : ...."
}

const cart = [{ name: "Milk", price: 3.99 }, { name: "Chicken", price: 9.99 }]

const shoppingCart = (cart) => {
  const output = {
    total: 0,
    subtotal: 0,
    taxAmount: 0,
    listOfNames: "The list is : "
  }

  if (Array.isArray(cart)) {
    if (!cart.length) {
      return "Yo it's empty" // THE END.
    }
    for (const item of cart) {
      if (typeof (item.name) === 'string' && item.name.length && item.price >= 0) {
        //Add item to proper fields
        const lastItem = cart[cart.length - 1]
        output.subtotal += item.price
        output.listOfNames += item.name
        if (item.name !== lastItem.name) {
          output.listOfNames += " "
        }
      } else {
        throw new Error('Invalid Cart')
      }
    }
    output.taxAmount = Math.round((output.subtotal * 0.14975) * 100) / 100
    output.total = output.subtotal + output.taxAmount

    return output

  } else {
    return "Yo it's empty WARN NO ARRAY"
  }
}

module.exports = shoppingCart