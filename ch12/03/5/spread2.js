const arr1 = [1, 2, 3];
const arr2 = [...arr1]; // 깊은 복사
arr2[0] = 10;
console.log(arr1); // 출력 결과: [1, 2, 3]
console.log(arr2); // 출력 결과: [10, 2, 3]
