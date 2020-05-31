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
      if (this.durability >= this.startDurability * 0.3 || this.durability == 1/0) {
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

class Sword extends Weapon {
  constructor (weapon){
    super({
      name: 'Меч',
      attack: 25,
      durability: 500,
      range: 1,  
    });
  }
}

const newSword = new Sword();
console.log(`sword ${newSword.attack}`);

class Bow extends Weapon {
  constructor (weapon){
    super({
      name: 'Лук',
      attack: 10,
      durability: 300,
      range: 3,
    });
  }
}

class Staff extends Weapon {
  constructor (weapon){
    super({
      name: 'Посох',
      attack: 8,
      durability: 300,
      range: 2,
    });
  }
}

class Knife extends Weapon {
  constructor (weapon){
     super({
      name: 'Нож',
      attack: 5,
      durability: 300,
      range: 1,
    });
  }  
}

class Arm extends Weapon {
  constructor (weapon){
    super({
      name: 'Рука',
      attack: 1,
      durability: 1/0,
      range: 1,
    });
  }
}

class LongBow extends Bow {
  constructor (){
    super();
    this.name = 'Длнный лук';
    this.attack = 15;
    this.range = 4;
  }
}
class Axe extends Sword {
  constructor (){
    super();
    this.name = 'Секира';
    this.attack = 27;
    this.durability = 800;
  }
}
class StormStaff extends Staff {
  constructor (){
    super();
    this.name = 'Посох бури';
    this.attack = 10;
    this.range = 3;
  }
}
const sword1 = new Sword({
  name:'Меч',
  attack: 25,
  durability: 500,
});
const sword = new Sword();
const poleaxe = new Sword({
  name:'Секира',
  attack: 27,
  durability: 800,
});

const arm = new Arm();

const bow = new Bow();

const longBow = new LongBow();
alert(longBow);

const knife = new Knife();
const staff = new Staff();

const stormStaff =  new Staff({
  name:'Посох Бури',
  attack: 10,
  range:3,
});


a = longBow;
a.takeDamage(8);
console.log(`range = ${a.range}`);
console.log(`прочность после удара ${a.durability}`);
console.log(`урон после удара ${a.getDamage()}`);
console.log(`Сломан ${a.isBroken()}`);




// Задание 3
class StudentLog {
  constructor (name,grade,subject){
    this.name = name;
    this.subject = [];
    this.grade = [];//[[],[],[],[],[],[],[],[],[],[],[],[]];
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
    return sum/s.toFixed(2);
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