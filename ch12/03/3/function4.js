const obj = {
  name: 'sucoding',
  printName() {
    console.log(this); // 출력 결과: obj 객체
    const inner = () => {
      console.log(this); // 출력 결과: obj 객체
    };
    inner();
  },
};
obj.printName();
