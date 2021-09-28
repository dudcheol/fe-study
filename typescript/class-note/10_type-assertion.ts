// 타입 단언(type assertion)
var a;
a = 20;
a = 'a';
var b = a as string;

// DOM API 조작할 때 가장 많이 사용함
// HTMLDivElement라고 단언함으로써 null이 아님을 보장할 수 있음
var div = document.querySelector('div') as HTMLDivElement;
div.innerText; // null체크 없이 바로 접근 가능
