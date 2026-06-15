//Practice code of let, var, const and Hoisting

// //1. output? var 
// console.log(a);
// var a = 10;    //undefined 
// kyunki var hoist hota hai aur initial value undefined hoti hai

// //2. output? let
// console.log(b);
// let b = 20;   //ReferenceError 
// let hoist to hota hai lekin inilize nahi hota hai
//Temporal Dead Zone me ye rahta hai

// //3. output? const 
// console.log(c);
// const c = 30;   //ReferenceError 
// const TDZ(means step by step follow karta hai) me rahta hai

//4. output? 

// var a = 20;
// if(true){
//     var a = 30;
// }
// console.log(a);  //30 
// because var block scope follow nahi karta hai

// 5. output?

// let b = 40;

// if(true){
//     let b = 60;
// }
// console.log(b);  //let block scope hota hai


// //6. output?

// const pie = 3.14;

// pi = 3.14159;

// console.log(pie);   //const ki value reassign nahi kar sakte

//7. output?

// var a = 5;

// function test(){
//     console.log(a);
//     var a = 6;
    
// }
// test();   //undefined 
// // kyunki Local a hoist ho gaya

// //8. output?

// let a = 5;

// function test(){
//     console.log(a);
    
// }
// test();    //5  
// kyunki JavaScript outer scope me variable dhundhta hai.


// //9. Error ya output?

// const user = {
//     name: "Rahul"
// };

// user.name = "Vivek";
// console.log(user.name);   //Vivek  
// kyunki const object ko reassign nahi kar sakte, lekin object ke andar ki properties change kar sakte ho.


// //10. output?

// for (var i = 0; i < 3; i++){
//     setTimeout(() =>{
//         console.log(i);
        
//     },1000);
// }    //3 3 3 
// //var function scoped hai.
// //Loop khatam hone ke baad i = 3 ho jata hai.


//11. output?

for (let i = 0; i < 3; i++){
    setTimeout(()=>{
        console.log(i);
        
    },1000);
}

















