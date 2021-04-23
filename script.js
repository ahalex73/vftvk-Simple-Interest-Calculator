var principal = 0;
var rate = 10.25;
var years = 1;
var interest = 0;
var year = 1;
var amount = 0;

function compute(){
    // gathering all of the values and calculations prior to printing result in order to avoid typeError
    principal = document.getElementById("principal").value;
    rate = document.getElementById("rate").value;
    years = document.getElementById("years").value;
    year = new Date().getFullYear()+parseInt(years);
    interest = principal * years * rate /100;
    amount = interest + parseFloat(principal);
    // checking if principal is a negative number or 0, if not continue, if so alert
    if (principal > 0) {
                document.getElementById("result").innerHTML="If you deposit \<mark>"+principal+"\</mark>,\<br\>at an interest rate of \<mark>"+rate+"\</mark>%\<br\>You will receive an amount of \<mark>"+amount+"\</mark>,\<br\>in the year \<mark>"+year+"\</mark>,\<br\>";
    }
    else {
        alert("Enter a positive number");
        document.getElementById("principal").select();
    }
}