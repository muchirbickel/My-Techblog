// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-devoured").on("click", function(event) {
      var id = $(this).data("id");
      var newdevoured = $(this).data("newdevoured");
  
      var newdevouredState = {
        devoured: newdevoured
      };
  
      // Send the PUT request.
      $.ajax("/api/techblogs/" + id, {
        type: "PUT",
        data: newdevouredState
      }).then(
        function() {
          console.log("changed devoured to", newdevoured);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      //validator to prevent generating empty input  
      if ($("#Burg").val().trim()==="" || $("#Burg").val().trim()===" " || $("#Burg").val().trim()== null) {
        alert("Please Enter a valid techblog's name!")  
      } else {
      var newtechblog = {
        techblog_name: $("#Burg").val().trim(),
      };
      // Send the POST request.
      $.ajax("/api/techblogs", {
        type: "POST",
        data: newtechblog
      }).then(
        function() {
          console.log("created new techblog");
          // Reload the page to get the updated list
          location.reload();
        }
      )};
    });
    
    $(".delete-techblog").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/techblogs/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted techblog", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  