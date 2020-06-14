function sum(...args) {
  sleep(300); 
 // console.log(`args ${args}`);
  return args.reduce((sum, arg) => {
    return sum += +arg;
  }, 0);
}

function memorize(fn, limit) {
  let count = 0;
  const memory = [];
  if (limit === undefined || limit == 0){
     throw new Error("Не задано число сохраняемых значений");;
     };
  return  function innerFunc(...args){
    //console.log(`count=${count}`);
    //console.log(`длина массива=${memory.length}`);

    let exist = memory.find(item => compareArrays(item.args,args));
    if (exist){
      return exist.result};

    if (memory.length == limit){
      memory[count] = ({args: args, result: fn(...args)});
      count ++;
      if (count == limit){count = 0};
      return memory[count-1].result;
    } else {
      memory.push({args: args, result: fn(...args)});
      return memory[memory.length-1].result
    }
    //console.log(memory);
    //return fn(...args);
  };
}
const mSum = memorize(sum,3);
console.log(mSum(1,2,3));
console.log(mSum(4,5,6));
console.log(mSum(7,8));
console.log(mSum(1,2,3));
console.log(mSum(10,11,12));
console.log(mSum(13,14,15));
const mSum1 = memorize(sum,3);
console.log(mSum1(6,4,9));

function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function compareArrays(arr1,arr2){
  return arr1.length == arr2.length && arr1.every((v,i)=>v === arr2[i]);
}
//console.log(compareArrays([8, 9], [6])); // false, разные значения
//console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])); // false, разные значения
//console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4])); // false, разные значения
//console.log(compareArrays([1, 2, 3], [2, 3, 1])); // false, разные индексы, хотя и одинаковые значения
//console.log(compareArrays([8, 1, 2], [8, 1, 2])); // true
console.log("--------------------");
function testCase(testFunction,timer){
  arra = [ [1,2,3], [1,2], [1,2,3], [1,2], [9,5,2,4],[15,26,178,4],[2],[67,345,768,45,34,2] ];
  let  i = 0;
  const summa = memorize(sum,100);
  while (i != 15){
    arra.forEach(function(item, i, arr){summa(item);});
    i++
    };
}    
console.time('timer1');
testCase(sum,'timer1');
console.timeEnd('timer1');
//sum timer1: 2409.071ms
//mSum timer1: 2411.423ms
