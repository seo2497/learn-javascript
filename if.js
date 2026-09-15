// 조건문 : 특정 조건에 따라 다르게 실행하는 구문

const score = 51;

// if(score >= 60){
//   // 조건식이 true 인 경우 실행될 로직
//   console.log("💴합격")
// }
// else{
//   console.log("😭불합격")
// }

// 3항 연산자
// score >=60 ?  console.log("💴합격") :  console.log("😭불합격")

console.log(score >=60 ? "💴합격" :"😭불합격")

let grade ; 


if(score >= 90){
  grade = "A"
}
else if(score >= 80)
  {
  grade = "B"
  
}
else if(score >= 70)
  {
  grade = "C"
  
}
else
{
  grade = "D"
}


console.log("🚀 ~ grade:", grade)

console.log("끝!!")


const userInput = "";

if(!userInput){
  console.log("값이 비었습니다. 입력해주세요")
}
else
  {
  console.log("!!!!11")

}