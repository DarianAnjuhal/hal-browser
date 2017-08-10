(function() {
    //add by cmayr and dantlinger manually -> bad HOTFIX
    $.ajaxSetup({ beforeSend: function (xhr) { xhr.setRequestHeader("Authorization",$('.request-headers textarea').val()); } });
    console.log("Add custom Auth stuff to each ajax call -> HOTFIX");

})();