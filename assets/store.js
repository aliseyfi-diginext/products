$(document).ready(function () {

    $('.main-form').submit(function (e) {
        e.preventDefault();
        var data = {
            title : $('#title').val(),
            price : $('#price').val(),
            discount : $('#discount').val(),
            description : $('#description').val(),
        };

        $.ajax({
            url: "http://162.55.11.151:8008/api/product",
            method : 'POST',
            headers : {
                Authorization : 'Bearer:xQnAtrdY33oMzG2Y33T6wcnuFLf3XM2Td3CMY18YRNcbkFb0RgpHQ1bSb2afwgLIy5xXc5maeFUZxXNY'
            },
            data : data,
            success : function () {
                location.href = 'index.html?success';
            }
        });
        console.log(data);
    });

});
