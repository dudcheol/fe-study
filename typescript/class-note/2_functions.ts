// 함수의 파라미터에 타입을 정의하는 방식
function sum1(a: number, b: number) {
    return a + b;
}
sum1(10, 20);

// 함수의 반환 값에 타입을 정의하는 방식
function add(): number {
    return 10;
}

// 함수에 타입을 정의하는 방식
function sum2(a: number, b: number): number {
    return a + b;
}
sum2(10, 20, 30, 40); // 2개의 인수가 필요한데 4개를 가져오고 있음

// 함수의 옵셔널 파라미터(?)
// 필요에 따라 인자를 넣어도 되고 안넣어도 되게끔 할 수 있음
function log(a: string, b?: string) {

}
log('hello world');
log('hello ts', 'abc');