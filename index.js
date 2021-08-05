// reduce executes a provided REDUCER function on each element of an ARRAY and returns a single output value
// reducer function has four args:
// accumulator, currentValue, currentIndex, sourceArray
// reducer function's returned value is assigned to accumulator at each step, this accumulator value is remembered across each iteration
// currentIndex starts at 0, except for when initialValue is provided; then it starts at 1

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// here, accumulator is the first value of the array on which the reduce function was called

console.log(array1.reduce(reducer));

// in this example, 5 serves as the initial value
// reduce(callbackFn, initialValue)
// if no initialvalue is supplied, the callbackFn is not executed on the first element
console.log(array1.reduce(reducer, 5));

const getMax = (a, b) => Math.max(a, b);
console.log([1, 100].reduce(getMax, 50));
console.log([].reduce(getMax, 1));
console.log([0, 1, 2, 3, 4].reduce((acc, cv) => acc + cv, 10)) // returns 20, initialValue

// sum of values in object array
let sum = [{x: 1}, {x: 2}, {x: 3}].reduce((acc, cv) => acc + cv.x, 0);
console.log("sum is", sum) // 6

// flatten an array of arrays
let flattened = [[0, 1], [2, 3], [4, 5]].reduce((acc, cv) => acc.concat(cv), []);
console.log(flattened);

// counting instances of object values
let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

let countedNames = names.reduce((allNames, name) => {
  if (name in allNames) {
    allNames[name]++
    } else {
      allNames[name] = 1
  }
  return allNames
}, {})

console.log(countedNames);

// grouping objects by a property
let people = [
  {name: 'Alice', age: 21},
  {name: 'Max', age: 20},
  {name: 'Jane', age: 20}
];

function groupBy(objArr, prop) {
  return objArr.reduce((acc, obj) => {
    let key = obj[prop]
    if (!acc[key]) acc[key] = []
    acc[key].push(obj)
    return acc
  }, {})
}

let groupedPeople = groupBy(people, 'age');
console.log(groupedPeople);