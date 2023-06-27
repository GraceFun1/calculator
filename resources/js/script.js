
var currentNumber = 1;
var num1 = null;
var num2 = null;
var click = 0;

var $screen = $("#screen");
var $number = $(".number");

$("#equal").css('background', 'gray');
$("#clear").css('background', 'gray');

//when someone clicks on a number, it
//saves the number to do the math
$number.on('click', function() {
      click++;
    if (click > 12){
      return;
    }
    var numberPressed = $(this).html();
    $screen.append(numberPressed);
    $("#clear").css('background', 'linear-gradient(to right, rgb(62, 185, 148), rgb(41, 170, 131))');

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
    $("#equal").css('background', 'linear-gradient(to right, rgb(150, 221, 200), rgb(115, 204, 177))');
  }
});

  function more(){
    if (click > 12){
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
            if(num1 != null) {
              more();
             $screen.append("+");
             operator = "+";
           };
           return;
           })

            $("#minus").on('click', function()
              {
                if(num1 != null) {
                  more();
                 $screen.append("-");
                 operator = "-";
               };
               return;
              })

                $("#times").on('click', function()
                    {
                      if(num1 != null) {
                        more();
                     $screen.append("x");
                     operator = "x";
                   };
                   return;
                   })

                    $("#divide").on('click', function()
                        {
                          if(num1 != null) {
                          more();
                         $screen.append("/");
                         operator = "/";
                       };
                       return;
                       })

      $("#clear").on('click', function()
        {
          $screen.empty();
          num1 = null;
          num2 = null;
          currentNumber = 1;
          click = 0;
          $("#clear").css('background', 'gray');
          $("#equal").css('background', 'gray');
        });

        function findAnswer() {
          num1 = parseFloat(num1);
          num2 = parseFloat(num2);
            if (operator == "+") {
              answer = num1 + num2;
            }
            if (operator == "-") {
              answer = num1 - num2;
            }
            if (operator == "x") {
              answer = num1 * num2;
            }
            if (operator == "/") {
              answer = num1 / num2;
            }
            num1 = answer;
            num2 = null;
            currentNumber = 1;
        }

                        $("#equal").on('click', function()
                            {
                              var element = document.getElementById('equal');
                              var style = window.getComputedStyle(element);
                              var backgroundColor = "background-color";
                              var buttonColor = element.style.backgroundColor;
                              if(buttonColor == 'gray') {
                                return;
                              }
                            $screen.append("=");
                             findAnswer();
                             console.log(answer);
                             a = answer;
                             answer = a.toFixed(1);
                             console.log(answer);
                             if (click > 8){
                               $screen.empty();
                               Math.round(answer);
                               var answerLength = answer.toString();
                               click = answerLength.length;
                             }
                             Math.round(answer);
                               $screen.append(answer);
                               $("#equal").css('background-color', 'gray');
                            })