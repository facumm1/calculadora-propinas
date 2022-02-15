const inputBill = document.querySelector(".bill-input");
const inputPeople = document.querySelector(".people-input");
const boton5 = document.querySelector(".boton-5");
const boton10 = document.querySelector(".boton-10");
const boton15 = document.querySelector(".boton-15");
const boton25 = document.querySelector(".boton-25");
const boton50 = document.querySelector(".boton-50");
const botonCustom = document.querySelector(".boton-custom");
const priceTip = document.querySelector(".price-tip");
const priceTotal = document.querySelector(".price-total");
const buttonReset = document.querySelector(".button-reset");
const inputCustom = document.querySelector(".boton-custom");

boton5.addEventListener("click", (e) => {
   calculateValues(e, 0.05);
});

boton10.addEventListener("click", (e) => {
   calculateValues(e, 0.10);
});

boton15.addEventListener("click", (e) => {
   calculateValues(e, 0.15);
});

boton25.addEventListener("click", (e) => {
    calculateValues(e, 0.25);
});

boton50.addEventListener("click", (e) => {
    calculateValues(e, 0.50);
});

botonCustom.addEventListener("focus", () => {
    inputCustom.placeholder = '';
});

botonCustom.addEventListener("blur", (e) => {
    if(inputBill.value == '' || inputPeople.value == ''){
        alert("La cuenta o el número de personas esta sin especificar");
        inputCustom.placeholder = 'Custom';
    }
    else{
        if(inputCustom.value == ''){
            alert("El porcentaje esta sin especificar");
            inputCustom.placeholder = 'Custom';
        }
        else{
            calculateValues(e, inputCustom.value/100);
        }
    }
});

buttonReset.addEventListener("click", () => {
    inputBill.value = "";
    inputPeople.value = "";
    priceTip.innerHTML = '0.00';
    priceTotal.innerHTML = '0.00';
    inputCustom.value = '';
    inputCustom.placeholder = 'Custom';
});

function calculateValues(e, percent){
/*     e.preventDefault(); */

    if(inputBill.value == '' || inputPeople.value == ''){
        alert("La cuenta o el número de personas esta sin especificar"); 
    }
    else{
        let tip = inputBill.value*percent;
        let finalPercent = tip/inputPeople.value;
        let divideBill = inputBill.value/inputPeople.value;
     
        pricePerson = finalPercent+divideBill;
    
        priceTip.innerHTML = finalPercent.toFixed(2);
        priceTotal.innerHTML = pricePerson.toFixed(2);
    }
}
