function initListensers() {
    $("#nav nav a").click(function() {
        var btnId = this.id;
        MODEL.getView(btnId);
    });

    $(".viewBtn").click(function() {
        var btnId = this.id;
        MODEL.getView(btnId);
    })
}



function initSite() {
    $.get('views/nav.html', function(nav) {
        $("#nav").html(nav);
        $(`#home`).addClass("current");
    });

    $.get('views/home/home.html', function(data) {
        $("#app").html(data);
    });

    $.get('views/footer.html', function(data) {
        $("#footer").html(data);
        initListensers();
    });
}

// function viewRecipeListener() {
//     $(".viewBtn").click(function() {
//         var btnId = this.id;
//         MODEL.getView(btnId);
//     });

// }


$(document).ready(function() {
    initSite();
});

// Was trying to find out how to implement adding listeners within a view but couldn't manage it, found this here: https://api.jquery.com/on/
$(document).on('click', '#view', function() {
    var btnId = this.id;
    MODEL.getView(btnId);
});

$(document).on('click', "#edit", function() {
    var btnId = this.id;
    MODEL.getView(btnId);
});


$(document).on('click', ".navicon", function() {
    $(".navicon").click(function() {
        $("nav").toggleClass("navMobileView");
        if($(".links").css("display") == "none") {
            $(".links").css("display", "flex"); 
        } else {
            $(".links").css("display", "none");
        }
    });
});

// alerts
$(document).on('click', ".createRecipe", function() {
    if(confirm("Would you like to create the recipe?") == true) {
        alert("Recipe created!");
        MODEL.getView("home");
    } else {
        MODEL.getView("create");
    };
})

$(document).on('click', '.loginBtn', function() {
    alert("You have been logged in!");
    MODEL.getView("all");
});

$(document).on('click', '.signupBtn', function() {
    alert("Sign up successful!");
    MODEL.getView("all");
});
