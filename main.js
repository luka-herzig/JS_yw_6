let al = prompt("Я дуже вибачаюсь за затримку, в мене ноут скидали на заводьські налаштування. Напишіть будь ласка ок або не ок");
if (al === "ок") {
    alert("Дякую за розуміння. А тепер я запрошую вас до мого дз 6");
} else if (al === "не ок") {
    alert("Ну ладно, на наступний раз буду встигати за дедлайнами")
}



let number = 1;

while (number <= 10) {
    console.log(number);
    number++;
}

let lesson = "Наступне завдання";
console.log(lesson);


for (let numbers = 2; numbers <= 20; numbers++) {  //Умова numbers <= 20 забезпечує виконання циклу, поки число не перевищить 20.  //З кожною ітерацією змінна numbers збільшується на 1 (number++).
    if (numbers % 2 !== 0) {
      continue;
    }       
    console.log(numbers);                                            
}


console.log(lesson);

for (let i = 1; i <= 10; i++)  { //Умова i <= 10 забезпечує виконання циклу 10 разів.
   let result = 7 * i;
   console.log(`7 * ${i} = ${result}`);
}

console.log(lesson);

const array = [1, 2, 3, 4, 5];
let y = 0;

while (y < array.length) {
    console.log(array[y]);
    y++
}

console.log(lesson);

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let h = 0; h < num.length; h++) {
    if (num[h] === 7) {
        break;
    }
    console.log(num[h]);
}

console.log("Передостаннє завдання. Юхуу")

let n = 23;

for (let k = 1; k <= 30; k++) {
    if (k >= n) {
        break;
    }
    console.log(k);
}

console.log("Останнє завдання. Урааа")

let d = 1;

while (d <= 20) {
    if (d % 3 === 0) {
        d++;
        continue;
    }
    console.log(d);
    d++
}
