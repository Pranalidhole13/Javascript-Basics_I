//IIFE ==>Immediately Invoked Function Expression


/**************      Normal Function      *********/
// function chai(){
//     console.log("DB Connected")
// }
// chai()

//IIFE used t0 avoid global Scope
//1.named IIFE
(function chai(){
    console.log("DB Connected")
}) ();


//2.Unnamed IIFE
(() =>{
    console.log("DB Connected To")
})();

((name) =>{
    console.log(`${name} DB Connected To`)
})('Siya')
