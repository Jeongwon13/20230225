const c1 = document.getElementById("num1");
const c2 = document.getElementById("num2");
const result = document.getElementById("result");


function calc(op){
    // op에는 + - * / % 중 하나가 전달되어짐

    // 현재 input 요소에 작성된 값을 얻어아 변수에 저장
    const n1 = Number(c1.value);
    const n2 = Number(c2.value);
    
    switch(op) {
        case '+' : result.innerText = n1 + n2; break;
        case '-' : result.innerText = n1 - n2; break;
        case '*' : result.innerText = n1 * n2; break;
        case '/' : result.innerText = n1 / n2; break;
        case '%' : result.innerText = n1 % n2; break;

    }
 
}

