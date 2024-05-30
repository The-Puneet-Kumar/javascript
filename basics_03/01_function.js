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