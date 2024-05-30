 function sayMyName(){

    console.log("p");
        console.log("u");
        console.log("n");
        console.log("e");
        console.log("e");
        console.log("t");
 }
//  sayMyName ()

// function addTwoNumber(number1,number2){
//     console.log(number1+number2);
// }
// addTwoNumber(3,5);


function addTwoNumber(number1,number2){
    let result = number1 + number2;
    // console.log("puneet");
    return result
    return number1+number1
}
const result = addTwoNumber(3,5)
// console.log("Result:",result);

function loginUserMessage(username){
    // if(username===undefined){
    //     console.log("Please enter username");
    // }
    if(!username){
        console.log("Please enter username");
    }
return `${username}, just logged in`
}

console.log(loginUserMessage("puneet"));
// console.log(loginUserMessage());

function calculateCartPrice(val1,val2,...num1){
    return num1;
}
// console.log(calculateCartPrice(200,400,500,2000));

const user={
    username:"puneet",
    price:1999
}

function handleObject(anyObject){
    console.log(`Username ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject(user)
handleObject({
    username:"Nisha",
    price:"free"
})


const myNewArray= [100,200,400,600]

function returnsecondValue(getArray){
    return getArray[1]
}
// console.log(returnsecondValue(myNewArray));
console.log(returnsecondValue([100,200,300,400,500,600,7000]));