function getResult(a,b,c){
    "use strict";
    let x = [];
    let d;
    d = b**2 - 4*a*c;
    if (d == 0) {
        x[0]= (-b)/(2*a);
    } else if (d>0) {
        x[0] = (-b + Math.sqrt(d))/(2*a);
        x[1] = (-b - Math.sqrt(d))/(2*a);
    }
    // код для задачи №1 писать здесь
    return x;
}

function getAverageMark(marks){
    let averageMark;
    let iteration;
    if (marks.length < 5){
        iteration = marks.length;
    } else {
        iteration = 5;
    }
    if (iteration == 0) {
        averageMark = 0;
    } else {
        let sum = 0;
        for (i = 0; i <= iteration-1; i++){
            sum+= marks[i];
        }
        averageMark = sum/iteration;
    }
    // код для задачи №2 писать здесь
    return averageMark;
}

function askDrink(name,dateOfBirthday){
    let todayFull = new Date();
    //let today = todayFull.getFullYear(todayFull);
    //let yearOfBirth = dateOfBirthday.getFullYear(dateOfBirthday);
    //let age = today - yearOfBirth;
    let age = (todayFull - dateOfBirthday)/(60*60*24*1000*365);
    if (age >= 18) {
        result = "Не желаете ли олд-фэшн, " + name;
    } else {
        result = "Сожалею, " + name + ", но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!"
    }
    // код для задачи №3 писать здесь
    return result;
}