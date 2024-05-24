function a() {
  console.log('a() 함수 호출됨!');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('a');
      resolve(); // a 함수가 끝났음을 알림
    }, 3000);
  });
}
function b() {
  console.log('b() 함수 호출됨!');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('b');
      resolve(); // b 함수가 끝났음을 알림
    }, 2000);
  });
}
function c() {
  console.log('c() 함수 호출됨!');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('c');
      resolve(); // c 함수가 끝났음을 알림
    }, 1000);
  });
}
// 순차적으로 호출
a()
  .then(() => b())
  .then(() => c())
  .catch((error) => {
    console.error('Error:', error);
  });
