const person = {
  firstName: '김',
  lastName: '기수',
  age: 30,
  country: '서울',
};
const { firstName, lastName, ...details } = person;
console.log(firstName); // 출력 결과: 김
console.log(lastName); // 출력 결과: 기수
console.log(details); // 출력 결과: { age: 30, country: '서울' }
