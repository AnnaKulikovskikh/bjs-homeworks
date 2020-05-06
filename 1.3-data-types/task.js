function calculateTotalMortgage(percent, contribution, amount, date) {
    "use strict";
    if (isNaN(+percent)) {
        return(`Параметр \"Процентная ставка\" содержит неправильное знаение \"${percent}\"`);
    };
    if (isNaN(+contribution)) {
        return(`Параметр \"Первоначальный взнос\" содержит неправильное знаение \"${contribution}\"`);
    };
    if (isNaN(+amount)) {
        return(`Параметр \"Сумма кредита\" содержит неправильное знаение \"${amount}\"`);
    };
    const bodyCredit = parseInt(amount) - parseInt(contribution);
    const today = new Date();
    const year = date.getFullYear() - today.getFullYear();
    const month = date.getMonth() - today.getMonth();
    if (date.getDate() < date.today) month = month-1;
    month += year*12; // month - число месяцев
    const monthPercent = parseInt(percent)/12/100;
    const pay = bodyCredit * (monthPercent + monthPercent/(Math.pow((1 + monthPercent),month) - 1));
    const totalAmount = Number((pay * month).toFixed(2));
    // код для задачи №1 писать здесь
    return totalAmount;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    return  (`Привет мир! Меня зовут ${name || "Аноним"}`);
}