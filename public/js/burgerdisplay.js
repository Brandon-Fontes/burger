$(function() {
    $(".devoured").on("click", function (event) {
        var id = $(this).data("id");
        if($(this).data("devoured") === 0) {
            var devoured = true 
        } else devoured = false

        console.log(devoured);
        console.log(id);
        var newDevoured = {
            devoured: newDevoured
        }

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevoured 
        }).then(
            function() {
                console.log("changed devour status to ", devoured);
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