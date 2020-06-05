
let s = 0;

function sum(...args) {
  sleep(300); 
  console.log(`args ${args}`);
  return args.reduce((sum, arg) => {
    return sum += +arg;
  }, 0);
}

function memorize(fn, limit) {
  constructor(){
    this.memory= [];
  }
  if (limit is undefined){
    limit = 1
  };
  if (this.memory.length >= limit) {
    this.memory[s] = fn;
    s +=1;
    if (s >= limit) {s = 0};
  } else {
    this.memory.push(fn);    
  }
  return this.memory;
}
console.log(memorize(sum,5));
const mSum = memorize(sum, 5);
console.log(sum(1,2,3));
console.log(mSum(1,2,3));
console.log(mSum(1,2,3));

function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function compareArrays(arr1,arr2){
  return arr1.length == arr2.length && arr1.every((v,i)=>v === arr2[i]);
}

console.log(compareArrays([8, 9], [6])); // false, разные значения
console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])); // false, разные значения
console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4])); // false, разные значения
console.log(compareArrays([1, 2, 3], [2, 3, 1])); // false, разные индексы, хотя и одинаковые значения
console.log(compareArrays([8, 1, 2], [8, 1, 2])); // true