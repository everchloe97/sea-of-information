const s = "10 20 30 40" 
//  "10 20 30 40" 
// 	"10 Z 20 Z"

function solution(s) {
   let s_list = s.split(' ')
   while (s_list.includes("Z")){
    const idx = s_list.findIndex((e) => e === "Z");
    s_list.splice(idx-1, 2);
   }
    return s_list.reduce((acc,cur)=> acc+Number(cur),0)
}

console.log(solution(s))

// 생각
// 1 2 Z 3 = 1+2-2+3 = 4
// 1. ' ' 공백 기준으로 나눠서 각 숫자 담은 s_listay로 만들고
// 2. 모든 Z를 찾아서 해당 index-1 요소부터 그 다음 요소인 Z까지 del.
// 3. reduce로 sum return 해주되 str type > number 
