"use strict";
const num1Element = document.getElementById("num1");
const num2Element = document.getElementById("num2");
const buttonElement = document.querySelector("button");
const numresults = [];
const textresults = [];
//union types
function add(num1, num2) {
    //type guard
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + num2;
    }
    return +num1 + +num2;
}
function printresult(resultobj) {
    console.log(resultobj.val);
}
buttonElement.addEventListener('click', () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add(+num1, +num2);
    numresults.push(result);
    const stringResult = add(num1, num2);
    textresults.push(stringResult);
    console.log(result);
    console.log(stringResult);
    printresult({ val: result, timestamp: new Date() });
    console.log(numresults, textresults);
});
const mypromise = new Promise((res, rej) => {
    setTimeout(() => {
        res('it worked');
    }, 1000);
});
mypromise.then((result) => {
    console.log(result.split(' '));
});
