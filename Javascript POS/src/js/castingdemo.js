let castVar 

console.log("---------casting demonstration----------------")

console.log(castVar, typeof castVar)
castVar = 10
console.log(castVar, typeof castVar)
castVar = castVar+""
console.log(castVar, typeof castVar)
castVar = +castVar + 2
console.log(castVar, typeof castVar)
castVar = castVar + 2
console.log(castVar, typeof castVar)
castVar = castVar - 2
console.log(castVar, typeof castVar)

let num1 = "3"
castVar = +num1+castVar
console.log(castVar, typeof castVar)
castVar = !castVar
console.log(castVar, typeof castVar)


console.log("---------parseInt demonstration----------------")

let demoVar 
demoVar= parseInt("Test parseInt")
console.log(demoVar)
demoVar=parseInt("345")
console.log(demoVar)

console.log("---------Boolean values addition demonstration----------------")

let bool1 = true
let bool2 = true
let bool3 = false
let res

res = bool1 + bool2
console.log(bool1 +"+"+ bool2 + ":"+res)
res = bool1 + bool3
console.log(bool1 +"+"+ bool3 + ":"+res)