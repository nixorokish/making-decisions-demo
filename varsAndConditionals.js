/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let jonAttack = 25
let jamieAttack = 35

if (jonAttack > jamieAttack) {
    console.log('Jon Snow has a higher attack than Jamie')
} else if (jamieAttack > jonAttack){
    console.log('Jamie Lannister has a higher attack than Jon Snow \n')
} else {
    console.log('the match is equal')
}
let jonHealth = 100
let jonDefense = 0

console.log(`Jon's health is ${jonHealth}`)

if (jonHealth <= jamieAttack) {
    console.log(`Jon Snow has been slain.`)
} else {
    // jonHealth = jonHealth - jamieAttack
    jonHealth -= jamieAttack
    console.log(`Jamie attacks Jon with ${jamieAttack} damage and Jon's health is now ${jonHealth} XP \n`)
}

jonDefense += 25
console.log('Jon grabbed a shield')
console.log(`Jon's XP is now ${jonHealth + jonDefense} \n`)
// jon grabs a shield

if(jonHealth <= jamieAttack - jonDefense) {
    console.log('Jon Snow has been slain')
} else {
    console.log(`Jamie attacks Jon with ${jamieAttack} damage`)
    jonHealth -= (jamieAttack - jonDefense)
    // these parentheses are important because otherwise it would jonHealth - jamieAttack - jonDefense
    console.log(`Jon's health is now ${jonHealth} XP \n`)
}

if ((jonHealth + 50) >= 100) {
    jonHealth = 100
} else {
    jonHealth += 50
} console.log(`Somebody threw Jon Snow a health potion and his health is now ${jonHealth} XP \n`)

let coinIsHeads = false

// if (coinIsHeads === true) {
//     console.log('The fight continues')
// } else {
//     console.log('Jon is allowed to run away.')
// }

// if(coinIsHeads !== false) {
//     console.log('The fight continues')
// } else {
//     console.log('Jon is allowed to run away.')
// }

// want to implement a for loop to have Jamie attack Jon

// for (let i = 0; i < 12; i++) {
//     if (jonHealth <= 0) {
//         console.log(`Jon has been slain`)
//     } else {
//         jonHealth -= (jamieAttack - jonDefense)
//         console.log(`Jamie attacks with ${jamieAttack} damage but Jon has a ${jonDefense} XP shield`)
//         console.log(`Attack does ${jamieAttack - jonDefense} damage`)
//         console.log(`Jon's health is now ${jonHealth} \n`)
//     }
// }

while(jonHealth > 0) {
    jonHealth -= (jamieAttack - jonDefense) // condition that we're evaluating
    console.log(`Jaime attacks Jon with ${jamieAttack} while Jon has a ${jonDefense} XP shield and Jon's health is now ${jonHealth} XP`)
    if(jonHealth <= 0){
        console.log(`Jon has been slain`)
    }
}