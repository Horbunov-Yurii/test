var e,t={};t=JSON.parse('[{"id":1,"name":"Іван Петренко","age":25,"city":"Київ","isStudent":true},{"id":2,"name":"Олена Коваль","age":30,"city":"Львів","isStudent":false},{"id":3,"name":"Андрій Мельник","age":22,"city":"Одеса","isStudent":true},{"id":4,"name":"Марія Шевченко","age":28,"city":"Харків","isStudent":false},{"id":5,"name":"Дмитро Бондар","age":35,"city":"Дніпро","isStudent":false},{"id":6,"name":"Софія Іваненко","age":21,"city":"Тернопіль","isStudent":true},{"id":7,"name":"Максим Гриценко","age":27,"city":"Чернівці","isStudent":false},{"id":8,"name":"Наталія Савчук","age":24,"city":"Івано-Франківськ","isStudent":true},{"id":9,"name":"Володимир Кравчук","age":31,"city":"Полтава","isStudent":false},{"id":10,"name":"Катерина Лисенко","age":26,"city":"Вінниця","isStudent":true}]'),document.querySelector(".js-list").innerHTML=((e=t)&&e.__esModule?e.default:e).map(({id:e,name:t,age:i,city:u,isStudent:a})=>`<li id="${e}">
   <h2>\u{406}\u{43C}\u{44C}\u{44F}: ${t}</h2>
   <p>\u{412}\u{456}\u{43A} :${i}</p>
   <p>\u{41C}\u{456}\u{441}\u{446}\u{435} :${u}</p>
   <p>${a?"Студент":"НЕ студент"}</p>
</li>`).join("");
//# sourceMappingURL=test.7e4c298a.js.map
