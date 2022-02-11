console.log("Hello Cogoport")


const newfunc = () => {
    var varVariable ="COGO FRIEGHT";
    let a= 'company'
    let i=0;
    for(i=0;i<10;i++){
        let blockScope = 'COGO FRIEGHT'
        var FunctionScope = 'Func'
        console.log(varVariable,a,i,blockScope,FunctionScope);
    }
    console.log(a,varVariable,i,FunctionScope, blockScope)
}

const kk ='String';
const nk =10;
const lk = 10.2;
const bk = true;
const arr = [1,2,3,4];

console.log(kk,nk,lk,bk,arr);


let kkk ='String';
let nk =10;
let lk = 10.2;
let bk = true;
let arr = [1,2,3,4];

console.log(kkk,nk,lk,bk,arr);

//concatenation

k = 'k'
'k'
m = 'm'
'm'
k + m
'km'
k + '_' + m
'k_m'



const newObj = {}
undefined
newObj.name ='Cogoport'
'Cogoport'
newObj
{name: 'Cogoport'}
newObj.age = 6
6
newObj
{name: 'Cogoport', age: 6}
newobj.name
// VM271:1 Uncaught ReferenceError: newobj is not defined
//     at <anonymous>:1:1
// (anonymous) @ VM271:1
newObj.name
'Cogoport'
newObj.age
6
delete newObj.age
true
newObj
{name: 'Cogoport'}
newObj.name ='Cogo Frieght'
'Cogo Frieght'
let ObjKey = 'city'
undefined
ObjKey
'city'
newObj[ObjKey]
undefined
newObj[ObjKey] = 'Mumbai'
'Mumbai'
newObj[ObjKey]
'Mumbai'

newObj[ObjKey]
undefined
newObj[ObjKey] = 'Mumbai'
'Mumbai'
newObj[ObjKey]
'Mumbai'
newObj
{name: 'Cogo Frieght', city: 'Mumbai'}
let ObjName = 'Sahil'
undefined
ObjName
'Sahil'
let ObjName = 'name'
undefined
newObj[ObjName] = 'Akib'
// VM1069:1 Uncaught ReferenceError: Objname is not defined
//     at <anonymous>:1:8
// (anonymous) @ VM1069:1
newObj[ObjName]
'Cogo Frieght'
newObj['state'] = 'Maharastra'
'Maharastra'
newObj
{name: 'Cogo Frieght', city: 'Mumbai', state: 'Maharastra'}
Object.keys(newObj)
(3) ['name', 'city', 'state']
Object.values(newObj)
(3) ['Cogo Frieght', 'Mumbai', 'Maharastra']

//Given an Object with keys(properties) you need to loop one object keys and log(print) the key values pair in {key}_{value} format
//eg. {country: 'India' flag: 'tri-color' languages:'many' anthem: 'jana-gana-mana'}

const reqObj= {country: 'India', flag: 'tri-color', languages:'many', anthem: 'jana-gana-mana'}
const a= Object.keys(reqObj)
let i=0

for(i=0; i<a.length; i++)
{
  console.log(a[i] + '_' + reqObj[a[i]])
}

let b = ['apple', 2, 2.4, true, 'CC']



/ Remove duplicates in array using filter method  
let animals = ["Lion", "Rabbit", "Mouse", "Monkey", "Lion","Ape"]  
let usingFilter = () => {  
return unique = animals.filter(function(item,index){  
      return animals.indexOf(item) == index;  
   });  
}  
console.log(usingFilter())  
Output: ['Lion', 'Rabbit', 'Mouse', 'Monkey', 'Ape']  
