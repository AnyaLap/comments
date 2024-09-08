
//Находим элементы для вывода по клику на кнопку
const buttonSend = document.getElementById("buttonSend");
const nocheckbox = document.querySelector('#no');
const yescheckbox = document.querySelector('#yes');
const checkboxes = document.querySelectorAll('.checkbox');

// Чекбокс НАЧАЛО
//Функция для No
nocheckbox.addEventListener('change',function(){
  if(this.checked){
    document.getElementById("name").value = 'username';
    document.querySelector("#labelName").style.display = 'none';
    document.querySelector("#name").style.display = 'none';
  } else {
    document.querySelector("#labelName").style.display = 'block';
    document.querySelector("#name").style.display = 'block';
  }
})
// //Функция для Yes
// yescheckbox.addEventListener('change',function(){
//   if(!this.checked){
//     document.getElementById("name").value = 'username';
//     document.querySelector("#labelName").style.display = 'none';
//     document.querySelector("#name").style.display = 'none';
//   } else {
//     document.querySelector("#labelName").style.display = 'block';
//     document.querySelector("#name").style.display = 'block';
//   }
// })

//Для того чтобы можно было выбрать лишь одно значение 
checkboxes.forEach(element => {
  element.addEventListener('change',function(){
    if(this.checked){
      checkboxes.forEach(el => {
        if(el!==this){
          el.checked=false
        }
      })
    }
  })
});

// Чекбокс КОНЕЦ

//Функция вывода комментария
const makeCom = () =>{
//Находим элементы
const yourName = document.getElementById("name").value;
const yourAvatar = document.getElementById("photo").value;
const yourComment = document.getElementById("comment").value;

//Создаем переменную,где для первой буквы верхний регистр и нижний для остальных букв имени
  let name1 = yourName[0].toUpperCase();
  let name2 = yourName.slice(1).toLowerCase();
  let replacedName = name1 + name2;

//Удаляем все пробелы
  let totalName = replacedName.trim();

//Создаем переменную с заменой спам-слов

  let checkSpam = yourComment.replace(/viagra|xxx/gi,"***");

//Создаем дату комментария
  let comDate = new Date();
  let cDate = comDate.toLocaleDateString('ru') + ' ' + comDate.toLocaleTimeString('ru');
  
//Аватар по умолчанию

let avatar1 = 'https://n1s2.hsmedia.ru/f9/25/25/f92525c8eb87ff14127302d9d2f04945/1200x1600_0xac120003_9624843661663939011.jpeg';
let avatar2 = 'https://n1s2.hsmedia.ru/f9/ba/ee/f9baeeed365f5cdf7e455e365b53b45d/1600x1600_0xac120003_8441592711663938991.jpeg';
let avatar3 = 'https://n1s1.hsmedia.ru/f2/e3/9c/f2e39cb1817739d34f20f5da82442807/728x728_1_562f6b23003fe3bee9b459aa8a538126@1080x1080_0xac120003_17745537941663941356.jpeg';
let avatar4 = 'https://n1s2.hsmedia.ru/f0/c9/60/f0c96065f1e50771c40113e2324af266/823x1200_0xac120003_9211641921663938997.jpeg';
let avatar5 = 'https://n1s1.hsmedia.ru/36/1c/56/361c56acf76f51a14e9149e99f737b5f/1200x1200_0xac120003_2259064721663939003.jpeg';

let avatars = [avatar1, avatar2, avatar3, avatar4, avatar5];
let randomAv = avatars[Math.floor(Math.random()*avatars.length)];

//Блок для хранения комментария
  const block = document.querySelector('.block');
  let userInfo = document.createElement('div');
  userInfo.classList.add('comment_border');
  block.before(userInfo);

//Аватар
  let userImg = document.createElement('img');
  userImg.src = yourAvatar;
  userImg.alt = 'Фото пользователя';
  userImg.classList.add('photo');
  //Условие при пустом поле ввода для аватара
  if(yourAvatar == '') {
    userImg.src = randomAv;
  } else{
    userImg.src = yourAvatar;
  };
 
  userInfo.appendChild(userImg);

   //Имя
  let userName = document.createElement('p');
  userName.textContent = totalName;
  userInfo.appendChild(userName);

  //Дата
  let userDate = document.createElement('p');
  userDate.textContent = cDate;
  userInfo.appendChild(userDate);

  //Комментарий
  let userCom = document.createElement('p');
  userCom.textContent = checkSpam;
  userInfo.appendChild(userCom);

  //Очищаем поле ввода после добавления 
  document.getElementById("name").value = '';
  document.getElementById("photo").value = '';
  document.getElementById("comment").value = '';
};


buttonSend.addEventListener('click',makeCom);

//Ссылка для проверки аватара: https://img.freepik.com/premium-photo/bunny-with-flowers-bunny_771703-2672.jpg