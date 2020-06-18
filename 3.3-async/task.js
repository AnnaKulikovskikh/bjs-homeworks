class AlarmClock{
  constructor(timerId){
    this.alarmCollection = [];
    this.timerId = null;
  }

  getCurrentFormattedTime(){
    let date = new Date();
    let zero = (str) => {if (str.length == 1){return '0'+str} else{return str}};
    return zero(String(date.getHours())) + ':' + zero(String(date.getMinutes()));
  }

  start(){
    console.log(this.getCurrentFormattedTime());

    let checkClock = (alarm) => {if (alarm.time == this.getCurrentFormattedTime()){ alarm.callback();
      }
    }
    this.timerId = setInterval(() => this.alarmCollection.forEach(element => checkClock(element)),1000);
  }

  stop(){
    if (this.timerId){clearInterval(this.timerId)};
    this.timerId = null;
  }

  addClock(time,callback,id){
    if (id==undefined){throw new Error('Невозможно идентифицировать будильник. Параметр id не передан.')};
    if (this.alarmCollection.find(item => item.id==id)) {console.error('id repeat');
    } else {
      this.alarmCollection.push({time: time, callback: callback, id: id});
    }  
  }

  removeClock(id){
    if (this.alarmCollection.find(item => item.id==id)){
      this.alarmCollection.splice(this.alarmCollection.findIndex(item => item.id==id),1);
    }
  }

  printAlarms(){
    console.log(`Печать всех будильников в количестве: ${this.alarmCollection.length}`);
    this.alarmCollection.forEach(element=>console.log(`Будильник №${element.id} заведен на ${element.time}`));
  }

  clearAlarms(){
    this.stop();
    this.alarmCollection = [];
  }
}


function testCase(){
  let phoneAlarm = new AlarmClock();
  phoneAlarm.addClock('11:10',()=>console.log('Пора вставать'),1);
  phoneAlarm.addClock('11:11',()=> {console.log('Давай, вставай уже!'); phoneAlarm.removeClock(2)},2);
  phoneAlarm.addClock('11:11',()=>console.log('Иди умываться'));
  phoneAlarm.addClock('11:12',() => {
    console.log('Вставай, а то проспишь!');
    phoneAlarm.clearAlarms();
    phoneAlarm.printAlarms();
  },3);
  phoneAlarm.addClock('11:13',()=>console.log('Вставай!'),1);
  phoneAlarm.printAlarms();
  phoneAlarm.start();
}

testCase();
