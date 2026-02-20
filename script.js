const inputElement = document.getElementById("input");

const copyIconEl = document.querySelector(".fa-copy");

const alertContainerEl = document.querySelector(".alert-container");

function createPassword() {
  const char =
    "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const passWordLength = 12;
  let password = "";
  for (let index = 0; index < passWordLength; index++) {
    const randomNum = Math.floor(Math.random() * char.length);
    password += char[randomNum];
    // console.log(randomNum, password);
  }
  inputElement.value = password; // for input tag we use .value
  alertContainerEl.innerText = password + " copied!"; // here we use .innerText becoz its not input
}

const btnE1 = document.querySelector(".btn");
btnE1.addEventListener("click", () => {
  createPassword();
});

copyIconEl.addEventListener("click", () => {
  copyPassword();
  if (inputElement.value) {
    alertContainerEl.classList.remove("active");
    setTimeout(() => {
      alertContainerEl.classList.add("active");
    }, 2000);
  }
});

function copyPassword() {
  inputElement.select(); // only for desktop
  // inputElement.setSelectionRange(0,9999) ; this is for mobile devices
  navigator.clipboard.writeText(inputElement.value); // from the clipborad select the text
  // alertContainerEl.innerText = password + "copied!" as we can't access password var here so we move this to the above function itself
}
