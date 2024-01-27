$(document).ready(() => {

    $("#quote").submit((e) => {
        e.preventDefault();

        var formData = $('#quote').serialize();

        $.ajax({
            type: 'POST',
            url: './forms/val.php',
            data: formData,
            success: (response) => {
                if(response.errors == 1){
                    $('#name-error').html(response.name);
                    $('#email-error').html(response.email);
                    $('#phone-error').html(response.phone);
                    $('#msg-error').html(response.msg);
                }
                else{
                    window.location.href = response;
                }
            }
        });
    })
})