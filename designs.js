// Gets color code from colorPicker, and adds it to pixel clicked.
function chooseColor() {
  $("#pixel_canvas").on("click", "td", function(){
    let color = $("#colorPicker").val();
    $(this).css("background-color", color);
  });
};

// Creates a grid depending on the height and width a user selected.
function makeGrid(height,width) {
  for (let h = 0; h < height; h++){
    $("#pixel_canvas").append("<tr></tr>")
  };
  for (let w = 0; w < width; w++){
    $("tr").append( `<td></td>`)
  };
};

/* On clicking "Submit", gets a users selected height and width and calls makeGrid().
After that, calls chooseColor(). */
function useGrid() {
  $("#submit").click(function(event) {
    event.preventDefault()
    $("#pixel_canvas").empty();
    let height = $("#input_height").val();
    let width = $("#input_width").val();
    $(makeGrid(height,width));
  });
  $(chooseColor());
};


$(useGrid());
