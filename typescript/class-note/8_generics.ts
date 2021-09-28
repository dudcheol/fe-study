// function logText(text) {
//     console.log(text);
//     return text;
// }
// logText(10); // 숫자 10
// logText('하이'); // 문자열 하이
// logText(true); // 진위값 true

// function logText<T>(text: T): T {
//     console.log(text);
//     return text;
// }
// logText<string>('하이'); // 호출하는 시점에 타입을 넘겨줄 수 있다

// function logText(text: string) {
//     console.log(text);
//     // text.split('').reverse().join('');
//     return text;
// }

// function logNumber(num: number) {
//     console.log(num);
//     return num;
// }

// function logText(text: string | number) {
//     console.log(text);
//     return text;
// }

// const a = logText('a');
// a.split(''); // number일 수 있어서 split을 사용할 수 없음
// logText(10);
// const num = logNumber(10);
// logText(true);

function logText<T>(text: T): T {
    console.log(text);
    return text;
}
const str = logText<string>('abc');
str.split('');
const login = logText<boolean>(true);

// logText('a');
// logText(10);

// 인터페이스에 제네릭을 선언하는 방법
// interface Dropdown {
//     value: string;
//     selected: boolean;
// }
// const obj: Dropdown = { value: 'abc', selected: false};

interface Dropdown<T> {
    value: T;
    selected: boolean;
}
const obj: Dropdown<string> = { value: 'abc', selected: false };

// 제네릭의 타입 제한
// function logTextLength<T>(text: T[]): T[] {
//     console.log(text.length);
//     text.forEach(function (text) {
//         console.log(text);
//     })
//     return text;
// }
// logTextLength<string>(['hi']);

// 제네릭 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
    length: number;
}
function logTextLength<T extends LengthType>(text: T): T{
    text.length;
    return text;
}
logTextLength('a'); // string은 length를 제공하므로 가능
logTextLength(10); // number는 length를 제공하지 않으므로 오류!
logTextLength({ length: 10 }); // 해당 객체는 length가 정의되어 있기 때문에 가능

// 제네릭 타입 제한 3 - keyof
interface ShoppingItem{
    name: string;
    price: number;
    stock: number;
}
// ShoppingItem에 있는 key들 중 한가지가 제네릭이 됨
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
    return itemOption;
}
// getShoppingItemOption(10);
// getShoppingItemOption('a');
getShoppingItemOption("name");