let input;
const numbers = [];
let total = 0;

do {
  input = prompt('Введите произвольное число');
  numbers.push(Number(input));
} while (input !== null);

if (numbers.length > 0) {
  for (const number of numbers) {
    total += number; 
  }
};
alert(`Общая сумма чисел равна ${total}`);