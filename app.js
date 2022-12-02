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
    outcome_span.style.transition = "0.3s"
    const list = document.querySelector("ul")
    const newItem = document.createElement("li")
    newItem.textContent = "Heads";
    list.appendChild(newItem)
  }
   if (outcome === 2){
    document.querySelector("#outcome").textContent = "Tails"
    outcome_span.style.transition = "0.3s"
    const list = document.querySelector("ul")
    const newItem = document.createElement("li")
    newItem.textContent = "Tails";
    list.appendChild(newItem)
  }
  
  setTimeout(function(){
    document.querySelector("#outcome").textContent = '';
}, 1500);
}; //transparent only when timeout, need for original border colors to return when buttons are clicked again
    


heads.addEventListener("click", userChoice)
tails.addEventListener("click", userChoice)

//figure a way to show the outcome has changed even if it is the same outcome