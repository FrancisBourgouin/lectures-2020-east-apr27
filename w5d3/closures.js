// closures!


// HOF

// const sayHi = name => console.log(name)

// const listThroughNames = (nameList, callback) => {
//   for (const name of nameList) {
//     callback(name)
//   }
// }

// listThroughNames(['Aaron', 'Ben'], sayHi)

// HOF - A function that returns a function

const countdown = (delay) => {
  for (let i = delay; i >= 0; i--) {
    if (i > 0) {
      console.log(`${i}...`)
    } else {
      console.log('Lift off!')
    }
  }
}

// countdown(5)
// countdown(5)
// countdown(10)


const countdownFactory = (time) => {
  return () => {
    for (let i = time; i >= 0; i--) {
      if (i > 0) {
        console.log(`${i}...`)
      } else {
        console.log('Lift off!')
      }
    }
  }
}

// () => {
//   for (let i = 5; i >= 0; i--) {
//     if (i > 0) {
//       console.log(`${i}...`)
//     } else {
//       console.log('Lift off!')
//     }
//   }
// }

console.log(countdownFactory(5))

const countdownFromFive = countdownFactory(5)

countdownFromFive()