function a(callback) {
  console.log('a() 호출됨!');
  setTimeout(() => {
    console.log('a');
    callback();
  }, 3000);
}
function b(callback) {
  console.log('b() 호출됨!');
  setTimeout(() => {
    console.log('b');
    callback();
  }, 2000);
}
function c() {
  console.log('c() 호출됨!');
  setTimeout(() => {
    console.log('c');
  }, 1000);
}
// 콜백 함수가 콜백 함수를 호출하는 콜백 지옥(Callback hell) 패턴
a(() => {
  b(() => {
    c();
  });
});
