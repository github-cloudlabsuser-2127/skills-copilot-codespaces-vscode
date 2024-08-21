const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function calculator() {
  const num1 = parseFloat(await askQuestion('Enter the first number: '));
  const num2 = parseFloat(await askQuestion('Enter the second number: '));
  const operation = await askQuestion('Enter the operation (+, -, *, /): ');

  let result;
  switch (operation) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        console.log('Error: Division by zero is not allowed.');
        rl.close();
        return;
      }
      break;
    default:
      console.log('Error: Invalid operation.');
      rl.close();
      return;
  }

  console.log(`The result is: ${result}`);
  rl.close();
}

calculator();