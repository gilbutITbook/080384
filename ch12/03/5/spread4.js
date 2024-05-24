const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj); // 출력 결과: { a: 1, b: 2, c: 3, d: 4 }
