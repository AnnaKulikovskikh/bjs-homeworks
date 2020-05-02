function calculateTotalMortgage(percent, contribution, amount, date) {
    "use strict";
    let bodyCredit = parseInt(amount) - parseInt(contribution);
    let today = new Date();
    let year = date.getFullYear() - today.getFullYear();
    let month = date.getMonth() - today.getMonth();
    if (date.getDate() < date.today) month = month-1;
    month += year*12; // month - число месяцев
    let monthPercent = parseInt(percent)/12/100;
    let pay = bodyCredit * (monthPercent + monthPercent/(Math.pow((1 + monthPercent),month) - 1));
    let totalAmount = Number((pay * month).toFixed(2));
    // код для задачи №1 писать здесь
    return totalAmount;
}

function getGreeting(name) {
    if (name == undefined || name == "") {
        name = "Аноним";
    }
    let greeting = `Привет мир! Меня зовут ${name}.`;
    console.log(greeting); 
    // код для задачи №2 писать здесь
    return greeting;
}