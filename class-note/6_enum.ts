enum Shoes {
    Nike = '나이키',
    Adidas = '아디다스',
}

var myShoes = Shoes.Nike;
console.log(myShoes); // 나이키

// 예제
enum Answer {
    Yes = 'Y',
    No = 'N',
}
function askQuestion(answer: Answer) {
    if (answer === Answer.Yes) {
        console.log('정답입니다')
    }
    if (answer === Answer.No) {
        console.log('오답입니다')
    }
}
askQuestion(Answer.Yes);
// askQuestion('예스');
// askQuestion('y');
// askQuestion('yes');

// 드롭다운 등 목록이 필요한 형태에서 사용하여 예외 케이스를 줄일 수 있음