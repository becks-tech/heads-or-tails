const outcome = document.querySelector("#outcome")
const heads = document.querySelector("#h")
const tails = document.querySelector("#t")
const outcome_span = document.querySelector("span")

function flip(){
  let rand = Math.floor(Math.random() *2) +1;
  return rand;
}

function userChoice(){
  const outcome = flip();
  if (outcome === 1){
      document.querySelector("#outcome").textContent = "Heads"
    outcome_span.style.borderColor = "red"
    outcome_span.style.transition = "0.3s"
    console.log(outcome)
  }
   if (outcome === 2){
      document.querySelector("#outcome").textContent = "Tails"
    outcome_span.style.borderColor = "green"
    outcome_span.style.transition = "0.3s"
     console.log(outcome)
  }
  const list = document.querySelector("ul")
  const prev = document.createElement("li")
  list.appendChild(prev) //display outcome as a list
}
heads.addEventListener("click", userChoice)
tails.addEventListener("click", userChoice)

//figure a way to show the outcome has changed even if it is the same outcome