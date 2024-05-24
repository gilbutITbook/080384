// 매개변수에 화살표 함수를 받는 함수
function executeFunction(func) {
  func(); // 전달받은 화살표 함수 실행
}
// executeFunction 함수 호출
executeFunction(() => {
  console.log('전달받은 화살표 함수가 실행됩니다.');
});
