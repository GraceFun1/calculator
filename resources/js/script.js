
var currentNumber = 1;
var num1;
var num2;
var click = 1;

var $screen = $("#screen");
var $number = $(".number");

$("#equal").css('background', 'gray');
$("#clear").css('background', 'gray');

// when someone clicks on a number, it 
//saves the number to do the math
  $("#equal").css('background', 'gray');

$number.on('click', function() {
    if (click > 8) {
        return;
    }
    click++;
    var numberPressed = $(this).html();
    $screen.append(numberPressed);
    $("#clear").css('background', 'linear-gradient(to right, rgb(173, 125, 125), rgb(168, 76, 114))');

    if (currentNumber == 1) {
        if (num1 == null) {
            num1 = numberPressed;
        } else {
            num1 = num1 + numberPressed;
        }
    }
    if (currentNumber == 2) {
        if (num2 == null) {
            num2 = numberPressed;
        } else {
            num2 = num2 + numberPressed;
        }
        $("#equal").css('background', 'linear-gradient(to right, rgb(202, 139, 139), rgb(187, 83, 126))');
    }
});

function more() {
    if (click > 5) {
        click = click - 3;
    }
    if (currentNumber == 2) {
        findAnswer();
        $screen.empty();
        $screen.append(num1);
    }
    currentNumber = 2;
}

$("#plus").on('click', function()
{
    if(num1!=null) {
        more();
        $screen.append("+");
        operator="+"
        console.log("adding");
    };
    return;
})

$("#minus").on('click', function()
{
    if(num1!=null) {
        more();
        $screen.append("-");
        operator="-"
        console.log("subtracting");
    };
    return;
})

$("#times").on('click', function()
{
    if(num1!=null) {
        more();
        $screen.append("x");
        operator="x"
        console.log("multiply");
    };
    return;
})

$("#divide").on('click', function()
{
    if(num1!=null) {
        more();
        $screen.append("/");
        operator="/"
        console.log("dividing");
    };
    return;
})

$("#clear").on('click', function()
{
    $screen.empty();
    num1 = null;
    num2 = null;
    currentNumber = 1;
    click = 1;
    $("#clear").css('background', 'gray');
    $("#equal").css('background', 'gray');
})

function findAnswer() {
num1 = parseInt(num1); 
num2 = parseInt(num2); 
if (operator =="+")
 { answer = num1 + num2; } 
if (operator =="-") 
{ answer = num1 - num2; } 
if (operator =="x") 
{ answer = num1 * num2; } 
if (operator =="/") 
{ answer = num1 / num2; } 
num1 = answer; 
num2 = null; 
currentNumber = 1;
}

$("#equal").on('click', function()
{
    var element = document.getElementById('equal');
    var style = window.getComputedStyle(element);
    var background = "background";
    var buttonColor = element.style.background;
    if(buttonColor == 'gray') {
      return;
    }  
    $screen.append("=");
    findAnswer();
    if (click > 8) {
        $screen.empty();
        var answerLength = answer.toString();
        click = answerLength.length;
        console.log(click);
    }
    $screen.append(answer);
    $("#equal").css('background', 'gray');
})