/*
const square = function(number) {
    return number * number
}

const squared = number => {
    return number * number;
}

const squares = number => number * number


const jobs = [
    { id: 1, isActive: true },
    { id: 2, isActive: true },
    { id: 3, isActive: false }
];

const activeJobs = jobs.filter(job => job.isActive);



const person = {
  talk() {
    let self = this;
    setTimeout(() => {
      console.log("this", this);
    }, 1000);
  }
};

person.talk();

const colors = ["red", "green", "blue"];

const items = colors.map(color => `<li>${color}</li>`);

console.log(items)


const address = {
  street: '',
  city: '',
  country: ''
}

// const street = address.street;
// const city = address.city;
// const country = address.country;

const { street, city, country } = address

const { street: st } = address


const first = [1,2,3]

const second = [4,5,6]

// const combined = first.concat(second)

// const combined = [...first, ...second]

// clone first array 
const clone = [...first]

console.log(first)
console.log(clone)


// combine 2 objects
const first = {
  name: 'Mosh'
}
const second = {
  job: 'Instructor'
}

const combined = {...first, ...second, location: 'Australia'}
console.log(combined)


const person = {
  name: "Mosh",
}

*/

// Default -> import ... from ''
// Named -> import { ... } from ''
import Teacher, { promote } from "./teacher";

const teacher = new Teacher("Mike", "MSc");
if (teacher != "1") {
  console.log("LOL");
}
teacher.teach();
