  function getCurrentFormattedTime(){
    let date = new Date();
    return String(date.getHours()) + ':' + String(date.getMinutes());
  }

class AlarmClock{
  constructor(timerId){
    this.alarmCollection = [];
    this.timerId = timerId;
  }

  addClock(time,callback,id){
    if (id==undefined){throw new Error('Невозможно идентифицировать будильник. Параметр id не передан.')};
    if (this.alarmCollection.find(item => item.id==id)) {console.error('id repeat');
    } else {
      this.alarmCollection.push({time: time, callback: callback(), id: id});
    }  
  }

  removeClock(id){
    if (this.alarmCollection.find(item => item.id==id)){
      this.alarmCollection.splice(this.alarmCollection.findIndex(item => item.id==id),1);
    }
  }

  start(){
    //function checkClock(){ 
      if (this.alarmCollection.forEach(element=>element.time)==getCurrentFormattedTime()){
        console.log(element.callback);
      }

      //if (getCurrentFormattedTime == )

    //}

  }

//Создайте функцию проверки (checkClock), которая принимает звонок и проверяет: если текущее время совпадает со временем звонка, то вызывайте колбек.

  stop(){

  }

  printAlarms(){
    console.log(`Печать всех будильников в количестве: ${this.alarmCollection.length}`);
    this.alarmCollection.forEach(element=>console.log(`Будильник №${element.id} заведен на ${element.time}`));
  }

  clearAlarms(){
  }
}


let phoneAlarm = new AlarmClock();
phoneAlarm.addClock('20:23',()=>console.log('Пора вставать'),1);
phoneAlarm.addClock('09:01',()=>{console.log('Давай, вставай уже!'); phoneAlarm.removeClock(2)},2);
phoneAlarm.addClock('20:32',()=>console.log('Иди учиться'),3);
//phoneAlarm.removeClock(1);
//phoneAlarm.getCurrentFormattedTime();
phoneAlarm.start();
//phoneAlarm.printAlarms();
