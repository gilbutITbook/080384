function sum(a, b, c) {
  // 스프레드 연산자에 의해 배열의 요소가 전개됨
  return a + b + c;
}
const numbers = [1, 2, 3];
const result = sum(...numbers); // numbers 배열의 값을 전개해 매개변수에 전달
console.log(result); // 출력 결과: 6
