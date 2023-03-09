
function doubleTriple(isIncrese){
    // input field value
    const inputField = document.getElementById('input_number');
    const inputValue = inputField.value;
    const inputNumber = parseFloat(inputValue);

    // prevText
    const prevText = document.getElementById('prevText');
    const prevInnerText = prevText.innerText;
    const prevInnerNumber = parseFloat(prevInnerText);

    // total 
    let totalDouble;

    if(isIncrese === true){
        totalDouble = inputNumber * 2 + prevInnerNumber;
    }
    else{
        totalDouble = inputNumber * 3 + prevInnerNumber;
    }

    prevText.innerText = totalDouble;

    inputField.value = '';
}

// double 
document.getElementById('double_button').addEventListener('click', function(){
    doubleTriple(true);

});

// triple_button
document.getElementById('triple_button').addEventListener('click', function(){
    doubleTriple(false);
    
});






// const documentt = Math.pow(4, 0.5)+"spiderman"+"987"+Math.sqrt(9);
// console.log(documentt);

// function generatePin(){ return Math.floor(Math.random()*90000) + 10000; }
// console.log(generatePin());
// let num = 3.5;
// const numberparse = parseInt(num);
// console.log(numberparse);

// const product = 5; 
// const price = "7"; 
// const subTotal = product * price;
// const tax = subTotal/10; 
// const total = subTotal + tax; 

// console.log(total);

// const category="pen";
// const performer = category+"-teller";

// console.log(performer);