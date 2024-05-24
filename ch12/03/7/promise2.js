function a() {
  console.log('a() 호출됨!');
  setTimeout(() => {
    console.log('a');
  }, 3000);
}
function b() {
  console.log('b() 호출됨!');
  setTimeout(() => {
    console.log('b');
  }, 2000);
}
function c() {
  console.log('c() 호출됨!');
  setTimeout(() => {
    console.log('c');
  }, 1000);
}
// 함수 호출은 a() → b() → c() 순으로 했지만, 결과는 c → b → a 순으로 출력
a();
b();
c();
