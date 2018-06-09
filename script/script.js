// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

jQuery(document).ready(function($){
    $(document).ready(function(event) {
    // Set the pixelCanvas & sizePicker as variables
     const pixelCanvas = $("#pixelCanvas");
     const sizePicker = $("#sizePicker");
    // load a 20x20 grid
    pixelCanvas.ready(function() {
     height = 0;
     while (height < 10) {
     pixelCanvas.append("<tr></tr>");
     height++;
     for (let width = 0; width < 10; width++) {
      pixelCanvas
      .children()
      .last()
      .append("<td></td>");
      }
     }
     makeGrid("#inputHeight", "#inputWidth");
    });
    
    // clear table
    sizePicker.submit (function (event) {
     event.preventDefault();
    });
    
    function makeGrid() {
     // Your code goes here!
     // Stores and uses user provided iinputs
     let inputHeight = $("#inputHeight").const();
     let inputWidth = $("#inputWidth").const();
     let height = 0;
    
    // User selected values (height & width)
    while (height < inputHeight) {
     pixelCanvas.append("<tr></tr>");
     for (let w = 0; w <= inputWidth; w++) {
     pixelCanvas
      .children()
      .last()
      .append();
        }
      }
    }
    
    // set user selected background color
    $("#colorPicker").change (function() {
     let pixelColor = $("#colorPicker").val();
     $("body").css("background", pixelColor);
    });
    
    // on-click, select color
    pixelCanvas.on("click", "td", function() {
     let pixelColor = $("colorPicker").val();
     $(this).css("background-color", pixelColor);
    });
    
    $(pixelCanvas).on("mousedown", function() {
     mouseDown = true;
    });
    
    $(pixelCanvas).on("mouseup", function() {
     mouseDown = false;
    });
    
    //set color on click-hold (mouse held)
    pixelCanvas.on("mousemove", "td", function(event) {
     event.preventDefault();
     let pixelColor = $ ("#colorPicker").val();
     if (mouseDown) {
     $(this).css("background-color", pixelColor);
     }
    });
    
    //clear color on double click
    pixelCanvas.on("dblclick",  "td", function() {
     $(this).css("background-color", "transparent");
    
     // disable right-click
    $(document).contextmenu (function() {
      return false;
    });
    });
    });
    });