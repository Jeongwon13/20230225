const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");


function cal(btn){

    const op = btn.innerText; // -> + - * / %

    // 현재 input 요소에 작성된 값을 얻어아 변수에 저장
    const n1 = Number(num1.value);
    const n2 = Number(num2.value);
    
    // new function()
    // eval(* 코드 형식의 문자열)

    //eval(n1 + op + n2); 사용하지 마라. 절대
    // -> 매개변수의 문자열을 JS코드로 해석/수행하는 함수
    // -> 속도가 느리고 보안 위험이 있어 사용 XXX
    //eval(n1 + op + n2);
    
    //new Function()

    result.innerText = new Function("return " + n1 + op + n2)();



}

