let val_celsius = document.querySelector("#celsius");
let resp_fah = document.querySelector("#resp_fah");
let resp_kel = document.querySelector("#resp_kel");
let txt = document.querySelector("#txt_valor");

const fahrenheit = (celsius) => {
    if(isNaN(celsius)||celsius===0){
        if(celsius===0){
            resp_fah.innerHTML = "-";
            txt.style.display = "inline";
            txt.innerHTML = "Digite um valor!";
        }
        else{
            resp_fah.innerHTML = "-";
            txt.style.display = "inline";
            txt.innerHTML = "Digite um valor válido!";
        }
    }
    else{
        let resp = (celsius * 1.8) + 32;
        resp_fah.innerHTML = resp;
        txt.style.display = "none";
    }
}

const kelvin = (celsius) => {
    if(isNaN(celsius)||celsius===0){
        if(celsius===0){
            resp_kel.innerHTML = "-";
            txt.style.display = "inline";
            txt.innerHTML = "Digite um valor!";
        }
        else{
            resp_kel.innerHTML = "-";
            txt.style.display = "inline";
            txt.innerHTML = "Digite um valor válido!";
        }
    }
    else{
        let resp = celsius + 273.15;
        resp_kel.innerHTML = resp;
        txt.style.display = "none";
    }
}

val_celsius.addEventListener('keyup', function(){
    fahrenheit(Number(val_celsius.value));
    kelvin(Number(val_celsius.value));
});


