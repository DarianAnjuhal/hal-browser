(function () {
    //add by cmayr and dantlinger manually -> bad HOTFIX
    $.ajaxSetup({
        beforeSend: function (xhr) {
            const searchParams = new URLSearchParams(window.location.search);
            const token = searchParams.get('token');
            if(token) {
                $('.request-headers textarea').val('Authorization: Bearer ' + token);
            }
            const textAreaValue = $('.request-headers textarea').val();
            if (textAreaValue) {
                const headers = HAL.parseHeaders(textAreaValue);
                if (headers.hasOwnProperty('Authorization')) {
                    xhr.setRequestHeader("Authorization", headers.Authorization);
                }
            }
        }
    });
    console.log("Add custom Auth stuff to each ajax call -> HOTFIX");

})();