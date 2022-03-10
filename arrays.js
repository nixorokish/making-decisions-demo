/*
    In this file, we'll be continuing our story
    with Jon being allowed to flee his fight with Jamie.
*/

// let backpack = []

// backpack.push('shield')
// backpack.push('sword')
// backpack.push('food')
// // backpack.push('coat', 'water')

// // remove first item
// // backpack.shift()

// console.log(backpack)

// // remove sword
// backpack.splice(1, 1)
// // console.log(backpack)

// console.log(backpack)

// let furCoat = `fur coat`

// backpack.push(furCoat)
// console.log(backpack, ` // put fur coat in`)

// backpack.pop()
// console.log(backpack, ` // we popped`)

// console.log(backpack.length, ` // how many things in backpack?`)
// backpack.push('flint', 'blanket', 'knife', 'toothbrush')

// console.log(backpack, ` // backpack`)

// let backpack2 = backpack.splice(2, 3)
// console.log(backpack, ` // backpack`)
// console.log(backpack2, ` // backpack2`)

// console.log(backpack2[0], ` // first item in backpack2 \n`)

// // for (let i = 0; i < backpack2.length; i++) {
// //     console.log(backpack2[i])
// // }

// // for (let i = 0; i < 3; i++) {
// //     console.log(backpack2[i])
// // }

// backpack.pop()

// // for (let i = 0; i < 3; i++) {
// //     console.log(backpack[i])
// // }

// if(backpack.length >= 3) {
//     for(let i = 0; i < 3; i++){
//         console.log(backpack[i])
//     }
// } else {
//     for(let i = 0; i < backpack.length; i++) {
//         console.log(backpack[i])
//     }
// }

let guessMe = 54

while (guessMe < 100) {
    console.log('-------------------')
    if (guessMe % 4 == 0 || guessMe % 5 == 0) {
        guessMe += 25
        console.log(`added 25`, guessMe)
    } else if (guessMe % 3 == 0) {
        guessMe -= 27
        console.log(`subtracted 27`, guessMe)
    } else {
        guessMe += 3
        console.log(`added 3`, guessMe)
    }
    guessMe += 22
    console.log(`added 22`, guessMe)
}

console.log(guessMe)