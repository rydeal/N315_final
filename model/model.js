var MODEL = (function() {

    var _getView = function(viewName){
        $.get(`../views/${viewName}/${viewName}.html`, function(data) {
            $("#app").html(data);
        });

        $("#home").removeClass("current");
        $("#browse").removeClass("current");
        $("#create").removeClass("current");
        $("#login").removeClass("current");
        $("#view").removeClass("current");
        $("#all").removeClass("current");
        $(`#${viewName}`).addClass("current");
    };


    return {
        getView: _getView,
    };
})();