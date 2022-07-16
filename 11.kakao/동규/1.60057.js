// https://programmers.co.kr/learn/courses/30/lessons/60057.

function solution(s) {
  //문자열 길이 1인 경우
  if (s.length === 1) return 1;
  let strings = [];
  let answer = 0;
  //첫번째 반복문은 압축할 문자열 길이 1부터 시작 ~ 문자열 길이 / 2
  //최대로 압축할 수 있는 길이는 문자열/2까지
  for (let i = 1; i <= parseInt(s.length / 2); i++) {
    //문자를 몇개 단위로 나눌 것인가
    let cnt = 1;
    let string = "";
    for (let j = 0; j < s.length; j += i) {
      const current = s.substr(j, i); //j인덱스 부터 i개를 추출한다.
      const next = s.substr(j + i, i); //다음 글자
      if (current === next) {
        cnt++;
      } else {
        string = cnt > 1 ? string + cnt + current : string + current;
        cnt = 1;
      }
    }
    strings.push(string.length);
  }
  return Math.min(...strings);
}
