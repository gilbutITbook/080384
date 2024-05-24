const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;
console.log(first, second, rest); // 출력 결과: 1 2 [3, 4, 5]
