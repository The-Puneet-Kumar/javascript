//Singleton
//constructor se singleton bante hai

//Object literal


const mySym = Symbol("key1");



const JsUser ={
    name:"Puneet",
    "full Name" :"puneet kumar",
    age:24,
    [mySym] : "myKey1",
    location:"Jaaipur",
    email:"puneet15200@gmail.com",
    isLoggedIn : "false",
    lastLoggedInDays: ["Monday","Satuarday"]

}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full Name"]);
// console.log(JsUser[mySym]);

JsUser.email= "puneet@chatgpt.com";
// Object.freeze(JsUser);
JsUser.email="puneet@micosoft.com"
// console.log(JsUser);


JsUser.greetings = function(){
    console.log("Hello js User");
}


JsUser.greetingsTwo = function(){
    console.log(`Hello js User,${this.name}`);
}
console.log(JsUser.greetings());
console.log(JsUser.greetingsTwo());