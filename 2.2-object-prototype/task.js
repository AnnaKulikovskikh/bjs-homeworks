function getAnimalSound(animal) {
    if (animal) {
        return animal.sound;
    } else {
        return null;
    }    
    
}
//let getAnimalSound = animal => animal.sound;
// но при отсутствии anima null не вернет

function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    if (marks.length === 0) {
        return 0;
    let summary = 0;
    for (let i of marks){
        summary += parseFloat(i);
    }
    const average = Math.round(summary/marks.length);
    }    
    return average;
}

//let checkBirthday = birthday => (Date.now() - birthday)/31557600000 >=18;
function checkBirthday(birthday) {
    // код для задачи №3 писать 
    //now = date.setMilliseconds(ms);
    return (Date.now() - (+new Date(birthday))/31557600000 >=18;
}