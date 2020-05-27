const parseCount = (value) => {
  let parsing = parseFloat(value);
  console.log(isNaN(Number.parsing));
  console.log(isNaN(Number.parseFloat(value)));
  if (isNaN(Number.parseFloat(value))) {
    throw new SyntaxError("Невалидное значение");
  }  
  return parseFloat(value);
};


const validateCount = (value) => {
  try {
    answer = parseCount(value);
    } catch(e) {
      return value;
    };
  return Math.round(answer);  
};

validateCount('kjh');



class Triangle {
  constructor (a,b,c) {
    if ( a + b < c || a + c < b || b + c < a) {
      throw new SyntaxError("Таких треугольников не существует!");
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
    return "Ошибка! Неправильный треугольник!";
  }
  getArea(){
    return "Ошибка! Неправильный треугольник!";
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
//getTriangle(10,15,27);
//const triangle = new Triangle (10,15,17);
//console.log(triangle.getPerimeter());
//console.log(triangle.getArea());