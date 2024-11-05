// 정규 표현식을 사용하여 이메일 형식이 맞는지 확인하는 함수
// export function validateEmail(email) {
//    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//    return emailRegex.test(email);
//  }

 //Refactoring
export function validateEmail(email) {
   if (typeof email !== 'string') return false; // 입력이 문자열인지 확인
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   return emailRegex.test(email.trim()); // 공백 제거 후 이메일 유효성 검사
 }
 