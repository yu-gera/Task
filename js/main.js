function getProgress(){
  let elem = document.getElementById ('progress-bar'),
  width = 1,
  id = setInterval(progressStatus, 100)
  function progressStatus (){
    if (width >= 100){
      clearInterval(id)
    } else {
      width ++;
      elem.style.width = width + '%';
      elem.innerHTML = width * 1 + '%';
    }
  }
}
getProgress();

let btn = document.getElementById("star-btn");
btn.addEventListener("click", function(){
  this.classList.add("active");
});


// ----------------Test-2  on JS----------------------

//------------------task__1--------------------

let phrase = "You are welcome!";
let output = "";
for (let i = 0; i < 10; i++){
  output += phrase + " ";
}
console.log(output.trim());
      //------------OR---------------
let phrase1 = "You are welcome!";
let result = phrase1.repeat(10);
console.log(result)

//--------------------task__2------------------
function getWords1 (){
const AddPhraseBtn = document.getElementById('add-phrase');
const AddContainer = document.getElementById('add-container');
AddPhraseBtn.addEventListener('onClick', () => {
  const countOfInputStr = prompt('Сколько раз вы хотите вывести фразу?');
  const countOfInput = parseInt(countOfInputStr);
   if (isNaN(countOfInput) || countOfInput <= 0){
    alert('Bad number');
    return;
   }
   AddContainer.innerHTML = '';
   for (let i = 0; i < countOfInput; i++){
    const newLabel = document.createElement('label');
    newLabel.textContent = `Silence is golden ${i + 1}:`;
    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.name = `input_${i}`;
    AddContainer.appendChild(newLabel);
    AddContainer.appendChild(newInput);
    AddContainer.appendChild(document.createElement('br'));
   }
})
}
console.log(getWords1())


//--------------------task__3------------------

function getNumberRandom(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min)
}
console.log(getNumberRandom(0, 100))  