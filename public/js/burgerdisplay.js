$(function() {
    $(".devoured").on("click", function (event) {
        var id = $(this).data("id");
        var newDevoured = false; 
        if($(this).data("devoured") === 0) {
           newDevoured = true 
        }

        var newDevoured = {
            devoured: newDevoured
        }

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevoured 
        }).then(
            function() {
                location.reload();
            }
        )
    })

    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#nom").val(),
            devoured: $("[name=devoured]:checked").val()
        }
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created new burger on the menu");
                location.reload();
            }
        )
    })


})