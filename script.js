var principal = document.getElementById("principal").value;
var rate = document.getElementById("rate").value;
var rate_val = document.getElementById("rate_val").value;
var years = document.getElementById("years").value;
var interest = principal * years * rate /100;
var year = new Date().getFullYear()+parseInt(years);

//function compute(){
    //if (principal >= 0) {
        //document.getElementById("result").innerHTML= principal
        //document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>"
    //}
    //else {
        //alert("Enter a positive number")
    //}
//}