const obj1 = { a: 1, b: 2 }; // a key 중복
const obj2 = { a: 3, c: 4 }; // a key 중복
const mergedObj = { ...obj1, ...obj2 }; // obj1.a가 obj2.a 값으로 덮어써짐
console.log(mergedObj); // 출력 결과: { a: 3, b: 2, c: 4 }
