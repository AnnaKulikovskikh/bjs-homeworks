let arrHoh = [];
let s = 0;


function sum(...args) {
  sleep(300); 
  return args.reduce((sum, arg) => {
    return sum += +arg;
  }, 0);
}

function hoh (suma) {
  if (arrHoh.length >= 3) {
    arrHoh[s] = suma;
    s +=1;
    if (s>=3) {s = 0};
  } else {
    arrHoh.push(suma);    
  }
  return arrHoh;
}

function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

console.log(hoh(sum(1,2,3)));
console.log(hoh(sum(4,5,6)));
console.log(hoh(sum(7,8,9)));
console.log(hoh(sum(10,11,12)));
console.log(hoh(sum(13,14,15)));
console.log(hoh(sum(16,17,18)));
console.log(hoh(sum(19,20,21)));


function compareArrays(arr1,arr2){
  return arr1.length == arr2.length && arr1.every((v,i)=>v === arr2[i]);
}