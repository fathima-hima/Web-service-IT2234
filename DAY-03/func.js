//define a simple function in javascript

//void type function
function PrintMsg()
{
   console.log("Hello JS")
}
PrintMsg()

//return type function
function sum()
{
	return 5+6
}
    console.log(sum())
	
//passing parameters to function	
	function sub(a,b)
	{
		return a-b
	}
	console.log(sub(5,3))
	
//write a boolean function to find a given number is prime

function isPrime(num) {
    if (num < 2) return false
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false
    }
    return true
}

console.log(isPrime(5))
console.log(isPrime(4))
console.log("")
//write recursive function to print numbers from 1 to n

function recursive(n, current = 1) {
    if (current > n) return;
    console.log(current)
    recursive(n, current + 1)
}

// Example usage:
recursive(5)
console.log("")
console.log("")

//arrow Function
console.log("arrow function")
const msg = () =>{
	console.log("Hello Js")
}
//console.log(msg)
msg()

//find the sum of 2 numbers
const addition = () => {return console.log(5+7)}
addition()

//find the sum of 2 numbers using passing parameters
const add = (a,b) =>{return console.log(a+b)}
add(10,12)

//find the subtractin of 2 numbers using passing parameters
const subtract = (a,b) =>{return a-b}
console.log(subtract(20,12))

//multiplying numbers with default parameters
const mult = (a,b=2) =>{return a*b}
console.log(mult(4,5))
console.log(mult(3))

//rest parameters
const mysum = (...n) =>{  //pass any number of parameters. here can pass no of parameters
	console.log(n)
	
}
mysum(4,5,6,7,89,2)

//rest parameters
const mysum1 = (...n) =>{  //pass any number of parameters. here can pass no of parameters
	//console.log(n)
	// let sum=0
	// n.forEach((i)->sum=sum+1)
	// console.log(sum)
	
	
	return n.reduce((t,i)=>t=t+i)
}
console.log(mysum1(4,5,6,7,8,2))


//callback function => a function is using another function


const greet1 =(msg,fun) => {
	console.log("Hi.."+msg)
	fun()
}
greet1("Good morning",() => {console.log("My name is David")})



//Another method
console.log("")
console.log("another method")
console.log("")
const myName = (name) => {console.log("My name is "+name)}

const greet =(msg,fun) => {
	console.log("Hi.."+msg)
	fun
}
greet("Good morning",myName("David"))

console.log("")
console.log("")
//multiplying number
console.log("Multiplying numbers")

const multtwo=(n)=>n*2

const myarr= (mult,...n)=>{
	n.forEach((i)=>console.log(mult(i)))
}
myarr(multtwo,4,5,6,8,2)