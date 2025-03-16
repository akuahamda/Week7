function addNum(num1,num2,num3){
    return num1 + num2 + num3;
}
let result = addNum(5, 4, 5);
console.log(result);

function multiplytwoNum(num4,num5){
    return num4 * num5;
}
let anwser = multiplytwoNum(8,4);
console.log(anwser);

function myName(name){
    return `Welcome ${name}`;
}
let name = myName("Luna");
console.log(name);

console.log("The return keyword is used inside a function to send a value back to where the function was called.");

function addingtwoNum(numA,numB){
    if(numA > numB){
        return "A is greater";
    }else{
        return "B is greater"
    }
}
let anwser2 = addingtwoNum(7,4);
console.log(anwser2);