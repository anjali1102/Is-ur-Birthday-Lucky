const dateOfBirth=document.querySelector("#date-pf-birth");
const luckyNumber=document.querySelector("#lucky-number");
const checkNumberButton= document.querySelector("#check-number");


function checkNumberIsLucky(){
  const date=dateOfBirth.value;
  const sum=calculateSum(dob);
  console.log(sum);
}

function calculateSum(date){
  dob=dob.replaceAll("-", "");
  let sum=0;
  for(let index=0; index<dob.length; index++){
    sum=sum+Number(dob.charAt(index));
  }
  return sum;
}

checkNumberButton.addEventListener("click",checkNumberIsLucky);