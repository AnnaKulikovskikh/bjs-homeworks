class Weapon  {
    constructor (name, attack, durability,range) {
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.range = range;
        this.startDurability = durability;
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



class Arm extends Weapon {
    constructor() {
      this.name = name;
      this.durability = 1/0;
      this.range = range;
    }
  }
  
  const arm =  new Arm ('Рука',1,1/0,1);
  const hairArm = new Arm('Волосатая лапа',5,2);


const arm =  new Weapon('Рука',1,1/0,1);
const bow =  new Weapon('Лук',10,200,3);
const sword =  new Weapon('Меч',25,500,1);
const knife =  new Weapon('Нож',5,300,1);
const staff =  new Weapon('Посох',8,300,2);

a = arm
a.takeDamage(30);
console.log(a.durability);
console.log(a.getDamage());
console.log(a.isBroken());