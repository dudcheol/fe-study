// 내부적으로 선언되어 있는 속성과 타입에 대한 정의를 기준으로 구분함
interface Developer {
    name: string;
    skill: string;
}
interface Person {
    name: string;
}
class Person {
    name: string;
}

var developer: Developer;
var person: Person;
developer = person; // 왼쪽에 있는 타입이 더 많은 속성을 가지고 있음. 이런 경우 에러
person = developer;
developer = new Person();


// 함수
var add = function (a: number) {
    // ...
}
var sum = function (a: number, b: number) {
    // ...
}
sum = add;
add = sum; // 오류


// 제네릭
interface Empty<T> {
    // ...
}
var empty1: Empty<string>;
var empty2: Empty<number>;
empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
    data: T;
}
var notempty1: NotEmpty<string>;
var notempty2: NotEmpty<number>;
notempty1 = notempty2; // 오류
notempty2 = notempty1; // 오류

