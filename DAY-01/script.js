console.log("Hello World")

let number1=50;
let number2=25;

let addition=number1+number2;
let multiplication=number1*number2;
let subtraction=number1-number2;
let division=number1/number2;

console.log("Addition is "+addition)
console.log("Subtration is "+subtraction)
console.log("multiplication is "+multiplication)
console.log("Division is "+division)
console.log("")
//printing numbers from 1 to 10
console.log("printing numbers from 1 to 10")
for(let i=1; i<=10; i++)
{
	console.log(i)
}

//print only the odd numbers
console.log("print only the odd numbers")
for(let j=1; j<=50; j++)
{
	if(j%2==1)
	{
		console.log(j)
	}
}
//print the numbers in reverse
console.log("print the numbers in reverse")
for(let k=10; k>0; k--)
{
	console.log(k)
}

//reverse the numbers in left and right 4321-5-9876
console.log("")


let num=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
 
   let mid=(num.length-1)/2
   
   for(let h=mid-1; h>=0; h--)
   {
	   console.log(num[h])
   }
	console.log(num[mid])
	
	for(let h=num.length; h>mid; h--)
	{
		console.log(num[h])
	}









