let name = 'George';
let surname = 'Miller';

nameChanged = name.substr(0,1).toUpperCase() + name.substr(1).toLowerCase();
console.log(nameChanged);
surnameChanged = surname.substr(0,1).toUpperCase() + surname.substr(1).toLowerCase();
console.log(surnameChanged);
console.log(name === nameChanged ? 'Имя осталось без изменений' : 'Имя было преобразовано');
console.log(surname === surnameChanged ? 'Фамилия осталась без изменений' : 'Фамилия была преобразована');
