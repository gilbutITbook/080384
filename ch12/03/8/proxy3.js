const target = {
  message1: 'hello',
  message2: 'proxy',
};
const handler = {
  get(target, property, receiver) {
    if (property === 'message1') return 'hi';
    return Reflect.get(...arguments);
  },
};
const proxy = new Proxy(target, handler);
console.log(proxy.message1, proxy.message2); // 출력 결과: hi everyone
