function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4)); // 출력 결과: 10
console.log(sum(5, 10)); // 출력 결과: 15
