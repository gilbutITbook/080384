const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1 }; // 깊은 복사
obj2.a = 10; // 깊은 복사라서 obj1.a는 영향을 받지 않음
console.log(obj1); // 출력 결과: {a: 1, b: 2}
console.log(obj2); // 출력 결과: {a: 10, b: 2}
