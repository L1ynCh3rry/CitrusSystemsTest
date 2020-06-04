/* document.getElementById("block").style.border = 'solid #000'; */

/* EMAIL BUTTON */
function emailFunction() {
    document.getElementById("blockemail").style.left = '0';
    document.getElementById("blockmobile").style.left = '100%';
    document.getElementById("buttonEmail").classList.add('active');
    document.getElementById("buttonMobile").classList.remove('active');
};

/*  MOBILE BUTTON */
function mobileFunction() {
    document.getElementById("blockemail").style.left = '-100%';
    document.getElementById("blockmobile").style.left = '0';
    document.getElementById("buttonEmail").classList.remove('active');
    document.getElementById("buttonMobile").classList.add('active');
};

/* Register */
function emailRegFunction() {
    var email, terms, regEmail, errors, correct, outcome;
    email = document.getElementById("emailEmail").value;
    terms = document.getElementById("checkterms");

    regEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

    errors = new Array();
    correct = new Array();

    if (!regEmail.test(email)) {
        errors.push("Email is incorrect");
    } else {
        correct.push("Email: " + email);
    }
    if (terms.checked) {

        correct.push("You accepted terms");
    } else {
        errors.push("You must accept our terms and conditions!");
    }


    // FINALIZING
    outcome = "<ul>";
    if (errors.length != 0) {
        for (var i = 0; i < errors.length; i++) {
            outcome += "<li style='color:#ff0000;'>" + errors[i] + "</li>";
        }
    }

    outcome += "</ul>";

    document.getElementById("error").style.display = "block";
    document.getElementById("error").innerHTML = outcome;

    if (errors.length == 0) {
        setTimeout(loading, 200.0)
    }

    function loading() {
        document.getElementById("success").classList.add('succesfully');
        document.getElementById('darkblock').classList.add('darker');
        setTimeout(loadingend, 3000.0)

    }

    function loadingend() {
        document.getElementById("success").classList.remove('succesfully');
        document.getElementById('darkblock').classList.remove('darker');
        if (errors.length == 0) {
            outcome = "<ul>";
            for (var i = 0; i < correct.length; i++) {
                outcome += "<li style='color:#0fe300;'>" + correct[i] + "</li>";
            }
            outcome += "</ul>";

            document.getElementById("error").style.display = "block";
            document.getElementById("error").innerHTML = outcome;
        }
    }



}



/* Register */
function mobileRegFunction() {
    var mobile, terms, regMobile, errors, correct, outcome;
    mobile = document.getElementById("mobile").value;
    terms = document.getElementById("mcheckterms");

    regMobile = /^(\+\d{1,3}[- ]?)?\d{10}$/;

    errors = new Array();
    correct = new Array();

    if (!regMobile.test(mobile)) {
        errors.push("Mobile phone is incorrect");
    } else {
        correct.push("Number: " + mobile);
    }
    if (terms.checked) {

        correct.push("You accepted terms");
    } else {
        errors.push("You must accept our terms and conditions!");
    }


    // FINALIZING
    outcome = "<ul>";
    if (errors.length != 0) {
        for (var i = 0; i < errors.length; i++) {
            outcome += "<li style='color:#ff0000;'>" + errors[i] + "</li>";
        }
    }

    outcome += "</ul>";

    document.getElementById("error").style.display = "block";
    document.getElementById("error").innerHTML = outcome;

    if (errors.length == 0) {
        setTimeout(loading, 200.0)
    }

    function loading() {
        document.getElementById("success").classList.add('succesfully');
        document.getElementById('darkblock').classList.add('darker');
        setTimeout(loadingend, 3000.0)

    }

    function loadingend() {
        document.getElementById("success").classList.remove('succesfully');
        document.getElementById('darkblock').classList.remove('darker');
        if (errors.length == 0) {
            outcome = "<ul>";
            for (var i = 0; i < correct.length; i++) {
                outcome += "<li style='color:#0fe300;'>" + correct[i] + "</li>";
            }
            outcome += "</ul>";

            document.getElementById("error").style.display = "block";
            document.getElementById("error").innerHTML = outcome;
        }
    }

}