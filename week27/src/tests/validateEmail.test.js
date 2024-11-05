import { validateEmail } from "../validateEmail";

test('valid email "test@example.com"', () => {
  expect(validateEmail("test@example.com")).toBe(true); // 성공하는 테스트
});

test('invalid email "test@example"', () => {
  expect(validateEmail("test@example")).toBe(true); // 실패하는 테스트(이메일 형식 틀림)
});