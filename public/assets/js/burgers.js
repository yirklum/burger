
$(function() {
    // Move burgers into devoured list on click
    $(".change-position").on("click", function(event) {
      var id = $(this).data("id");
      var nowDevoured = $(this).data("nowdevoured");
  
      var nowDevouredBurger = {
        devoured: true
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: nowDevouredBurger
      }).then(
        function() {
          console.log("changed state to", nowDevoured);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });  

    // Move burgers back to "undevoured" list on click
    $(".send-back").on("click", function(event) {
        var id = $(this).data("id");
        var sentBack = $(this).data("sentBack");
    
        var sentBackBurger = {
          devoured: false
        };
    
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: sentBackBurger
    }).then(
        function() {
            console.log("changed state to", sentBackBurger);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });  
    
    // Add a new burger
    $(".add-burger-form").on("submit", function(event) {
        event.preventDefault();
    
        var newBurger = {
            name: $("#new-burger").val().trim(),
            devoured: false
        };
  
        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("Added new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});
  