const btnEl = document.getElementById("btn");
const pEl = document.getElementById("result");
const inputEl = document.getElementById("in-put");
const retryEl = document.getElementById("retry");
const containerEl = document.querySelector(".container");
const clickAudioEl = document.getElementById("click");
const loseAudioEl = document.getElementById("lose");
const winAudioEl = document.getElementById("win");

btnEl.addEventListener("click", () => {
  displayGuess();
  clickAudioEl.play();
})

inputEl.addEventListener("keyup", () => {
  keyupFunc();
  setTimeout(keydownFunc, 200)
})

function keyupFunc(){
  inputEl.style.backgroundColor = "#E1E1E1";
  inputEl.style.color = "saddlebrown";
}
function keydownFunc(){
  inputEl.style.backgroundColor = "white";
  inputEl.style.color = "brown";
}

const guess = Math.floor(Math.random() * (100 - 1 + 1) + 1);

let retries = 8;

console.log(guess);

function displayGuess(){
  let inputElValue = inputEl.value;
   if (inputElValue === "") {
     alert("Please Input A Number!");
  } else if (parseInt(inputElValue) > 101){
    alert(`Please Input A Number Less Than ${inputElValue}!`);
  } else if (parseInt(inputElValue) > guess) {
    pEl.innerText = `Guess Too High Try Again`;
    retries--;
  }  else if (parseInt(inputElValue) < guess && inputElValue !== "") {
    pEl.innerText = `Guess Too Low Try Again`;
    retries--;
  } else{
    if (retries !== "0"){
      winAudioEl.play();
      retries--;
     pEl.innerHTML = `Congratulations You Won The Game! From The ${retries === 7 ? "1st" : retries === 6 ? "2nd" : retries === 5 ? "3rd" : retries === 4 ? "4th" : retries === 3 ? "5th" : retries === 2 ? "6th" : retries === 1 ? "7th" : "Last "} Retry`;
     inputEl.outerHTML = `<input type="number" id="in-put" placeholder="Enter The Number Here..." maxlength="5" readonly value="${guess}">`;
     const secBtnEl = document.createElement("a");
     secBtnEl.classList.add("btn");
     containerEl.appendChild(secBtnEl);
     secBtnEl.innerText = "Restart";
     
     secBtnEl.addEventListener("click", () => {
       location.reload();
     })
    };
    
   } if (retries === -1) {
     loseAudioEl.play();
     retries = "0";
     pEl.innerHTML = `You Lost! The Correct Number Was ${guess}`;
     inputEl.outerHTML = `<input type="number" id="in-put" placeholder="Enter The Number Here..." maxlength="5" readonly value="${inputElValue}">`;
     
     const secBtnEl = document.createElement("a");
     secBtnEl.classList.add("btn");
     containerEl.appendChild(secBtnEl);
     secBtnEl.innerText = "Restart";
     
     secBtnEl.addEventListener("click", () => {
       location.reload();
     })
  }
  retryEl.innerHTML = `Retries Left: ${retries}`;
}