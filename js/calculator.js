function plus() {
    let firstNumber, secondNumber;
    //value - свойство отвечающие за ввод пользователя
    firstNumber = document.getElementById('firstNumber').value;
    //обрезаем строку до числа, exempl: 5a>5, 56yuu>56
    firstNumber = parseInt(firstNumber);

    secondNumber = document.getElementById('secondNumber').value;
    secondNumber = parseInt(secondNumber);

    result = firstNumber + secondNumber;

    //innerHTML -записывает  значения  внутырь тега
    document.getElementById('out').innerHTML = result;
}

function minus() {
    let firstNumber, secondNumber;
    firstNumber = document.getElementById('firstNumber').value;
    firstNumber = parseInt(firstNumber);

    secondNumber = document.getElementById('secondNumber').value;
    secondNumber = parseInt(secondNumber);

    result = firstNumber - secondNumber;

    document.getElementById('out').innerHTML = result;
}

function multiply() {
    let firstNumber, secondNumber;
    firstNumber = document.getElementById('firstNumber').value;
    firstNumber = parseInt(firstNumber);

    secondNumber = document.getElementById('secondNumber').value;
    secondNumber = parseInt(secondNumber);

    result = firstNumber * secondNumber;

    document.getElementById('out').innerHTML = result;
}

function carve() {
    let firstNumber, secondNumber;
    firstNumber = document.getElementById('firstNumber').value;
    firstNumber = parseInt(firstNumber);

    secondNumber = document.getElementById('secondNumber').value;
    secondNumber = parseInt(secondNumber);

    result = firstNumber / secondNumber;

    document.getElementById('out').innerHTML = result;
}