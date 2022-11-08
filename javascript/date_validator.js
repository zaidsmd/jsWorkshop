document.querySelector("[name = 'check-date']").addEventListener('click' , function (){
    let year = document.querySelector("#date-validator [name='year']").value;
    let day = document.querySelector("#date-validator [name='day']").value;
    let month = document.querySelector("#date-validator [name='month']").value;
    let output = document.getElementById("check-result");
    console.log(month)
    switch (+month) {
        case +'' :
            output.innerHTML = `Please enter the complete date`;
            break;
        case 2 :
            if (+year % 4 === 0 && +year > 0 ){
                if (+day <30 && +day>0) {
                    output.innerHTML = `${day}/${month}/${year} is a valide date`
                }else {
                    output.innerHTML = `${day}/${month}/${year} is not a valide date !!`
                }
            }else if (+year > 0) {
                if (+day > 0 && +day < 29){
                   output.innerHTML = `${day}/${month}/${year} is a valide date`
                }else {
                  output.innerHTML = `${day}/${month}/${year} is not a valide date !!`
                }
            }else {
                output.innerHTML = `${day}/${month}/${year} is not a valide date !!`
            }
            if (year == +'' || day == +''){
                output.innerHTML = `Please enter the complete date`;
            }
            break;
        case 4 || 6 || 9 || 11:
            if (+year > 0) {
                if  (+day > 0 && +day < 31) {
                    output.innerHTML = `${day}/${month}/${year} is a valide date`
                }else {
                    output.innerHTML = `${day}/${month}/${year} is not a valide date !!`
                }
            }else {
                output.innerHTML = `${day}/${month}/${year} is not a valide date !!`
            }
            if (year == +'' || day == +''){
                output.innerHTML = `Please enter the complete date`;
            }
            break;
        default:
            if (+year > 0) {
                if  (+day > 0 && +day < 32) {
                    output.innerHTML = `${day}/${month}/${year} is a valide date`
                }else {
                    output.innerHTML = `${day}/${month}/${year} is not a valide date !!`
                }
            }else {
                output.innerHTML = `${day}/${month}/${year} is not a valide date !!`
            }
            if (year == +'' || day == +''){
                output.innerHTML = `Please enter the complete date`;
            }
    }
})