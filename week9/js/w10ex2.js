console.log("Hello");

// scope of the variables:
// 1- global scope
// a- any variable declared using var keyword or let keyword outside the functions
// any variable declared WITHOUT var or let or cons 

//2- function scope (local scope)
// a- any variable declared using var keyword inside the function

//3- Blank scope
//a- any variable declared using let keyword inside the block




var g = 10;
//let g =10;
console.log("(Outside the function)g=" +g);



function todo(){
    console.log("(Inside the function)g=" +g);
    let a=  5;
    console.log("(Inside the function)a="+a);
    {
        var b = 22;
        console.log("(Inside the block)b=" +b);

        let c = 100;
        console.log("(Inside the block)c=" +c);
    }
    console.log("(Outside the block)b=" +b);
    console.log("(Outside the block)c=" +c);

    //d = 150;
}

//console.log("(Outside the function)a="+a);
//console.log("(Inside the function)d=" +d);