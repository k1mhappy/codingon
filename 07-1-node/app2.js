// math2 모듈을 불러와서 사용할거임

//여러개 내보냈을 때 불러오는거는
const math2 = require('./math2'); //require 사용해서 파일불러오기
console.log(math2.add(3,4));
console.log(math2.E);

// 구조분해할당은 내보낸 값과 동일한 이름으로!
const {add, PI, E} = require('./math2') //math2에서 내보낸 객체들임
console.log(PI);