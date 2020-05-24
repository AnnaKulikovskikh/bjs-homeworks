const parseCount = (value) => {
    if (isNaN(Number.parseInt(value)) || value == undefined) {
      throw new SyntaxError("Невалидное значение");
    };  
    return parseFloat(value);
  };
  
  
  const validateCount = (value) => {
    try {
      parseCount(value);
      } catch(e) {
        return console.log('Error');
      };
    return Math.round(parseCount(value));  
  };
  

  
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
      return Math.round(this.a + this.b + this.c,3);
    }
    getArea(){
      let p = (this.a + this.b + this.c)/2;
      let s = Math.sqrt(p*(p - this.a)*(p - this.b)*(p - this.c));
      return Math.round(s,3);
    }
  }
  
  class FalseTriangle {
    constructor (a,b,c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
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
  
  getTriangle(10,15,17);
  //getTriangle(10,15,27);
  //const triangle = new Triangle (10,15,17);
  //console.log(triangle.getPerimeter());
  //console.log(triangle.getArea());