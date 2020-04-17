//  DEFINE VARIABLES
// HH format for a 24hr clock
var currentTime = moment().format("HH");

var currentTimeInt = parseInt(currentTime);
var saveBtn = $(".saveBtn");


// set data attributes to each hour input element

$("#9Row").attr("data-time", moment("9:00 am", "h:mm a").format("HH"));
$("#10Row").attr("data-time", moment("10:00 am", "h:mm a").format("HH"));
$("#11Row").attr("data-time", moment("11:00 am", "h:mm a").format("HH"));
$("#12Row").attr("data-time", moment("12:00 pm", "h:mm a").format("HH"));
$("#1Row").attr("data-time", moment("1:00 pm", "h:mm a").format("HH"));
$("#2Row").attr("data-time", moment("2:00 pm", "h:mm a").format("HH"));
$("#3Row").attr("data-time", moment("3:00 pm", "h:mm a").format("HH"));
$("#4Row").attr("data-time", moment("4:00 pm", "h:mm a").format("HH"));
$("#5Row").attr("data-time", moment("5:00 pm", "h:mm a").format("HH"));




$(document).ready(function () {

    // call the function to populate the input values with stored data
    renderPlans();


    //  ADD CURRENT DATE AT THE TOP OF THE PAGE

    // set variable to the current day. Reference https://momentjs.com/docs/
    var currentDay = moment().format("dddd, MMMM Do");
    // set the text of the p tag as the current day
    $("#currentDay").text(currentDay);


    //  CHANGE INPUT BOX COLOR BASED ON TIME OF DAY

    // set a variable imputTime to represent the input block's corresponding time with a for loop
    for (var j = 1; j <= 12; j++) {
        var inputTime = $("#" + j + "Row").attr("data-time");
        var inputTimeInt = parseInt(inputTime);
        console.log(inputTimeInt);

        // Set color styling based on comparisons between the currentTimeInt and the inputTimeInt
        if (currentTimeInt === inputTimeInt){
            $("#" + j + "Row").addClass("present");
            
        }

        if (currentTimeInt > inputTimeInt){
            $("#" + j + "Row").addClass("past");
        }

        if (currentTimeInt < inputTimeInt){
            $("#" + j + "Row").addClass("future");
        }

    }
 



    //  BUTTON HOVER 

    // mouse events reference: https://api.jquery.com/
    saveBtn.on("mouseenter", function () {
        $(this).addClass('hover');
    });

    saveBtn.on("mouseleave", function () {
        $(this).removeClass('hover');
    });


    //  BUTTON CLICK

    saveBtn.on("click", function () {
        
        var hour = $(this).attr("data-hour");       
        var plan = $("#" + hour + "Row").val();
        // save the hour's plan to local storage
        localStorage.setItem(hour, plan);

    });


    //  Retrieves stored user inputs from local storage
    function renderPlans() {
        // hours to account for: 1, 2, 3, 4, 5, 9, 10, 11, 12
        // starts at 1 because 1 is the lowest hour
        for (var i = 1; i <= 12; i++) {
            // select the 
            $("#" + i + "Row").val(localStorage.getItem(i));
        }
    }


});