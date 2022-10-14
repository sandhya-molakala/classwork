//Loop demonstration

//while loop demonstration - print 1-5 numbers
console.log("***************while loop***************")
let num1 = 1
while  (num1 <= 5)
{
    console.log(num1+" ")
    num1 ++
}

console.log("***************do while loop***************")
console.log(`num1 = ${num1}`)

do {
    console.log(num1+" ")
    num1--
}while(num1 >= 1)

//demonstrating for loop - 
console.log("***************for loop***************")
for (let i=0; i<=5; i++)
{
    for (let j=1; j<=5; j++){
        console.log(i+" "+j)
    }
}