
//Demonstrating conditional operators 

//Demonstrating if-else - find greatest number

let num1 = 5
let num2 = 9
let num3 = 1

if(num1 > num2 && num1>num3)
    console.log("num1 is greatest")
else if(num2>num1 && num2>num3)
    console.log("num2 is greatest")
else
    console.log("num3 is greatest")


//Demonstrating ternary operator - find even or odd number


num1 = 5

num1%2==0?console.log(num1+" is even"):console.log(num1+" is odd")

//Demonstrating switch operator - check if the give letter is one of A,B,C,D

let letter='Q'

switch(letter){
    case 'A':
        console.log("Entered letter is A")
        break;
    case 'B':
        console.log("Entered letter is B")
        break;
    case 'C':
        console.log("Entered letter is C")
        break;
    case 'D':
        console.log("Entered letter is D")
        break;
    default:
        console.log("Entered letter is not among A,B,C,D")
}