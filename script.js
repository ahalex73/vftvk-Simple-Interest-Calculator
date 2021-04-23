var principal = 0;
var rate = document.getElementById("rate").value;
var rate_val = document.getElementById("rate_val").value;
var years = document.getElementById("years").value;
var interest = 0;
var year = new Date().getFullYear()+parseInt(years);
var amount = 0;

function compute(){
    // checking if principal is a negative number or 0, if not continue, if so alert
    principal = document.getElementById("principal").value;
    interest = principal * years * rate /100;
    amount = interest + principal;

    if (principal > 0) {
        document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>"
    }
    else {
        alert("Enter a positive number")
    }
}