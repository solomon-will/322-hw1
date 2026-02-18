document.write("<table border='1'>");
document.write("<tr><th>X</th><th>Operator</th><th>Y</th><th>Result</th></tr>");

let results = [];


while (true) {

    let x = prompt("Enter the first number:");
    
    if (x === null) break;  
    
    let operator = prompt("Enter an operator (+, -, *, /, %):");
    
    if (operator === null) break;
    
    let y = prompt("Enter the second number:");
    
    if (y === null) break;

    let result;

    if (isNaN(parseFloat(x)) || isNaN(parseFloat(y))) {
        result = "invalid input";

    } else {
        switch(operator){
        case "+":
            result = parseFloat(x) + parseFloat(y);
            break;
        case "-":
            result = parseFloat(x) - parseFloat(y);
            break;
        case "*":
            result = parseFloat(x) * parseFloat(y);
            break;
        case "/":
            if (parseFloat(y) === 0) {
                result = "computation error";
            } else {
                result = parseFloat(x) / parseFloat(y);
            }   
            break;
        case "%":
            if (parseFloat(y) === 0) {
                result = "computation error";
            } else {
                result = parseFloat(x) % parseFloat(y);
            }
            break;
        default:
            result = "computation error"

       
        }
    }
    document.write("<tr><td>" + x + "</td><td>" + operator + "</td><td>" + y + "</td><td>" + result + "</td></tr>");
    if (!isNaN(result)) {
        results.push(result)
    }

}
let min = Math.min(...results)
let max = Math.max(...results)
let total = results.reduce((sum, num) => sum + num, 0)
let avg = total / results.length;

document.write("<table border='1'>");
document.write("<tr><th>Min</th><th>Max</th><th>Average</th><th>Total</th></tr>");

document.write("<tr><td>" + min + "</td><td>" + max + "</td><td>" + avg + "</td><td>" + total + "</td></tr>");
document.write("</table>");

