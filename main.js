import inquirer from "inquirer";
let calculator = await inquirer.prompt([{
        type: "number",
        name: "num1",
        message: "enter your first number"
    }, {
        type: "number",
        name: "num2",
        message: "enter your second number"
    },
    {
        type: "list",
        name: "operator",
        message: "enter your operator",
        choices: ['+', '-', '/', '*']
    }
]);
if (calculator.operator === '+') {
    console.log(`your answer is ${calculator.num1}${calculator.operator}${calculator.num2}=${calculator.num1 + calculator.num2}`);
}
else if (calculator.operator === '-') {
    console.log(`your answer is ${calculator.num1}${calculator.operator}${calculator.num2}=${calculator.num1 - calculator.num2}`);
}
else if (calculator.operator === '*') {
    console.log(`your answer is ${calculator.num1}${calculator.operator}${calculator.num2}=${calculator.num1 * calculator.num2}`);
}
else if (calculator.operator === '/') {
    console.log(`your answer is ${calculator.num1}${calculator.operator}${calculator.num2}=${calculator.num1 / calculator.num2}`);
}
else {
    console.log("your input is not defined");
}
;
console.log(calculator);
