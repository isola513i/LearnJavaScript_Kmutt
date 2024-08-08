//function declaration
function calculator(op,num1,num2){
    return op(num1,num2);
}
//function expression (arrow function)
const sum=(num1,num2)=> {
    return num1+num2
}

const substract=(num1,num2){
    return num1-num2
}

const randomNumber = (){
    const randNum=Math.floor(Math.random()*10)+1
    return randNum

}