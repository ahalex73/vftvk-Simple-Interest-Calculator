var principal = document.getElementById("principal").value;
var rate = document.getElementById("rate").value;
var rate_val = document.getElementById("rate_val").value;
var years = document.getElementById("years").value;
var interest = principal * years * rate /100;
var year = new Date().getFullYear()+parseInt(years);


function compute()
{
    p = document.getElementById("principal").value;
    
}
