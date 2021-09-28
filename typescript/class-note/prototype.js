var user = { name: 'pyc', age: 100 };
var admin = { name: 'pyc', age: 100, role: 'admin' };

// user의 정보를 admin에서 재활용할 수 있도록 해보자
var admin2 = {};
admin2.__proto__ = user;

// 이제부터 admin2는 user에서 가지고 있던 속성들을 사용할 수 있다
console.log(admin2.user); // pyc
console.log(admin2.age); // 100

admin2.role = 'admin';
console.log(admin2); // {role:"admin"}
