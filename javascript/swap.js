let monBouton = document.querySelector(' #swap button');
monBouton.addEventListener('click', function(){
    let x, input1, input2;
    input1 = document.querySelector("[name='number1']")
    input2 = document.querySelector("[name='number2']")
    x = input1.value;
    input1.value = input2.value;
    input2.value = x;
})