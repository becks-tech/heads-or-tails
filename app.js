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
    outcome_span.style.color = "red"
    outcome_span.style.transition = "0.3s"
  }
   if (outcome === 2){
    document.querySelector("#outcome").textContent = "Tails"
    outcome_span.style.color = "green"
    outcome_span.style.transition = "0.3s"
  }
  
  setTimeout(function(){
    document.querySelector("#outcome").textContent = '';
}, 1500);
    addPrev();
} //transparent only when timeout, need for original border colors to return when buttons are clicked again
    



heads.addEventListener("click", userChoice)
tails.addEventListener("click", userChoice)

function addPrev(){
    let prev = document.querySelector("#outcome").value
    const list = document.querySelector("ul")
    const newItem = document.createElement("li")
    newItem.textContent = prev;
    list.appendChild(prev)
};

//figure a way to show the outcome has changed even if it is the same outcome