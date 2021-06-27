   
var unavailableDatesStacey = ["06/29/2021","06/20/2021","07/01/2021", "07/10/2021"]
var unavailableDatesDeborah = ["06/27/2021","07/01/2021","07/17/2021"]
var unavailableDatesAngela = ["06/29/2021","06/20/2021","07/01/2021", "07/10/2021"]
const setDateFormat = "mm/dd/yy";

function disableDates(date) {
    // Sunday is Day 0, disable all Sundays
    
    if (document.getElementById("selecter").value == "Stacey"){
        var string = jQuery.datepicker.formatDate(setDateFormat, date);
        return [ unavailableDatesStacey.indexOf(string) == -1 ]
    }  else if (document.getElementById("selecter").value == "Deborah"){
        var string = jQuery.datepicker.formatDate(setDateFormat, date);
        return [ unavailableDatesDeborah.indexOf(string) == -1 ]
    }  else if (document.getElementById("selecter").value == "Angela"){
        var string = jQuery.datepicker.formatDate(setDateFormat, date);
        return [ unavailableDatesAngela.indexOf(string) == -1 ]
    }  
    
    
}

$("#dateBook").datepicker(
    {
        dateFormat: setDateFormat, // no calendar before June 1rst 2020
        minDate: new Date('06/01/2021'),  
        maxDate: '+2M', // used to disable some dates
        beforeShowDay: $.datepicker.noWeekends,
        beforeShowDay: disableDates
    }   
);




function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    // var filter = /^(\([-+]?[0-9]+)\)$/;
    //Code inspired by https://regexr.com/3c53v
    var filter = /^[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

// ^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$

function validateCard(txtCard) {
    var a = document.getElementById(txtCard).value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    // var filter = /^(\([-+]?[0-9]+)\)$/;
    //Code inspired by https://stackoverflow.com/questions/9315647/regex-credit-card-number-tests
    var filter = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/g
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

$(document).ready(function(){

    // phone validation, it calls validatePhone
    // and also some feedback as an Alert + putting a value in the input that shows the format required
    // the "addClass" will use the class "error" defined in style.css and add it to the phone input
    // The "error" class in style.css defines yellow background and red foreground
    $("#phoneNumber").on("change", function(){
        if (!validatePhone("phoneNumber")){
            alert("Wrong format for phone");
            $("#phoneNumber");
            $("#phoneNumber").addClass("error");
        }
        else {
            $("#phoneNumber").removeClass("error");
        }
    });

    $("#cardNumber").on("change", function(){
        if (!validateCard("cardNumber")){
            alert("Wrong format for Credit Card");
            $("#cardNumber");
            $("#cardNumber").addClass("error");
        }
        else {
            $("#cardNumber").removeClass("error");
        }
    });


 $("#booked").on("click", function(){
        let name = document.getElementById("name").value;
        let dateBook = document.getElementById("dateBook").value;
        let timeBook = document.getElementById("timeBook").value;
        let phoneNumber = document.getElementById("phoneNumber").value;
        let cardNumber = document.getElementById("cardNumber").value;
        if((name != "")&&(dateBook != "")&&(timeBook != "")&&(phoneNumber != "")&&(cardNumber != "")){
            alert("Your Appointment has been booked!");
            $("#mySurvey").model("hide");
        }else{
            alert("Please Ensure all Fields are filled before booking.");
        }
           
    });
