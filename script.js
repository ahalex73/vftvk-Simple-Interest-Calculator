var principal = document.getElementById("principal").value;
var rate = document.getElementById("rate").value;
var rate_val = document.getElementById("rate_val").value;
var years = document.getElementById("years").value;
var interest = principal * years * rate /100;
var year = new Date().getFullYear()+parseInt(years);
var amount = interest + principal

function compute(){
    // checking if principal is a negative number or 0, if not continue, if so alert
    if (principal >= 0) {
        document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>"
    }
    if (principal == null) {
        alert("Principal is null")
    }
    if (rate == null) {
        alert("rate is null")
    }
    if (amount == null) {
        alert("amount is null")
    }
    if (year == null) {
        alert("year is null")
    }
    else {
        alert("Enter a positive number")
    }
}