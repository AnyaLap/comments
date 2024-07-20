const text1 = document.querySelector('.text1');
const text2 = document.querySelector('.text2');
const text3 = document.querySelector('.text3');
const text4 = document.querySelector('.text4');
const text5 = document.querySelector('.text5');
const text6 = document.querySelector('.text6');
const text7 = document.querySelector('.text7');



//Задание 1
let grades = [];// Создаем пустой массив
let length = 12; // Длина массива

// Заполняем массив случайными числами
for (let i = 0; i < length; i++) {
  grades.push(Math.floor((Math.random() * 100) + 1)); // Генерируем случайное число от 1 до 100 и добавляем его в массив
}

console.log(grades); // Выводим результат
text1.textContent = `Оценки студентов: ${grades}`;

//Задание 2
let average = grades.reduce((a, b) => (a + b)) / grades.length;// Вычисляем средний балл  
console.log(average.toFixed(2));// Выводим результат

text2.textContent = `Средний балл: ${average.toFixed(2)}`;

//Задание 3
const copyGrades = [...grades];
const sortGrades = copyGrades.sort((a, b) => (a - b));// Вычисляем максимальный балл
console.log(sortGrades[copyGrades.length - 1]);// Выводим результат

text3.textContent = `Максимальный: ${sortGrades[copyGrades.length - 1]}`;

//Задание 4
console.log(sortGrades[0]);// Выводим результат (минимальный балл)

text4.textContent = `Минимальный балл: ${sortGrades[0]}`;

//Задание 5
const filterGrades1 = grades.filter((n) => n >= 60);// Вычисляем количество человек с положительной оценкой
console.log(filterGrades1.length);// Выводим результат

text5.textContent = `Количество студентов с положительной оценкой: ${filterGrades1.length}`;

//Задание 6
const filterGrades2 = grades.filter((n) => n < 60);// Вычисляем количество человек с отрицательной оценкой
console.log(filterGrades2.length);// Выводим результат

text6.textContent = `Количество студентов с отрицательной оценкой: ${filterGrades2.length}`;

//Задание 7
let letterGrades = grades.map(function(item){
   
    if (item < 100 && item >= 80){
        return 'A';
    } else if(item < 80 && item >= 60){
        return 'B';
    } else if(item < 60 && item >= 40){
        return 'C';
    } else if(item < 40 && item >= 20){
        return 'D';
    } else 
        return 'E';
 });// Преобразовываем числовые оценки в формат буквенных
 console.log(letterGrades);// Выводим результат

 text7.textContent = `Оценки студентов в буквенном формате: ${letterGrades}`;