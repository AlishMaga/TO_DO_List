  const inputBox = document.getElementById("input_box");
  const list = document.getElementById("list-container");
  function addTask(){
    if (inputBox.value === ''){
        alert("Your Task submission is empty.");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        
        list.appendChild(li).appendChild(span);
        
    }
    inputBox.value="";
    saveData();
  }

  list.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
      e.target.classList.toggle("tick");
      saveData();
    }
    else if(e.target.tagName === "SPAN"){
      e.target.parentElement.remove();
      saveData();
    }
  },
  false);


function saveData(){
  localStorage.setItem("data", list.innerHTML);

}

function showTask(){
  list.innerHTML = localStorage.getItem("data");
}

showTask();