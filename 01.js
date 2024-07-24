// 1. 빈칸 채우기 문제

// 아래 내용에서 빈 칸에 들어갈 항목들을 채워주시고 왜 그렇게 생각했는지
// 본인의 생각을 간단하게 1줄 정도 같이 적어주세요.

1.
let uninitialized;
console.log(uninitialized);
// 결과값 < undefined >
// 이유 : 변수명 선언만 하고 값을 할당하지 않았기 때문입니다.

2.
const apple = "사과";
apple = "바나나";
// TypeError: Assignment to constant variable
// const로 들어오는 값은 바꿀 수 없습니다.

3.
let lotto = [3, 8, 13, 19, 21, 32];
console.log(lotto[3]);
// 결과값 19
// 프로그래밍에서는 index를 카운트 할 때 0부터 시작합니다.


4.
let mySchedule = ""; // 비어있는 값도 false
console.log(mySchedule || false);
// < false 반환 >
// mySchedule에 값이 없어서 false로 넘어가서 반환...?
console.log(!!mySchedule);
// < false >
// 
