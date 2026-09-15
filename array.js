// 배열 : 순서를 가진 데이터들의 집합

const daysOfWeek = ["월요일","화요일","수요일","목요일","금요일","토요일","일요일"] // 묶어 줄 때는 대괄호
console.log("🚀 ~ daysOfWeek:", daysOfWeek)


const today = daysOfWeek[1]
console.log("🚀 ~ today:", today)

const favoriteDay = daysOfWeek[4]
console.log("🚀 ~ favoriteDay:", favoriteDay)


// 객체 : key value로 이우러진 속성들의 집합
const student = {
  name:"서용진",
  mbti:"ENTJ",
  isMale:false,
  useai:["ChatGPT", "Claude"],
  age:10
}
console.log("🚀 ~ student:", student)

const studentName = student["name"]
console.log("🚀 ~ studentName:", studentName)

// const studentAi = student["useai"]
const studentAi = student.useai //⭐
console.log("🚀 ~ studentAi:", studentAi, Array.isArray("studentAi"))
// const studentUseAi = studentAi[1]
// console.log("🚀 ~ studentUseAi:", studentUseAi)
