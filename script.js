function  helper(event){
    if(flag){
        clearDisplay(); 
    }
    const clicked = event.target.textContent;
    if(clicked=="="){
        evaluate();
        return;
    }else if(clicked=="C"){
        clearDisplay();        
        return;
    }
    const disp = document.getElementById("displaybarID");
    disp.innerHTML += clicked; 
}
function initiate(){
    const keys = document.getElementsByClassName("buttonKey");
    for(let i = 0;i<keys.length;i++){
        keys[i].addEventListener("click",helper);
    }
}
function evaluate(){
  const expression =  document.getElementById("displaybarID");
  let ans;
  try{
    ans = eval(expression.textContent);}
  catch(err){
    ans = "Syntax Error";
    flag = true;
  }
  if(ans=="Infinity"){
    ans = "Math Error";
    flag = true;
  }
  expression.innerHTML=ans;
}
function clearDisplay(){
    document.getElementById("displaybarID").innerHTML=" ";
    flag = false;
}
let flag = false; 
initiate();