let  date= new Date();

// console.log(date);  
// console.log(date.toDateString());
// console.log(date.toLocaleDateString);
// console.log(date.getDay);
// console.log(typeof date);

// let myCreatedDate = new Date(2024, 0, 26);
// console.log(myCreatedDate);
// let myCreatedDate = new Date(2024, 0, 26,5,3);
let myCreatedDate = new Date("10-05-2024");
// console.log(myCreatedDate.toLocaleDateString());

let newDate= new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long"
})
