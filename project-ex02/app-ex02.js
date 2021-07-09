/**
 * jaeseong-math npm 모듈 테스트(모듈 패키지 : 로컬 배포)
 * 
 * npm i ../jaeseong-math
 * 명령으로 설치 후, 테스트 할 것
 */
const dzMath = require('jaeseong-math');

console.log(dzMath.sum(1,2,3,4));
console.log(dzMath.max(-10,2,3,40));
console.log(dzMath.min(-30,-10,2,3,40));