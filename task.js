// Write a javascript function to remove all duplicate Elements
// input ={2,4,2,6,3,4} output = {2,3,4,6}



const arr = [2, 4, 2, 6, 3, 4, 3]



let usingfilter = (array) => {
    return unique = arr.filter(function(item,index){ // 2--[0] 4--[1] 2--[2] 6--[3] 3--[4] 4--[5] 3--[6]
        return arr.indexOf(item)=== index 
    });
}
console.log(usingfilter())

//another method

const arr = [2, 4, 2, 6, 3, 4, 3]

const  removeDuplicates = (array) => {
    b =[]
    arr.forEach((element) => {
        if (b.indexOf(element)=== -1){
             b.push(element);
            }   
    });
    return b ;
    console.log(b)
}
removeDuplicates(arr)


//at offc

array = [1,4,5,7,6,7,8,1]

const removeDuplicates = (array) => {
    a = []
    array.forEach((element) => {
        if (a.includes(element) === false) {
            a.push(element);
        }
    });
    return a;
}
console.log(removeDuplicates(array))







array = [2, 4, 2, 6, 3]



const removeDuplicates = (array) => {
    b = []
    array.filter(element => array.includes(element) === true)
    b.push(element)
}
console.log(b)



//findModel

arr = [{ brand: 'honda', model: 'civic', price: '20L', engine: 'petrol' },
{ brand: 'honda', model: 'city', price: '12L', engine: 'petrol' },
{ brand: 'maruti', model: 'baleno', price: '5L', engine: 'petrol' },
{ brand: 'hyundai', model: 'santro', price: '6L', engine: 'petrol' },
{ brand: 'tesla', model: 'X', price: '12L', engine: 'EV' },
{ brand: 'audi', model: 'a8', price: '40L', engine: 'petrol' },
{ brand: 'audi', model: 'r6', price: '80L', engine: 'petrol' }
]

const findModel = (arr) => {
    ans = arr.filter((element => {
        if (element.brand === 'honda') {
            return element.brand;
        }
    }))
    return ans;
}
findModel(arr)


// group by brands

arr = [{ brand: 'honda', model: 'civic', price: '20L', engine: 'petrol' },
{ brand: 'honda', model: 'city', price: '12L', engine: 'petrol' },
{ brand: 'maruti', model: 'baleno', price: '5L', engine: 'petrol' },
{ brand: 'hyundai', model: 'santro', price: '6L', engine: 'petrol' },
{ brand: 'tesla', model: 'X', price: '12L', engine: 'EV' },
{ brand: 'audi', model: 'a8', price: '40L', engine: 'petrol' },
{ brand: 'audi', model: 'r6', price: '80L', engine: 'petrol' }
]
 

const groupBy = (arr) => {
    a ={}
    arr.forEach((element => {
        console.log(element.brand)
        if (!a[element.brand]){
            a[element.brand]=[]
        }
        a[element.brand].push(element)
    }))
    console.log(a)
}
groupBy(arr)














// sir's method

const groupBy = (arr) => {
    a ={}
    arr.forEach((element => {
        console.log(element.brand)
        a[element.brand] = a[element.brand].push(element)
    }))
    console.log(a)
}













