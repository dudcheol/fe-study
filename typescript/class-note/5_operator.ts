// function logMessage(value: any) {
//     console.log(value);
// }
// logMessage('hello');
// logMessage(1234);
// logMessage(false);

// 유니온 타입 : 파라미터나 변수에 한가지 이상의 타입을 쓰고 싶을 때 사용
// 타입 가드 : 특정 타입으로 타입의 범위를 좁혀나가는(필터링 하는) 과정
var seho: string | number | boolean;
function logMessage(value: string | number) {
    if (typeof value === 'number') {
        value.toLocaleString();
    }
    if (typeof value === 'string') {
        value.toString();
    }
    throw new TypeError('value must be string or number');
}
logMessage('hello');
logMessage(100);

interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

// or 연산자 사용 유니온 타입
// function askSomeone(someone: Developer | Person) {
//     // someone.name // 접근할 수 있는 속성이 name뿐임
//     // someone.skill
//     // someone.age
// }
// askSomeone({ name: '디벨로퍼', skill: '웹 개발' });
// askSomeone({ name: '캡틴', age: 100 });

// and 연산자 사용 인터섹션 타입
// 두 개의 타입을 모두 포함하는 새로운 타입
function askSomeone(someone: Developer & Person) {
    someone.name // 접근할 수 있는 속성이 name뿐임
    someone.skill
    someone.age
}
askSomeone({ name: '디벨로퍼', skill: '웹 개발', age: 100 });
// askSomeone({ name: '캡틴', age: 100 });

// var seho: string | number | boolean;
// var capt: string & number & boolean;