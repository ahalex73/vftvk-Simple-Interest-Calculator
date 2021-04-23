var filler1 = 12
var filler2 = 12
var filler13 = 12
var filler14 = 12
var filler121 = 12
var filler12 = 12
var filler1231 = 12
var filler1123 = 12
var filler11232 = 12
var filler121231 = 12
var filler12341 = 12
var filler122341 = 12
var filler195 = 12
var filler1657 = 12
var filler1345 = 12
var filler172 = 12
var filler1689 = 12
var filler1345 = 12
var filler1173 = 12
var filler1456 = 12
var filler1734 = 12
var filler1348 = 12
var filler12234 = 12

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
    else {
        alert("Enter a positive number")
    }
}