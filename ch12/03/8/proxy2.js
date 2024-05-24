const target = {
  message1: 'hello',
  message2: 'proxy',
};
const handler = {
  get(target, property, receiver) {
    return 'hi';
  },
};
const proxy = new Proxy(target, handler);
console.log(proxy.message1, proxy.message2); // 출력 결과: hi hi
