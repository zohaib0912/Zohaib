const firstName =  prompt("Enter your first name: ")
const lastName =  prompt("Enter your last name: ")
function greeting(firstName, lastName){
    const name = `${firstName} ${lastName}`
    console.log(`Greetings! ${name}. Thanks for coming.`)
}
greeting(firstName, lastName)