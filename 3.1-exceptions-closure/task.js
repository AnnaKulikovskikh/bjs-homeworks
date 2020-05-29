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
      return err.message;
    }; 
};

console.log(validateCount('3.14'));



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
    return s.toFixed(3);
  }
}

class FalseTriangle extends Triangle {
 
  getPerimeter() {
    return "Ошибка! Неправильный треугольник";
  }
  getArea(){
    return "Ошибка! Неправильный треугольник";
  }
}

function getTriangle(a,b,c){
  try {
    return  new Triangle(a,b,c);
  } catch (e) {
    return new FalseTriangle(a,b,c);
  }
}

getTriangle(10,15,27);