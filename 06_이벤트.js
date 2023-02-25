// 인라인 이벤트 모델 확인하기
function fnTest1(btn) {
   
    // JS로 요소에 CSS 지정시
    // inline 형식으로 CSS 코드가 추가된다.
    console.log(btn);
    btn.style.color = "white";
    btn.style.backgroundColor = "black";
    btn.style.cursor = "pointer";
}

// 고전 이벤트 모델
    document.getElementById("btn1").onclick = function() {
        alert("버튼이 클릭됨");    

        // 고전/표준 이벤트 모델 장점
        //-> 이벤트 제거 가능
        
        //요소의 속성 중 on이벤트명(이벤트 리스너) 속성에 함수 대신
        //null을 대입하여 이벤트 삭제 가능

    document.getElementById("btn1").onclick = null;
    }

    document.getElementById("btn1").onmouseover = function() {
        document.getElementById("btn1").style.backgroundColor = "red";
    }

    document.getElementById("btn1").onmouseout = function() {
        document.getElementById("btn1").style.backgroundColor = "yellow";
    }

    // 고전 이벤트 모델 단점
    // -> 한 요소에 동일한 이벤트 리스너에 대한
    //  다수의 이벤트 핸들러를 작성할 수 없다.
    //  (마지막으로 대입된 이벤트 핸들러만 적용)
    document.getElementById("btn1").onclick = function(){
        alert("새로운 이벤트 처리 방법");
    }

    
    // 표준 이벤트 모델
    const btn2 = document.getElementById("btn2");
    // btn2.addEventListener("이벤트명", 함수);
    btn2.addEventListener("click", function(){
        // 이벤트 핸들러 내부에 작성된 this == 이벤트가 발생한 요소
        console.log(this)
        this.style.backgroundColor = "pink";
        this.style.border = "3px solid red";
        this.style.padding = "10px";
        this.style.display = "block";
    })
    
    // 고전 이벤트 모델 단점 보안 확인
    btn2.addEventListener("click", function(){
        this.style.fontSize = "20px";
        this.style.fontWeight = "bold";
        this.style.color = "red";
        this.style.border = "3px solid green";
    })


 
    document.getElementById("input1").addEventListener("keyup", function(){
        const div1 = document.getElementById("div1");
        div1.style.backgroundColor = this.value;
    })


    document.getElementById("div2").addEventListener("mouseover", function(){
        
        div2.style.backgroundColor = "hotpink";
        div2.style.width = "500px";
    })

    document.getElementById("div2").addEventListener("mouseleave", function(){
        div2.style.width = "0px";
        this.style.visibility = "hidden";
       

    })
 

    document.