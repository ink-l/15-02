function numbers(number1, number2) {
    if(number1 > number2){
        console.log('первое число больше')
    }else if(number2 > number1){
        console.log("второе число больше")
    }else {
        console.log("они равны")
    }
}

const number = {
    number1: prompt('первое число'),
    number2: prompt("второе число")
}

numbers(number.number1, number.number2)
