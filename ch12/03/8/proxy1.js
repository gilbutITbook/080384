const target = {
  message1: 'hello',
  message2: 'proxy',
};
const handler = {};
const proxy = new Proxy(target, handler);
console.log(proxy.message1, proxy.message2); // 출력 결과: hello proxy
