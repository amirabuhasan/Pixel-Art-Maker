// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()



function makeGrid() {
  $("#submit").click(function(event) {
    event.preventDefault()
    let height = $("#input_height").val();
    let width = $("#input_width").val();
    $("#input_height").val(height);
    $("#input_width").val(width);
    console.log(height);
    for (let h = 0; h < height; h++){
      $("#pixel_canvas").append( "<tr></tr>" )
    }
    for (let w = 0; w < width; w++){
      $("tr").append( "<td></td>" )
    }
  })



//

// Your code goes here!

}


$(makeGrid());
