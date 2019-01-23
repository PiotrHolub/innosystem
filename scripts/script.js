$(function() {
    $('#name').on('blur', function() {
		var input = $(this);
		var name = input.val()
		if(name.length >= 3 && name.length <= 15 && name.match(/^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+$/)){
            input.removeClass("invalid").addClass("valid");
            $('.fa1').css("display", "block");
		}
		else{
			input.removeClass("valid").addClass("invalid");
		}   
    });

    $('#surname').on('blur', function() {
        var input = $(this);
        var name = input.val()
        if(name.length >= 3 && name.length <= 15 && name.match(/^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+$/)){
            input.removeClass("invalid").addClass("valid");
            $('.fa2').css("display", "block");
        }
        else{
            input.removeClass("valid").addClass("invalid");
        }
    });

    $('#age').on('blur', function() {
        var input = $(this);
        var name = input.val()
        if(name.length >= 1 && name.length <= 15 && name.match(/^[a-zA-Z0-9ąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+$/)){
            input.removeClass("invalid").addClass("valid");
            $('.fa3').css("display", "block");
        }
        else{
            input.removeClass("valid").addClass("invalid");
        }
    });

    $('#adress').on('blur', function() {
        var input = $(this);
        var name = input.val()
        if(name.length >= 3 && name.length <= 15 && name.match(/^[a-zA-Z0-9ąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+$/)){
            input.removeClass("invalid").addClass("valid");
            $('.fa4').css("display", "block");
        }
        else{
            input.removeClass("valid").addClass("invalid");
        }
    });

    $('#email').on('blur', function() {
		var input = $(this);
		var pattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
		var is_email = pattern.test(input.val());
		if(is_email){
            input.removeClass("invalid").addClass("valid");
            $('.fa5').css("display", "block");
		}
		else{
			input.removeClass("valid").addClass("invalid");
		}
});





});