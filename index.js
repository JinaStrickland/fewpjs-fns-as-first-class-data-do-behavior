document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

function greet(string) {
  let parse = parseInt(string)
  if(parse < 12){
    return "Good Morning"
  } 
  else if(parse > 17) {
    return "Good Evening"
  }
  else {
    return "Good Afternoon"
  }
}

function displayMessage(string) {
  let h1tag = document.querySelector("h1#greeting")
  h1tag.innerText = string 
}

