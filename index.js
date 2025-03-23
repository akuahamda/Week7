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

function arithmeticOperators(numC,numD){
    return numC + numD
}
let result3 = arithmeticOperators(20,15);
console.log(result3);

function subtractionNum(a,b){
    return a - b;
}
let result4 = subtractionNum(20,5);
console.log(result4);

function multiNum(c,d){
    return c * d;
}
let result5 = multiNum(5,5);
console.log(result5);

function divideNum(e,f){
    return e / f;
}
let result6 = divideNum(100,50);
console.log(result6);

function reminderNum(g,h){
    return g % h;
}
let result7 = reminderNum(50,5);
console.log(result7);

let addingNumbers = (a,b,c) => {
    return a + b + c;
}
console.log(addingNumbers(10,10,10));

let fullName = (firstName,lastName) => {
    return `Welcome ${firstName} ${lastName}`
}
console.log(fullName("Hamda","Mohammed"));

let conditionStatement = () => {
    if(10 >= 40){
        console.log("the answer is correct");
    }else{
        console.log("wrong answer");
    }
}
conditionStatement()

let carSpecification = () => {
    return car = {type:"Fiat", model:"500", color:"white"};
}
console.log(carSpecification());

let fruits = () => {
    return fruit = ["mango","banana","orange","apple"];
}
console.log(fruits());

let studentInfo = () => {
   return info = [

     student1 = {
        name : 'Kwasi',
        age: 20,
        dob: "15-03-2000"
    },

     student2 = {
        name : 'Kwasi',
        age: 20,
        dob: "15-03-2001"
    },

     student3 = {
        name : 'Kwasi',
        age: 20,
        dob: "15-03-2002"
    },

     student4 = {
        name : 'Fati',
        age: 20,
        dob: "15-03-2003"
    },

     student5 = {
        name : 'Emma',
        age: 20,
        dob: "15-03-2004"
    }
]
}
console.log(studentInfo());

//General//
let orderStatus = "cancelled";
switch(orderStatus){
    case "Pending":
    console.log("The order of your status is Pending");
    break;
    case "Processing":
        console.log("The order of your status is Processing");
        break;
        case "Shipped":
            console.log("The order of your status is Shipped");
            break;
            case "Delivered":
                console.log("The order of your status is Delivered");
                break;
                case "Delivered":
                    console.log("The order of your status is Delivered");
                default:
                    console.log("No order available");
                    
}
       let status = "processing"; 
       if (status === "pending") {
        console.log("The order status is pending.");
         } else if (status === "processing") {
         console.log("The order status is processing.");
         } else if (status === "shipped") {
         console.log("The order status is shipped.");
         } else if (status === "delivered") {
         console.log("The order status is delivered.");
         } else if (status === "cancelled") {
  console.log("The order status is cancelled.");
         } else {
        console.log("Invalid order status.");
      }

