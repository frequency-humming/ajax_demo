$( document ).ready(function() {
$('#button_json').click(function(){
    console.log('button json clicked')
    $.ajax({
        url: '/user_login/all.json',
        success: function(serverResponse) {
            console.log('succes', serverResponse)
            $('#placeholder_1').html(JSON.stringify(serverResponse))
        }
    })
});
$('#button_html').click(function(){
    console.log('button html clicked')
    $.ajax({
        url: '/user_login/all.html',
        success: function(serverResponse) {
            console.log('succes', serverResponse)
            $('#placeholder_1').html(serverResponse)
        }
    })
});

$('#ajax_first_name').keyup(function(){
    console.log('here')
    $.ajax({
        url: '/user_login/find',
        method: 'post',
        data: $(this).parent().serialize(),
        success: function(serverResponse){
            console.log('success', serverResponse)
            $('#placeholder_2').html(serverResponse)
        }
    })
});

$('#create_user').submit(function(e){
    e.preventDefault()
    $.ajax({
        url: $(this).attr('action'),
        method: 'post',
        data: $(this).serialize(),
        success: function(serverResponse){
            console.log('success', serverResponse)
            $('#placeholder_3').html(serverResponse)
        }
    })
});

});