const dateOfBirth = document.querySelector("#date-pf-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");

checkNumberButton.addEventListener("click", function getValues() {
  console.log(dateOfBirth.value, luckyNumber.value);
});
