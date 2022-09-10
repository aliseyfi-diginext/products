$(document).ready(function () {

    if (location.search.substr(1) == 'success') {
        $('.alert').show();
    }

    $.ajax({
        url: "http://162.55.11.151:8008/api/product",
        method : 'GET',
        headers : {
            Authorization : 'Bearer:xQnAtrdY33oMzG2Y33T6wcnuFLf3XM2Td3CMY18YRNcbkFb0RgpHQ1bSb2afwgLIy5xXc5maeFUZxXNY'
        },
        success: function(result){
            var contents = '';
            for (var i = 0; i < result.length; i++) {
                var product = result[i];
                contents += `
                    <div class="product">
                        <img src="${product.picture_path}" alt="${product.title}" />
                        <h1> ${product.title} </h1>
                        <p class="price"> ${product.price.toLocaleString()} تومان </p>
                        <p class="payable"> ${Math.round(product.payable).toLocaleString()} تومان </p>
                        <p> ${product.description} </p>
                        <span> ${product.discount}% </span>
                        <div class="actions">
                            <a class="edit" href="#"> ویرایش </a>
                            <a class="delete" href="#"> حذف </a>
                        </div>
                    </div>
                `;
            }
            $('.products').html(contents);
        }
    });

});
