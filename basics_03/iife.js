//Immediately invoked functtion

(function chai(){
    console.log(`DB connected`);
})();

((name)=>{
    console.log(`DB connected two ${name}`);
})("puneet")