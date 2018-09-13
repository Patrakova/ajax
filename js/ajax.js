$("button").on("click", function(){
    var number = $("#number").val();
    var pow = $("#pow").val();
    $.ajax({
        "url":"ajax.php",
        "method": "POST",
        "data":{"number":number,"pow":pow},
        "success": function(data) {
            var response = JSON.parse(data);
            console.log(response);
            var result = "При возведении числа " + response.ajaxNumber + " в степень " + response.ajaxPow + " получится " + response.ajaxResult;
            $("p").html(result);
        }
    });
});

