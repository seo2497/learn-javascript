// 논리연산자 logical operators

/**
 * 관리자 페이지 접근 조건
 * 1. 로그인된 상태일 것
 * 2. role이 admin일 것
 */

const user = {
  isLoggedin : true, // 로그인 여부
  role: "user" //["user", "guest", "admin"]
}

if(user.isLoggedin && user.role === "admin"){
  // 관리자 페이지 가능한 상태
  console.log("⭕관리자 페이지에 접근 가능")
}
else {
  console.log("❌관리자 페이지에 접근 불가능")
}

// 회원만 접근 가능한 페이지 체크
/**
 * 조건1: 로그인 된 상태인 경우
 * or
 * 조건2: role이 amdin인 경우 
 */

if(user.isLoggedin || user.role === "admin"){
  // 관리자 페이지 가능한 상태
  console.log("⭕관리자 페이지에 접근 가능")
}
else {
  console.log("❌관리자 페이지에 접근 불가능")
}

if(!user.isLoggedin){
  alert(1111);
}

//삼항연산자
let userage = 33;
const isLogging = true;

const message = userage > 18 ? "성인입니다" : "미성년자 입니다."

const message2 = isLogging && "환영합니다."
console.log("🚀 ~ message2:", message2)
console.log("🚀 ~ message:", message)

//Spread Syntax
const rescenKoreaMembers = ["원이", "리브", "미나미", "메이", "제나"];
console.log("🚀 ~ rescenKoreaMembers:", rescenKoreaMembers)

const copyMembers = [...rescenKoreaMembers, "박보영"]  //인원 추가
// const copyMembers = ["박보영",...rescenKoreaMembers]  //인원 추가
console.log("🚀 ~ copyMembers:", copyMembers)

const copyUser = {...user, userage, isLoggedin:false}
console.log("🚀 ~ user:", user)
console.log("🚀 ~ copyUser:", copyUser)
