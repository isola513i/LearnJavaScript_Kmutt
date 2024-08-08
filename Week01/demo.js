//function declaration
function calculator(op, num1, num2){
    console.log(typeof op)
    console.log(typeof num1)
    console.log(typeof num2)
    return op(num1, num2)
}
//function expression (arrow function)
const sum=(num1, num2)=>{
    return num1+num2
}
const subtract=(num1, num2)=>{
    return num1-num2
}
const randomNumber = ()=>{
    const randNum=Math.floor(Math.random()*10)+1 //1-10
    return randNum
}

const num1=randomNumber()
const num2=randomNumber()
//op is a higher order function
console.log(calculator(sum, num1,num2))