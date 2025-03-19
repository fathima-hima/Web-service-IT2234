console.log("Array 1 Elements")
let array1=[6,7,3,8,2]
console.log(array1)
for(let i=0;i<array1.length;i++)
{
 console.log(array1[i])
}

console.log("Array 2 Elements")
let array2=["BMW","Toyota","Suzuki","Honda","Audi"]
console.log(array2)
for(let j=0;j<array2.length;j++)
{
 console.log(array2[j])
}

array1.forEach((n)=>{
 console.log(n)
})

//find the max number in the array using forEach
let max=0;
array1.forEach((n)=>{
 (max<n) && (max=n)
})
console.log("Max is "+max)

//print the nested Array
//[[1,2,30],[5,6],[8,5,3]]
console.log("Nested Array")
let array3=[[1,2,30],[5,6],[8,5,3]]
console.log(array3)

array3.forEach((n)=>{
 console.log(n)
})

array3.forEach((n)=>{
 n.forEach((i)=>{
  console.log(i)
 })
})

//arr=[1,2,3,4,5,6]
//target=7
//write a code find the all pairs that sum up to the target
console.log("Target")
let arr=[1,2,3,4,5,6]

for(let i=0;i<arr.length;i++)
{
 for(let j=0;j<arr.length;j++)
 {
  if(arr[i]+arr[j]==7)
  {
   console.log(arr[i],arr[j])
  }
 }
}


//a=[4,5,6,3,7]
//b=[8,3,2,1,5]
//find the common elements between a and b
console.log("Common Elements")
let a=[4,5,6,3,7]
let b=[8,3,2,1,5]
for(let i=0;i<a.length;i++)
{
 for(j=0;j<b.length;j++)
 {
  if(a[i]==b[j])
  {
   console.log(a[i])
  }
 }
}

//[4,8,3,4,3,2,1,8,4]
////find the most frequent element in the array
let freq=[4,8,3,4,3,2,1,8,4];
let mostFrequentElement=freq[0];
let maxCount=0;

for(let i=0;i<freq.length;i++)
{
 let count=0;
	
 for(let j=0;j<freq.length;j++)
 {
  if(freq[j]===freq[i])
  {
   count++;
  }
 }
if(count>maxCount)
{
 maxCount=count;
 mostFrequentElement=freq[i];
}
}
console.log("Most frequent element is: "+mostFrequentElement)

//Array operation
//push and pop
console.log("Push and Pop")
arr3=['a','b','d']
console.log(arr3)
arr3.push('e')
console.log(arr3)
arr3.pop()
console.log(arr3)

//reverse the array using push and pop
//a b c d -> d c b a
console.log("Reverse the array using push and pop")
let arr4=[]
arr4.push('a')
arr4.push('b')
arr4.push('c')
arr4.push('d')
console.log(arr4)
for(let i=arr4.length-1;i>=0;i--)
{
 let arr5=arr4.pop();
 console.log(arr5)
}

//JSON
//{key:value}
console.log("JSON")
let student={regno:'2021/ICT/01',name:'James',age:21,course:'IT',skills:['Java','JS','C++']}
console.log(student)
console.log(student.name)

let students=[
{regno:'2021/ICT/01',name:'James',age:21,course:'IT'},
{regno:'2021/ICT/02',name:'Ravi',age:22,course:'IT'},
{regno:'2021/ICT/03',name:'Gayan',age:21,course:'IT'}
]
console.log(students)


//Define 10 student JSON
//store it in an Array
//find the female students
//find the students who are following IT course
//find the max and average GPA among them
let students2=[
{id:1,name:"Alice",gender:"Female",course:"IT",gpa:3.8},
{id:2,name:"Bob",gender:"Male",course:"Engineering",gpa:3.5},
{id:3,name:"Clara",gender:"Female",course:"Business",gpa:3.2},
{id:4,name:"David",gender:"Male",course:"IT",gpa:3.9},
{id:5,name:"Eva",gender:"Female",course:"IT",gpa:3.6},
{id:6,name:"Frank",gender:"Male",course:"Medicine",gpa:3.7},
{id:7,name:"Grace",gender:"Female",course:"IT",gpa:3.9},
{id:8,name:"Henry",gender:"Male",course:"Law",gpa:3.1},
{id:9,name:"Ivy",gender:"Female",course:"Engineering",gpa:3.4},
{id:10,name:"Jack",gender:"Male",course:"IT",gpa:3.2}
]

console.log("Find female students:")
let femaleStudents = students2.filter(student => student.gender === "Female");
console.log(femaleStudents)

console.log("Find students following IT course:")
let itStudents = students2.filter(student => student.course === "IT");
console.log(itStudents)

console.log("Find the max GPA among all students:")
let maxGPA = Math.max(...students2.map(student => student.gpa));
console.log(maxGPA)

console.log("Find average GPA:")
let totalGPA = students2.reduce((sum, student) => sum + student.gpa, 0);
let avgGPA = totalGPA / students2.length;
console.log(avgGPA.toFixed(2))