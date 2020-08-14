let calculator = {
  // ваш код
  read(a, b){
    calculator.numberOne = a;
    calculator.numberTwo = b;
  },
  sum(){
    return this.numberOne + this.numberTwo;
  },
  mul(){
    return this.numberOne * this.numberTwo;
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
