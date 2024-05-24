const target = {
  message1: 'hello',
  message2: 'proxy',
};
const handler = {
  set(target, property, value, receiver) {
    console.log(`Setting ${property} property to ${value}`);
    target[property] = value;
    return true; // 반드시 true를 반환해야 함
  },
};
const proxy = new Proxy(target, handler);
proxy.message1 = 'hey';
// 출력 결과: Setting message1 property to hey
