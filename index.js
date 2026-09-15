console.log("Hello js");

//변수 : 값을 저장하는 이름을 가진 공간
// const username = "후츠릿";

let username = "후츠릿";
console.log("username:", username);

username = "강민수";
console.log("username:", username);

// 데이터타입
const num = 10; // 숫자
console.log("🚀 ~ num:", num, ",num type:", typeof num)

const text = '안녕하세요'; // 문자열
console.log("🚀 ~ text:", text, ",text type:", typeof text)

const isDarkMode = true;  // boolean
console.log("🚀 ~ isDarkMode typeof:", isDarkMode)
console.log("🚀 ~ isDarkMode:", isDarkMode, ", isDarkMode type:",  typeof isDarkMode)

const empty = null;
console.log("🚀 ~ empty:", empty, typeof empty)

//변수선언만
let userage;
console.log("🚀 ~ userage:", userage)

/**
 *  함수 : 특정 기능을 수행하도록 만든 코드 조각
 */

// 함수를 정의, 선언한다.
// function greeting(params) {
//   // 실행 로직
//   console.log(`${username}님, 반갑습니다!`)
//   // console.log(username + text)
// }



// 화살표 함수 변환(위의 함수랑 동일한 로직)
const greeting = (studentname, usermbti) => {
  //usermbti :파라미터로서 
  // 실행 로직
  console.log(`${studentname}님, 반갑습니다!`)
  console.log(`MBTI는 ${usermbti}이시군요!`)
  console.log(`${studentname}님 MBTI는 ${usermbti}이시군요!`)
}

// 함수를 실행, 호출한다.
// 파라미터는 함수 실행 시 값(인자)을 넣어 준다.
greeting("홍쓰","T")

myname = "서용진";

const myGreeting = () => {
  console.log(`프런트앤드분터 만드는 AI챗봇 수강생 ${myname}입니다.`)
}

myGreeting()


//결과값 반환
const add = (num1, num2) => {
  return num1+num2
}


const doublesum = (num)  => {
  console.log("🚀 ~ doublesum ~ num:", num)
  return num*2
  
}

const sum = add(10,20)

console.log("sum:",sum)

console.log("doubleSum:",doublesum(sum))