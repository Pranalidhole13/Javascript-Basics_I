let names=['Pranali', 'Sanika', 'Revati', 'Sush'];
// To verify the array 
console.log(names);
console.log(names[0]);
console.log(names.length);
console.log(names[names.length - 1]);

names[3]='Sushama';
console.log(names);

// A way to declare an array
let arr=new Array('sonu', 'monu','chintu');
console.log(arr);

// Push --> insert some values inside the array
names.push('Rutu');
console.log(names);
for(let i=0;i<6;i++){
    console.log(names[i]);
}

// Slice --> to print some portion of array or extrcat multiple values 
console.log(names.slice(1,3));   
// starting value is 1 and en value is 3 and it will be exclusive .

// Splice
let fruit=['Apple','Bada Apple','Chota Apple','Double Aple'];
fruit.splice(2,0,'Kharab Apple','Accha Aplle');
console.log(fruit);
//2 means from where i have to start to insert
//0 means how many delete/replace

// Concatenation



