// Задание 1
function getSolutions(a, b, c) {
    let d = b*b - 4 * a * c;
    let result = {
      D:d,
      roots:[]
    }
    if (d > 0) {
      let x1 = (-b + Math.sqrt(d))/(2*a);
      let x2 = (-b - Math.sqrt(d))/(2*a);
      result = {
        D:d,
        roots:[x1,x2],
      }
    } else if (d == 0) {
      let x1 = -b/(2*a);
      if (x1 == -0) x1 = 0;
      result = {
        D:d,
        roots:[x1],
      }
    }
    return result;
}

function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a, b, c);
    
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (result.roots.length == 2) {
      console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.root[1]}`);
    } else if (result.roots.length == 1) {
       console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
    } else {
      console.log('Уравнение не имеет вещественных корней')
    }
}

showSolutionsMessage(5, 0, 0);

// Задание 2
function  getAverageScore(data) {
    let score = new Object;
    let avegareMarks = [];
    let j = 0;
    for (let subject in data) {
      score[subject] = getAverageMark (data[subject]);
      avegareMarks[j] = score[subject];
      j += 1;
    }
    score.average = getAverageMark(avegareMarks);
    console.log(score);
    return score;
  }
  
  function getAverageMark(marks) {
    let avarege = 0;
    if (marks.length > 0) {
      let sum = 0;
      for (i = 0; i < marks.length; i++) {
        sum += marks[i];
      }
      avarege = sum/marks.length;
    }  
    return avarege;
  }
  
  datum = {
    algebra: [2,4,5,2,3,4],
    geometry: [3,2,2],
    chemistry: [],
    phisics:[1],
    music: [1,1,2,-1,2],
    javascript: [5,2,5,2,5,2,5,2],
    python: [5,5,5,4,4,5,2],
    judo: [3,3,3,5,5],
    boxing: [5,5,5,5],
    shooting: [5,5,5,5,5]
  };
  
  getAverageScore(datum);

  //Задача 3
  function getPersonData(secretData) {
    let result = new Object;
    for (let i in secretData) {
      if (i =="aaa") {
        result.firstName = getDecodedValue(secretData[i]);
      } else if (i =="bbb") {
        result.lastName = getDecodedValue(secretData[i]);
      }
    }
    console.log(result);
  }
  
  function getDecodedValue(secret) {
    if (secret == 0) {
      name = "Родриго";
    } else if (secret == 1) {
      name = "Эмильо";
    }
    return name;
  }
  
  secretData = {
    aaa: 1,
    bbb: 0
  }
  getPersonData(secretData);