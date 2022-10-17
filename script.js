const generateButton = document.getElementById("button");
const adviceId = document.getElementById("adviceId");
const advice = document.getElementById("advice");

const generateAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
        //returns an object called slip which has id and advice property
      adviceId.innerHTML = data.slip.id;
      advice.innerHTML = '"'+data.slip.advice+'"';
    });
}

generateButton.addEventListener("click", function(){
    generateAdvice();
})
const shareAdvice = () => {
  generateAdvice();
};
