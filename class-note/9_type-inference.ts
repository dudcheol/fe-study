// 타입 추론 기본
var a = 'abc';

function getB(b = 10) {
    var c = 'hi';
    return b + c;
}

10 + '10' // 1010

// 타입 추론 기본 2
// interface Dropdown<T> {
//     value: T;
//     title: string;
// }
// var shoppingItem: Dropdown<string> = {
//     value: 'abc',
//     title: 'hello',
// }

// 타입 추론 기본 3
interface Dropdown<T> {
    value: T;
    title: string;
}
interface DetailedDropdown<K> extends Dropdown<K> {
    description: string;
    tag: K;
}

var shoppingItem: DetailedDropdown<number> = {
    value: 'abc',
    title: 'hello',
    description: 'ab',
    tag: 'a',
}

// Best Common Type - 타입스크립트가 해당 타입이 어떤 타입인지 알아내는 알고리즘, 해석하는 방식 - 가장 적절한 타입
var arr = [1, 2, true, true, 'a'];


