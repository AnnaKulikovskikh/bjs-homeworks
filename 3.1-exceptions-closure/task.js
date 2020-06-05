class parseError extends Error {
  constructor(message){
    super(message);
    this.name = "parseError";
  }
}

const parseCount = (value) => {
  let parsing = Number.parseFloat(value);
  if (isNaN(parsing)) {
    throw new parseError("Невалидное значение");
  }  
  return parsing;
};


const validateCount = (value) => {
  try {
     return Math.round(parseCount(value,0));
    } catch(err) {
      return err;
    }; 
};

console.log(validateCount('h12'));



class Triangle {
  constructor (a,b,c) {
    if ( a + b < c || a + c < b || b + c < a) {
      throw new SyntaxError("Треугольник с такими сторонами не существует");
      }
      this.a = a;
      this.b = b;
      this.c = c;
  }
  getPerimeter() {
      return this.a + this.b + this.c;
  }
  getArea(){
      let p = (this.a + this.b + this.c)/2;
      let s = Math.sqrt(p*(p - this.a)*(p - this.b)*(p - this.c));
      return Number(s.toFixed(3));
  }
}

function getTriangle(a,b,c){
  try {
    return  new Triangle(a,b,c);
  } catch (e) {
    //return "Ошибка! Неправильный треугольник";
    return {
      a,b,c,  
      getPerimeter:() => "Ошибка! Неправильный треугольник",
      getArea:() => "Ошибка! Неправильный треугольник",
    }  
  }
}

//getTriangle(10,15,27);
triangle = getTriangle(10,15,27);
//const triangle = new Triangle (10,15,17);
console.log(triangle.getPerimeter());
console.log(triangle.getArea());
