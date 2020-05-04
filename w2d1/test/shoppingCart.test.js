// [] => "Yo it's empty"
// null => "Yo it's empty (WARN not an Array)"
// [{name:"aaa"}, {price:0}] => "Invalid cart"
// [bob,bob] => "Invalid cart items"
// [{ name: "Milk", price: "3.99" }, { name: "Chicken", price: "9.99" }] => show the output
// const expectedOutput = {
//   total: 00,
//   subtotal: 00,
//   taxAmount: 00,
//   listOfNames: "The list is : ...."
// }

const shoppingCart = require('../shoppingCart')
const chai = require('chai')

const should = chai.should()

describe("Testing that shoppingCart function validate it's data before executing", () => {
  it("is returning 'Yo it's empty' if the argument is an empty array", () => {
    const output = shoppingCart([])

    output.should.be.a('string')
    output.should.equal("Yo it's empty")
  })

  it("is returning 'Yo it's empty WARN NO ARRAY' if the argument is an empty array", () => {
    const output = shoppingCart()
    const output2 = shoppingCart(null)
    const desiredOutput = "Yo it's empty WARN NO ARRAY"

    output.should.be.a('string')
    output2.should.be.a('string')
    output.should.equal(desiredOutput)
    output2.should.equal(desiredOutput)
  })

  it("is returning 'Invalid Cart' if the objects given in the array are missing a property", () => {
    const invalidInput1 = [{ name: "aaa" }]
    const invalidInput2 = [{ price: 0 }]

    // const output1 = shoppingCart(invalidInput1)
    // const output2 = shoppingCart(invalidInput2)

    const error = new Error('Invalid Cart')

    // output1.should.equal(error)
    should.Throw(() => shoppingCart(invalidInput1), /Invalid Cart/)

    // const fakeThrow = (callback, expectedAnswer) => {
    //   try{
    //     callback()
    //   } catch(e){
    //     e === expectedAnswer
    //   }
    // }

  })
  it("should return an object with total, subtotal, taxAmount, list if given a valid cart array", () => {
    const input = [{ name: "Milk", price: 3.99 }, { name: "Chicken", price: 9.99 }]
    const expectedOutput = {
      listOfNames: "The list is : Milk Chicken",
      subtotal: 13.98,
      total: 16.07,
      taxAmount: 2.09,
    }
    const output = shoppingCart(input)

    output.total.should.equal(16.07)

    output.should.deep.equal(expectedOutput)
  })
})
