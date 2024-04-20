import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter your first number", type: "number", name: "firstNumber" },
  { message: "Enter your second number", type: "number", name: "secondNumber"},
  {
    message: "Select one of the operators to perform operation",
    type: "list",
    name: "operator",
    choices: ["Addition","Subtraction","Division","Multiplication","Modulus","Exponention","BMI Calculator"],
  },
]);

//conditional statement
if(answer.operator === "Addition") {
    console.log(answer.firstNumber+answer.secondNumber);
} else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber-answer.secondNumber);
}else if (answer.operator === "Division") {
    console.log(answer.firstNumber/answer.secondNumber);
}else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber*answer.secondNumber);
} else if (answer.operator === "Modulus") {
    console.log(answer.firstNumber%answer.secondNumber);
} else if (answer.operator === "Exponention") {
    console.log(answer.firstNumber**answer.secondNumber);
} else if (answer.operator === "BMI Calculator") {
    console.log(answer.firstNumber/(answer.secondNumber*answer.secondNumber));
}