// Object created and Acccess that object
let rectangle ={
    length:12,
    breadth:15,

};
console.log(rectangle);
console.log(rectangle.length);
console.log(rectangle.breadth);

// Date 
let now=new Date();
console.log(now);
console.log(now.toString());
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getTime());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());


// Math
const PI=Math.PI;
console.log(PI);
console.log(Math.round(PI));
console.log(Math.floor(9.5));    /*As floor is under so it takes decrease value*/
console.log(Math.ceil(9.5));     /* As ceil is upper so it take increase value*/


//Min Max
console.log(Math.min(10,1,2,3,4));
console.log(Math.max(10,1,2,3,4));

// Random gives value between 0 to 0.9
console.log(Math.random(  ));
console.log(Math.random()*10);
