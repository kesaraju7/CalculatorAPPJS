//const math = require('mathjs');

let arr = [];

let calculateResult = () =>{
    var result = eval(arr.join(''))
    displaySelectedElements.innerText = result
}

let handleCalculation = (ele) =>{

    if(ele === "C"){
        displaySelectedElements.innerHTML = "";
        return
    }
    else if(ele === "=")
    {
      calculateResult()
    }
    else{
        arr.push(ele)
    }
   
  

  

}


const selectedElements = document.querySelectorAll("li");
const displaySelectedElements = document.querySelector("section.top p");



selectedElements.forEach(function(element) {
  
   

  element.addEventListener("click", function(){

    displaySelectedElements.innerText += element.innerText
    handleCalculation(element.innerText)
  });

  
});



