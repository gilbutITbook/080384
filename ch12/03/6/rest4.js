function greet(greeting, ...names) {
  names.forEach((name) => {
    console.log(`${greeting}, ${name}!`);
  });
}
greet('Hello', 'Kim', 'Park', 'Yun');
// 출력 결과: Hello, Kim! Hello, Park! Hello, Yun!
