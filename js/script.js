"use strict"

const calculator = {
    
    read: function () {
        this.firstNum = +prompt(`Введите первое число`);
        this.secondNum = +prompt(`Введите второе число`);        
    },

    sum: function () {
        if (isNaN(this.firstNum) || isNaN(this.secondNum)) {
            return (`Ошибка, Вы ввели неверные данные!`);
        }                 
        return this.firstNum + this.secondNum;
    },

    mul: function () {
        if (isNaN(this.firstNum) || isNaN(this.secondNum)) {
            return (`Ошибка, введите число!`);
        }  
        return this.firstNum * this.secondNum;
    }

}

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());


