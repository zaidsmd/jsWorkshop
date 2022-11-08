let attempts = 0 ;
let random;
let attemptsLeft =  document.querySelector("#guessTheNumber p:first-of-type");
let output = document.querySelector("#guessTheNumber p:last-of-type");
let input = document.querySelector("#guessTheNumber input");
let targeted = document.querySelector("#guessTheNumber button:first-of-type")
let resetButton = document.querySelector("#guessTheNumber button:last-of-type")
function reset() {
    attempts = 0;
    output.innerHTML = ``;
    attemptsLeft.innerHTML = `Remaining attempts: ${10-attempts}/10`;
    input.value = '';
    targeted.removeAttribute('disabled')
}
function submit() {
    if (attempts === 0){
        random = Math.trunc(Math.random() * 50 );
        resetButton.setAttribute('disabled',"");
    }
    if (input.value == random && attempts < 9){
        output.innerHTML = `<p style="color: green">You won the right number is ${random}</p>`;
        targeted.setAttribute('disabled',"")
        input.value = '';
    }else if (input.value != random && attempts < 9){
        if (input.value < random) {
            output.innerHTML = `Try bigger number`
            input.value = '';
        }else if (input.value > random) {
            output.innerHTML = `Try smaller number`
            input.value = '';
        }
    }else {
        output.innerHTML = `<p style="color: red">You lose the right number is ${random}</p>`;
        targeted.setAttribute('disabled',"")
        input.value = '';
    }
    attempts++
    attemptsLeft.innerHTML = `Remaining attempts: ${10-attempts}/10`
    resetButton.removeAttribute('disabled')
}
targeted.addEventListener('click',submit)
resetButton.addEventListener('click',reset)


