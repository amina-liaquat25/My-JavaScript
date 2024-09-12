// console.log("Hello World");
// console.log("This is javascript class")
// console.log(2+2);
// document.write("Hey There!")
// alert("Be Alert")

    //    Data Types in Javascript

    //     Integers,Float,String,Boolean, Undefined , null


    // Arrays....

// array=[1,2,3,4,5,6,7]

// array[0]=1;
// array[2]=2

//      Variable

//     // var , const , let 

// let name = "Musa";

// var age = 4 ;

// const look = "cute" ;

//         Operators

    // arithmetic operators  
    // +	Addition
    // -	Subtraction
    // *	Multiplication
    // **	Exponentiation (ES2016)
    // /	Division
    // %	Modulus (Remainder)
    // ++	Increment
    // --	Decrement

// let a = 10;
// let b = 40;
// result= a + b;
// result= a - b;
// result= a * b;
// result= a ** b;
// result= a / b;
// result= a % b;
// a++;
// b--;
// console.log(result)
// console.log(a)
// console.log(b)
  
    // comparision operators

    //  ==	equal to
    //  ===	equal value and equal
    //  !=	not equal		
    //  !== not equal value or not equal type	
    //  >	greater than		
    //  <	less than	
    //  >=	greater than or equal to	
    //  <=	less than or equal 

    let c = 10;
    let d = 20;

    console.log(c == d);
    console.log(c === d);

        // logical operators

        // &&	and
        // ||	or
        // !	not

let num1 = false;
let num2 = false;

console.log(num1 && num2 )
console.log (num1 || num2 )
console.log(!num1 )

    //   Type casting

let a = 20;
let b = "30asd";

console.log(a + Number(b))


console.log(a + parseInt(b))


console.log(a + parseFloat(b))


    // if else conditions

let a1 = parseInt(window.prompt("Enter the Number1: "));
let a2 = parseInt(window.prompt("Enter the Number2: "));

console.log(a1 + a2)

// if (a1 + a2 > 100){
//     alert("Sum is greater then 100")
// }
// else if (a1 + a2 < 100){
//     alert ("Sum is lesser then 100")
// }
// else{
//     alert("Sem is equal to 100")
// }

    //   Loops

    // For loop, while loop , do while loop
    
//    for loop -   for(initialization; condition; increment/decrement){
//     code block
//    }


for (i = 0; i< 10; i++){
    // console.log(i);
    alert(i);
}

    //   while loop

let k = 0;

while(k <= 10){
    // console.log("Hello World!")
    k++;
}

    //   do while loop

j = 0;

do{
    console.log("Hello World")
    j++;
}while( j < 10)

        //  functions

function myfirstfunction( ){
  alert("Hello World")
}

myfirstfunction();

function mysecondfunction() {
    let a = 10;
    let b = 30;
    let result = a + b;
    return result;
}

// alert(mysecondfunction ());
let output = mysecondfunction ();

let result2 = output + 10;

alert(result2);

function mythirdfunction( name , age , course){
    // alert("Hello" + name + "Your age is" + age + "And Your Course is" + course );
    alert(`Hello ${name} Your age is ${age} And Your Course is ${course}`)

}

mythirdfunction*("Amina", 24 , "Web Development");