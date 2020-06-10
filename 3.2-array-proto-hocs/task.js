class userError extends Error {
  constructor(message){
    super(message);
    this.name = "userError";
  }
}
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
  if (limit === undefined || limit ==0){
     throw new userError("Не задано число сохраняемых значений");;
     };
  return  function innerFunc(...args){
    //alert(`count=${count}`);
    //alert(`длина массива=${memory.length}`);

    let exist = memory.find(item => compareArrays(item.args,args));
    if (exist != undefined){return exist.result};

    if (memory.length == limit){
      memory[count] = ({args: args, result: fn(...args)});
      count ++;
      if (count == limit){count = 0};
    } else {
      memory.push({args: args, result: fn(...args)});
    }
    alert(memory);
    return fn(...args);
  };
}
const mSum = memorize(sum,4);
alert(mSum(1,2,3));
alert(mSum(4,5,6));
alert(mSum(7,8));
alert(mSum(1,2,3));
alert(mSum(10,11,12));
alert(mSum(13,14,15));
const mSum1 = memorize(sum,3);
alert(mSum1(6,4,9));

function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function compareArrays(arr1,arr2){
  return arr1.length == arr2.length && arr1.every((v,i)=>v === arr2[i]);
}
