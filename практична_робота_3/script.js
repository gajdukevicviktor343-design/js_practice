// ===== Завдання 1. Арифметичні оператори =====
let a = Number(prompt("Завдання 1\nВведіть перше число:"));
let b = Number(prompt("Введіть друге число:"));

console.log("Додавання:", a + b);
console.log("Віднімання:", a - b);
console.log("Множення:", a * b);
console.log("Ділення:", a / b);
console.log("Залишок від ділення:", a % b);

// ===== Завдання 2. Оператори порівняння =====
let age = Number(prompt("Завдання 2\nВведіть ваш вік:"));
console.log("Ви повнолітній:", age >= 18);

// ===== Завдання 3. Логічні оператори =====
let hasSub = prompt("Завдання 3\nУ вас є абонемент? (true/false)") === "true";
let money = Number(prompt("Скільки грошей на рахунку?"));

console.log(
  hasSub || money > 100
    ? "Доступ дозволено"
    : "Доступ заборонено"
);

// ===== Завдання 4. Тернарний оператор =====
let num = Number(prompt("Завдання 4\nВведіть число:"));
console.log(num % 2 === 0 ? "Число парне" : "Число непарне");

// ===== Завдання 5. Оператори присвоєння =====
let balance = Number(prompt("Завдання 5\nВаш початковий баланс:"));

balance += 500;
balance -= 200;
balance += balance * 0.05;

console.log("Підсумковий баланс:", balance);

// ===== Завдання 6. Оператор switch =====
let day = Number(prompt("Завдання 6\nВведіть число (1-7):"));

switch (day) {
  case 1: console.log("Понеділок"); break;
  case 2: console.log("Вівторок"); break;
  case 3: console.log("Середа"); break;
  case 4: console.log("Четвер"); break;
  case 5: console.log("Пʼятниця"); break;
  case 6: console.log("Субота"); break;
  case 7: console.log("Неділя"); break;
  default: console.log("Невірне число");
}

// ===== Завдання 7. Побітові оператори =====
let x = Number(prompt("Завдання 7\nВведіть перше число:"));
let y = Number(prompt("Введіть друге число:"));

console.log("x & y =", x & y);
console.log("x | y =", x | y);
console.log("x ^ y =", x ^ y);
console.log("x << 1 =", x << 1);
console.log("x >> 1 =", x >> 1);
