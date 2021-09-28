// interface Person {
//     name: string;
//     age: number;
// }

type Person = {
    name: string;
    age: number;
}

var seho: Person = {
    name: '세호',
    age: 30,
}

type MyString = string;
var str: MyString = 'hello';

type Todo = {
    id: string,
    title: string,
    done: boolean,
};
function getTodo(todo: Todo) {
    
}

/*
인터페이스와 타입의 차이점
타입의 확장 불가능 여부. 인터페이스는 extends를 통해 확장이 가능한데 비해 타입 별칭은 확장이 불가능함. 따라서, 가능한한 type보다는 interface로 선언해서 사용하는 것을 추천
*/