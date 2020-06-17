class AlarmClock{
    constructor(timerId){
      this.alarmCollection = [];
      this.timerId = {};
    }
  
    getCurrentFormattedTime(){
      let date = new Date();
      return String(date.getHours()) + ':' + String(date.getMinutes());
    }
  
    start(){
  
      let checkClock = (alarm) => 
      {if (alarm.time == this.getCurrentFormattedTime()){
          alarm.callback();
        }
      }
      this.timerId = setInterval(() => this.alarmColletion.forEach(element => checkClock(element)),1000);  
    }
  
    stop(){
      if (this.timerId != {}){clearInterval(this.timerId)};
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
      //this.alarmCollection.forEach(item => this.removeClock(item.id));
