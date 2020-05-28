let arrMem=[];
let s = 0;
let memory = [];

function sum(...args) {
  sleep(300); 
  console.log(`args ${args}`);
  return args.reduce((sum, arg) => {
    return sum += +arg;
  }, 0);
}

function memorize(fn, limit) {
  if (arrMem.length >= limit) {
    arrMem[s] = fn;
    s +=1;
    if (s >= limit) {s = 0};
  } else {
    arrMem.push(fn);    
  }
  return arrMem;
}
const mSum = memorize(sum(1,2), 5);
console.log(mSum);
console.log(memorize(sum(1,2,3),2));
console.log(memorize(sum(4,5,6),2));
console.log(memorize(sum(7,8,9),2));
console.log(memorize(sum(10,12,13),3));

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