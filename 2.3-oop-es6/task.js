// Задание 1,2
class Weapon  {
  constructor (weapon){
    this.name = weapon.name;
    this.attack = weapon.attack;
    this.durability = weapon.durability;
    this.range = weapon.range;
    this.startDurability = weapon.durability;
  }
  takeDamage(damage){
        this.durability -= damage;
        if (this.durability < 0 ) {this.durability = 0};
    }
    getDamage() {
      if (this.durability >= this.startDurability * 0.3) {
        return this.attack;
       } else if (this.durability == 0) {
        return 0;
       } else {  
        return (this.attack/2);
      }
    }
    isBroken() {
      if (this.durability > 0) {
        return false;
      } else {
        return true;
      }
    }
}

class Bow extends Weapon {
   constructior () {
     this.durability = 200;
  }
}
class Sword extends Weapon {
    constructior (weapon) {
     this.range = 1;
    }
}

class Staff extends Weapon {
    constructior (durability) {
     this.durability = 300;
    }
}

const sword = new Sword({
  name:'Старый меч',
  attack: 20,
  durability: 10,
  range: 1,
});

const arm = new Weapon({
  name:'Рука',
  attack: 1,
  durability: 1/0,
  range: 1,
});
const bow = new Weapon({
  name:'Лук',
  attack: 10,
  durability: 300,
  range: 3,
});
const sword1 = new Sword({
  name:'Меч',
  attack: 25,
  durability: 500,
  range: 1,
});
const knife = new Weapon({
  name:'Нож',
  attack: 5,
  durability: 300,
  range: 1,
});
const staff = new Weapon({
  name:'Посох',
  attack: 8,
  durability: 300,
  range: 2,
});

class SpecialSword extends Sword {

}

const poleaxe = new SpecialSword ({
  name: 'Секира',
  attack: 27,
  durability: 800,
})

console.log (poleaxe);

//class LongBow extends Bow {
//  constructior (durability) {
//    super(durability);
//    }

//class StormStaff extends Staff {
//   constructior (durability) {
//    super(durability);
//}




// Задание 3
class StudentLog {
  constructor (name,grade,subject){
    this.name = name;
    this.subject = [];
    this.grade = [[],[],[],[],[],[],[],[],[],[],[],[]]; //как-то можно автоматически сделать его безразмерным?
    this.subjectGrade = new Object();
  }

  getName() {
    return this.name;
  }

  addGrade(grade, subject) {
      if (typeof(grade) != "number" || grade < 2 || grade > 5) {
        alert('Неправильная оценка')
        return
      } 
      if (this.subject.includes(subject) === false){
        this.subject.push(subject);
      }
      let i = this.subject.indexOf(subject);
      this.grade[i].push(grade);
      this.subjectGrade[subject] = this.grade[i];
    return this.subjectGrade;
  }

  getAverageBySubject(subject){
    if (this.subject.includes(subject) === false){
      return 0;
    }
    let sum = 0;
    for (let i in this.subjectGrade[subject]) {
      sum += this.subjectGrade[subject][i];
    }
    return Math.round(sum/this.subjectGrade[subject].length);
  }

  getTotalAverage(){
    let sum = 0;
    let s = 0;
    for (let i in this.subjectGrade){
      for (let j in this.subjectGrade[i]){
        sum += this.subjectGrade[i][j];
        s += 1;
      }
    }
    return Math.round(sum/s);
  }
}

const log = new StudentLog('Олег Попов');
console.log(log.getName());
console.log(log.addGrade(3,'algebra'));
console.log(log.addGrade('excelent!','math'));
console.log(log.addGrade(5,'geometry'));
console.log(log.addGrade(3,'algebra'));
console.log(log.addGrade(2,'algebra'));
console.log(log.addGrade(4,'geometry'));
console.log(log.addGrade(25,'geometry'));

console.log(log.getAverageBySubject('geometry'));
console.log(log.getAverageBySubject('algebra'));
console.log(log.getTotalAverage());

//const grade1 = {'algebra':[3,4],'geometry':[5,4]};
//console.log(grade1);
//console.log(grade1.algebra[0]);
//const grade2 = new Object;
//const x = 'algebra';
//const y = 'geometry';
//grade2[x] = [3,4];
//grade2[y] = [5,4];
//console.log(grade2);

