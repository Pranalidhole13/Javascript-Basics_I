let rectangle= {
    length: 12,
    breadth: 15,

    draw: function(){
        console.log('Drawing a rectangle');
    }
};
console.log(rectangle.length);
console.log(rectangle.breadth);
rectangle.draw();

// Object Creation
// 1.Factory Function
// 2.Constructor Function

// 1.Factory

function createObj(l,b){
    return rectangle={
        length:l,
        breadth: b,

        draw(){
            console.log("Area of Rectangle",l*b);
        }
    };
}

let rectangle1=createObj(5,4);
console.log(rectangle1);
rectangle.draw();