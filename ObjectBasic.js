//what is object in JS
//primitives type data or information storing container


//Object Initialization - 
let userInfo = {} //object literal syntax ... 

// console.log(typeof(userInfo))


//keys-values
let userInfo1 = {
    //key/property --- values
    name: 'Abdullah Al-Wasi',
    class: 'One',
    love: 'Reading Book',
    age: 7,
    isSchool: false,
    bio:function(){
       console.log('I am working as a developer')
    }
}

//dot notation and array notation

// console.log(userInfo1.age) 
// console.log(userInfo1['love'])

//nested object
let bookStore = {
    novel: 'The First Keys',
    fiction: {
        name: 'Pride and Prejudice',
        author: 'Jane Austen',
        year: 1887,
        bio:function(){
            return `The name of ${this.author} was born in ${this.year}`
        },
        otherBooks: ['sense and sensibility', 'Emma', 'Persuasion']
    }
}

//methods of object
// console.log(bookStore.fiction.bio())

// object destructing 

const {novel, name} = bookStore
const { fiction: { author } } = bookStore;

// JSON (JavaScript Object Notation) vs Object:
let homeSmartDevice = {
    name:"Smart Thermostat",
    type:"Climate control",
    status: 'Active',
    setting: {
        temp: 72,
        mode: 'Hitting'
    },
    tv:function(){
        console.log(`The name of my TV is ${this.name}`)
    }
}

homeSmartDevice.tv()

// let Data = JSON.stringify(homeSmartDevice)
// console.log(Data)
// console.log(JSON.parse(Data))


//this keyword


// Object Spread Operator:



// Object Properties Enumeration ?
let homeSmartDevice1 = {
    name:"Smart Thermostat",
    type:"Climate control",
    status: 'Active',
    setting: {
        temp: 72,
        mode: 'Hitting'
    },
 
}

let objKey =  Object.keys(homeSmartDevice1)
let objValue =  Object.values(homeSmartDevice1)

// Object Methods vs Functions


//CRUD operation with object

//create 
 
//Read
    //loop  for ... in

    //object.keys

    //object.values

    //object.entries



//update

//delete

//js object Prototypes ?
function Person(name, age){
    this.name =  name,
    this.age =  age
}

Person.prototype.sayHello = function(){
    console.log(`hi my name is ${this.name} and i am ${this.age} year olds`)
}

let person1 =  new Person('Bruce Lipton', 45)
let person2 =  new Person('J K Rowling', 55)
let person3 =  new Person('Zuhir Ryhan', 75)
// person1.sayHello()
// person2.sayHello()
// person3.sayHello()

// mutable and Immutable concept:
let gpUser = {
    pickTime: '200k',
    network: 'GrameenPhone',
    internet: '3G', 
    modem: true,
}
Object.seal(gpUser)
delete gpUser.modem
gpUser.pickTime = '300k'
console.log(gpUser)

//special method with object in js

// object.assign()

// object.freeze()

//object.seal()

//object.entries()

// 3 steps nested objects, and iterate all values by using recursive function 
const bookObjNested = {
    bookInfo: {
      title: 'Pride and Prejudice',
      author: {
        authorInfo: {
          name: 'Jane Austen',
          birthYear: 1775,
          deathYear: 1817,
          nationality: 'English',
          notableWorks: ['Pride and Prejudice', 'Sense and Sensibility', 'Emma'],
        },
      },
      publicationDetails: {
        publicationYear: 1813,
        genre: 'Novel',
        pages: 279,
        language: 'English',
        isAvailable: true,
      },
    },
  };
  
function showNestedObjRecursively(obj){
    for(let key in obj){
        if(typeof obj[key] === 'object' && obj[key] !== null){
            showNestedObjRecursively(obj[key])
        }else{
            console.log(`key : ${key}, ... value ${obj[key]}`)
        }
    }
}

showNestedObjRecursively(bookObjNested)
