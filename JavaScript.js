const plus = document.querySelector(".plus"),
  minus = document.querySelector(".minus"),
  num = document.querySelector(".num");

  let a = 1;

  plus.addEventListener("click", function(){
    a++;
    a = (a < 10) ? "0" + a : a;
    num.innerText = a; 
    console.log(a)
  });
  
  minus.addEventListener("click", function(){
    if(a > 1){
      a--;
      a = (a < 10) ? "0" + a : a;
      num.innerText = a;
    }
  });