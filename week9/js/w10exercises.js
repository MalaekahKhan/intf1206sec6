console.log("Hello");

//Write a function buildArray that takes two Numbers, and returns an Array filled with all numbers between the given number: buildArray(5, 10) should return [5, 6, 7, 8, 9, 10]

// function declaration
function buildArray(n1, n2){
    let arr=[];
    for (let i = n1; i<=n2; i++){
        arr.push(i);
    }
    return arr;
}

console.log(buildArray(5, 10));

// function expression
const buildArray2 = function (n1, n2){
    let arr=[];
    for (let i = n1; i<=n2; i++){
        arr.push(i);
    }
    return arr;
};
console.log(buildArray2(5, 10));

//arrow function
const buildArray3 = (n1, n2)=>{
    let arr=[];
    for (let i = n1; i<=n2; i++){
        arr.push(i);
    }
    return arr;
};
console.log(buildArray3(5, 10));

//Write a function checkAges that takes two arguments: an Array of ages (Number); and a cut-off age (Number). Your function should return true if all of the ages in the Array are at least as old as the cut-off age: checkAges([16, 18, 22, 32, 56], 19) should return false and checkAges([16, 18, 22, 32, 56], 6) should return true

function checkAges(ages, cutOffAge){
    for(let i =0; i<ages.length; i++){
        if(ages[i]<cutOffAge
        ){
            return false;
        }
    }
    return true;
}

console.log(checkAges([16, 18, 22, 32, 56], 6));
console.log(checkAges([16, 18, 22, 32, 56], 19));