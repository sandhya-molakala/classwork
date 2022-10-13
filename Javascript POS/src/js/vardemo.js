console.log("Hello World!!!")
console.log("-----demonstration 'let'----------\n")
let x = 5;
console.log("globally initialized value is 5. x= : "+x)
if(true){
    
    let x = 10
    console.log("Locally initialized value is 10. x=:"+x)
    
}
x = 15
console.log("globally initialized value is changed to 15. x= : "+x)

console.log("\n-----demonstrating 'const' ----------")
const y = 6
if(true)
{
    //y = 10
}
console.log("Constant value cant be changed : "+y)

