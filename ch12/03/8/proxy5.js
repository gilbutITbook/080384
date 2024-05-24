const target = {
  message1: 'hello',
  message2: 'proxy',
};
const handler = {
  set(target, property, value, receiver) {
    if (property === 'message1') {
      return false; // message1 속성은 값 변경을 허용하지 않음
    } else {
      target[property] = value;
      return true;
    }
  },
};
const proxy = new Proxy(target, handler);
proxy.message1 = 'hi'; // set() 메서드에 의해 값이 변경되지 않음
proxy.message2 = 'ye'; // 값이 변경됨
console.log(proxy.message1); // 출력 결과: hello
console.log(proxy.message2); // 출력 결과: ye
