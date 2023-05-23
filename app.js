

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
