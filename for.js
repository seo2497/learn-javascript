/**
 * for문
 *  세가지 구성요소 : 초기화, 반복 조건식, 증감식
 */


for (let i = 0; i < 5; i++) {
  // 반복 실행될 로직
  console.log(`${i}번째 실행중`)
}


console.log("반복문 끝!")


const members = ["woni", "liv", "minami", "zena", "may"];

// 구석기 시대의 반복문
// for(let i = 0; i < members.length; i++){
//   // console.log("🚀 ~ members:", members.length)
//   console.log(`${i}번째 멤버: ${members[i].toLowerCase()}`)
// }

//향상된 for문 데이타타입이 배열인 경우에만 사용 가능
members.forEach((member, index) => {
// 배열의요소들을 순회하면서 반복 실행할 로직
// console.log('${index}번째 멤버: ${member.toLowerCase()}')
 console.log(`${index}번째 멤버: ${member}`);
})


//자주쓰는 배열 함수
// map : 기존 배열을 조작하여 새로운 배열을 리턴
const rescenKoreaMembers = ["원이", "리브", "미나미", "메이", "제나"];
// const emojMembers = rescenKoreaMembers.map((member) => {
//   return `❤️${member}❤️`
// })
const emojMembers = rescenKoreaMembers.map((member) => `❤️${member}❤️`) //return 대신 축약형으로 변경 가능

console.log("🚀 ~ emojMembers:", emojMembers)

// filter : 배열안의 요소들 중 특정 조건을 만족하는 요소들을 새로운 배열로 리턴 / 조건을 만족하는 요소가 없으면 [] 리턴
const filterMembers = rescenKoreaMembers.filter((member) => member.length >=3)
console.log("🚀 ~ filterMembers:", filterMembers)

// find : 배열안의 요소들 중 특정 조건을 만족하는 첫번째 요소를 리턴 / 조건을 만족하는 요소가 없으면 undefined 리턴
const findMember = rescenKoreaMembers.find((member) => member.length >=2)
console.log("🚀 ~ findMember:", findMember)

/**
 * erver/some : boolean
 * 배열안의 요소들 중 특정 조건을 만족하는 요소가 있는지 여부 리턴
 * - some : 배열의 요소 중 하나라도 조건을 만족 하면 true, 그렇지 않으면 false
 * - every : 배열의 모든 요소가 조건을 만족하면 true, 그렇지 않으면 false
 */
const someMember = rescenKoreaMembers.some((member) => member.length >=3)
console.log("🚀 ~ someMember:", someMember)

const everyMember = rescenKoreaMembers.every((member) => member.length >=3)
console.log("🚀 ~ everyMember:", everyMember)
