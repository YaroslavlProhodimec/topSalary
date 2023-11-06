// У нас есть объект:

let user = {
  name: "John",
  years: 30,
};
let { name, years: age, isAdmin = false } = user;
// Напишите деструктурирующее присваивание, которое:
//
// свойство name присвоит в переменную name.
//   свойство years присвоит в переменную age.
//   свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)

console.log(name);
console.log(age);
console.log(isAdmin);
// Максимальная зарплата
// важность: 5
// У нас есть объект salaries с зарплатами:

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};
const topSalary = (input) => {
  let obj = Object.entries(input);
  let sum = 0;
  for (let i = 0; i < obj.length; i++) {
    let char = obj[i][1];
    if (sum < char) {
      sum = char;
    }
  }
  return sum;
};
console.log(topSalary(salaries));
// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.
//   Если объект salaries пустой, то нужно вернуть null.
//   Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
//   P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.
