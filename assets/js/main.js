let input = document.getElementById("input");
let output= document.getElementById("output");
let firstNum = "";
let operator = "";
let secondNum = "";
let sum = "";
let colorPrimary = "#b784ff" ;
let colorSecondary = "#fff" ;

function inpNum(num) {
    if (operator === "") {
        firstNum += num;
        input.value = firstNum;
        output.innerHTML = firstNum
    }
    else {
        secondNum += num;
        thirdNum = secondNum
        input.value += secondNum;
        console.log(thirdNum.length);
        if (parseInt(secondNum) >= 10) {
            input.value = input.value.substr(0, input.value.length - operator.length - thirdNum.length- (secondNum.length-2));
            console.log(input.value);
            input.value += thirdNum;
            console.log(input.value);
        }
        switch (operator) {
            case '+':
                sum = Number(firstNum)+ Number(secondNum);
                break;
            case '-':
                sum = firstNum - secondNum;
                break;
            case '*':
                sum = firstNum * secondNum;
                break;
            case '/':
                sum = firstNum / secondNum;
                break;
            case '-1':
                sum = firstNum * -1;
                break;
        }
        output.innerHTML = sum
    }
}
function delAll(e) {
    input.value = "";
    firstNum = "";
    operator = "";
    output.innerHTML ="";
    secondNum = "";
    input.style.fontSize = 50 +"px";
    output.style.fontSize = 30 + "px"
}
function addOperator(op) {
    if (op != '-1') {
        if (operator === "") {
            operator = op;
            input.value += operator;
        }   
    }else {
        operator = op ;
        input.value *= operator;
    }
}

function addDot(e) {
    if(!(input.value[input.value.length-1] == ".")) {
        input.value +="."
    }
}
function del(e) {
    input.value = input.value.slice(0, -1);
}
function result(e){
    input.style.color = colorPrimary;
    output.style.color = colorSecondary;
    input.style.fontSize = 30 +"px";
    output.style.fontSize = 50 + "px"
}
