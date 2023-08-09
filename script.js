let buttonSelect = document.querySelectorAll('button');
let input = document.querySelector('.text-box');
const specialChars = ["%","*", "/", "-", "+", "="];
let output = "";


const calculator = (btnValue) =>{

    if(btnValue === '=' && output !== ""){
        output = eval(output.replaceAll("%", "/100"));   
    }else if(btnValue === 'AC'){
        output = ""; 
    }else if(btnValue === 'DEL'){
        output = output.toString().slice(0,-1);
    }
    else{
        if(output === "" && specialChars.includes(btnValue))
        return;
        output += btnValue;
    }
    input.value = output;

}

buttonSelect.forEach((button) => {

    button.addEventListener('click', (e) => {
        console.log(e.target.dataset.value);
        calculator(e.target.dataset.value);
        
    })
})

