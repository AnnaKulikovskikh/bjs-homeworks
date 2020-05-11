function getAnimalSound(animal) {
    if (isNaN(animal)) {
        return null;
    } else {
        let animalSound = animal.sound;
        return animalSound;
    }    
    // код для задачи №1 писать здесь
    // return animalSound;
}

function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    let average = 0;
    for (let i of marks){
        average += i;
    }
    average = Math.round(average/marks.length);
    if (isNaN(average)) {
        average = 0;
    }    
    return average;
}

function checkBirthday(birthday) {
    // код для задачи №3 писать 
    //now = date.setMilliseconds(ms);
    now =  Date.now();
    diff = now - birthday;
    age = diff/31557600000;
    if (age>=18) {
      let verdict = true;
    } else {
      let verdict = false;
    }
    return verdict;
}