import { describe, test, expect } from 'vitest';
import { getImage, dayTokor } from './helper.js';
describe('Helper Functions', () => {
  test('getImage function returns valid URL', () => {
    const path = 'example';
    const url = getImage(path);
    expect(url).not.toBeUndefined(); // url 값이 undefined가 아닌지 확인
    expect(url).not.toBeNull(); // url 값이 null이 아닌지 확인
    expect(url).toContain('assets/images/icon'); // url이 assets/images/icon을 포함하는지 확인
    expect(url).toContain('example.png'); // url이 example.png를 포함하는지 확인
  });
  test('dayTokor returns correct day array', () => {
    const expected = [
      '일요일',
      '월요일',
      '화요일',
      '수요일',
      '목요일',
      '금요일',
      '토요일',
    ];
    expect(dayTokor.length).toBe(7); // dayToKor 배열이 7개인지 확인
    dayTokor.forEach((day) => {
      expect(typeof day).toBe('string'); // dayToKor 배열에 문자열이 아닌 다른 형태의 값이 있는지 확인
    });
    expect(dayTokor).toEqual(expected); // dayToKor 배열이 올바른 순서로 있는지 확인
  });
});
