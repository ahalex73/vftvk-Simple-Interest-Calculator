var principal = document.getElementById("principal").value;
var rate = document.getElementById("rate").value;
var rate_val = document.getElementById("rate_val").value;
var years = document.getElementById("years").value;
var interest = principal * years * rate /100;
var year = new Date().getFullYear()+parseInt(years);
var amount = principal(1 + (rate_val * year));


function compute(){
    if (principal >= 0) {
        document.getElementById("result").innerHTML="If you deposit "+",\<br\>at an interest rate of "+"%\<br\>You will receive an amount of "+",\<br\>in the year "+"\<br\>"
    }
    else {
        alert("Enter a positive number")
    }
}
