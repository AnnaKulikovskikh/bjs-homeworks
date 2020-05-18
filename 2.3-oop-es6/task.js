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

class Bow extends Weapon {
   constructior (durability) {
    this.durability = 200;
  }
}
class Sword extends Weapon {
    constructior (attack) {
     this.attack = 500;
    }
}
class Knife extends Weapon {
      
}
class Staff extends Weapon {
    constructior (durability) {
     this.durability = 300;
    }
}
const arm =  new Weapon ('Рука',1,1/0,1);     
const bow =  new Bow('Лук',10,200,3);
const sword =  new Sword('Меч',25,500,1);
const knife =  new Knife('Нож',5,300,1);
const staff =  new Staff('Посох',8,300,2);

class LongBow extends Bow {
  constructior (durability) {
    super(durability);
    }

}
class PoleAxe extends Sword {
   constructior (attack) {
    super(attack);
}
class StormStaff extends Staff {
   constructior (durability) {
    super(durability);
}
const longBow = new LongBow('Длинный лук', 15, 4);
const poleAxe = new PoleAxe('Секира', 27, 800);
const stormStaff = new StormStaff('Посох бури', 10, 3);

a = longBow;
a.takeDamage(30);
console.log(a.durability);
console.log(a.getDamage());
console.log(a.isBroken());




