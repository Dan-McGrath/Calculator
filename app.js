

const add = (num1, num2) => {
    return num1 + num2
}

const subtract = (num1, num2) => {
    return num1 - num2
}

const multiply = (num1, num2) => {
    return num1 * num2
}

const divide = (num1, num2) => {
    if (num2 === 0) {
        alert('Cannot divide by 0')
    }
    answer = (num1 / num2);
    if(num1 % num2 === 0) {
        return answer
    }
    return answer.toFixed(5);
    
}
const current = document.querySelector('.current');
const expression = document.querySelector('.expression');
let operator;

const getOperator = (e) => {
    operator = e.target.dataset.operation;
    expression.textContent = `${current.textContent} ${operator}`;
    return operator
}

const getNumber = (e) => {
    num = e.target.dataset.number;
    current.textContent = num
    return num
}






// const operate = (num1, operator, num2) => {
//     if (operator.dataset.operation === 'add') {
//         return add(num1, num2);
//     } else if(operator.dataset.operation === 'subtract') {
//        return subtract(num1, num2);
//     } else if(operator.dataset.operation === 'multiply') {
//         return multiply(num1, num2);
//     } else if(operator.dataset.operation === 'divide') {
//         return divide(num1, num2);
//     } else if(operator.dataset.operation === 'equal') {
//         return num1
//     }
// }



const number = document.querySelectorAll('.number');
const operation = document.querySelectorAll('.operation');

const addClickOperator = () => {
    for (let i = 0; i < operation.length; i++) {
        operation[i].addEventListener('click', getOperator) 
    }
    
}
const addClickNumber = () => {
    for(let i = 0; i < number.length; i++) {
        number[i].addEventListener('click', getNumber)
    }
}
addClickNumber();
addClickOperator();