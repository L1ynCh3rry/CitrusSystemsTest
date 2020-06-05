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

/* Email Register */
function emailRegFunction() {
    var email, terms, regEmail, errors, correct, outcome;
    email = document.getElementById("emailEmail").value;
    terms = document.getElementById("checkterms");

    /* Email checker */
    regEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

    /* Arrays for errors and success */
    errors = new Array();
    correct = new Array();

    /* Testing email */
    if (!regEmail.test(email)) {
        errors.push("Your email address is incorrect");
    } else {
        correct.push("Email: " + email);
    }
    /* Testing if terms is checked */
    if (terms.checked) {

        correct.push("You accepted the terms");
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

    /* Starting 1st timer here */
    if (errors.length == 0) {
        setTimeout(loading, 200.0)
    }

    /* Loading function and starting 2nd timer */
    function loading() {
        document.getElementById("success").classList.add('succesfully');
        document.getElementById('darkblock').classList.add('darker');
        setTimeout(loadingend, 3000.0)
    }

    /* Final loading and ending of registration */
    function loadingend() {
        document.getElementById("success").classList.remove('succesfully');
        document.getElementById('darkblock').classList.remove('darker');
        /* Results */
        if (errors.length == 0) {
            outcome = "<ul>";
            for (var i = 0; i < correct.length; i++) {
                outcome += "<li style='color:#137000;'>" + correct[i] + "</li>";
            }
            outcome += "</ul>";

            /* Clearing and getting done */
            document.getElementById("error").style.display = "block";
            document.getElementById("login").style.display = "block";
            document.getElementById("error").style.top = "20%";
            document.getElementById("blockemail").style.display = "none";
            document.getElementById("blockmobile").style.display = "none";
            document.getElementById("error").innerHTML = outcome;
            document.getElementById('buttonEmail').onclick = null;
            document.getElementById('buttonMobile').onclick = null;
            document.getElementById('buttonMobile').classList.add('disablehover');
        }
    }
}



/* Mobile Register */
function mobileRegFunction() {
    var mobile, terms, regMobile, errors, correct, outcome;
    mobile = document.getElementById("mobile").value;
    terms = document.getElementById("mcheckterms");

    /* Mobile checker */
    regMobile = /^(\+\d{1,3}[- ]?)?\d{10}$/;

    /* Arrays for errors and success */
    errors = new Array();
    correct = new Array();

    /* Checking mobile number */
    if (!regMobile.test(mobile)) {
        errors.push("Your mobile phone is incorrect, mobile should be exactly 10 numbers");
    } else {
        correct.push("Number: " + mobile);
    }
    /* Checking if terms is checked */
    if (terms.checked) {
        correct.push("You accepted the terms");
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
    /* Displaying errors */
    document.getElementById("error").style.display = "block";
    document.getElementById("error").innerHTML = outcome;

    /* Starting first timer here */
    if (errors.length == 0) {
        setTimeout(loading, 200.0)
    }

    /* Ending function and 2nd timer */
    function loading() {
        document.getElementById("success").classList.add('succesfully');
        document.getElementById('darkblock').classList.add('darker');
        setTimeout(loadingend, 3000.0)
    }

    /* Final function */
    function loadingend() {
        document.getElementById("success").classList.remove('succesfully');
        document.getElementById('darkblock').classList.remove('darker');
        /* Results */
        if (errors.length == 0) {
            outcome = "<ul>";
            for (var i = 0; i < correct.length; i++) {
                outcome += "<li style='color:#137000;'>" + correct[i] + "</li>";
            }
            outcome += "</ul>";

            /* Clearing and getting done */
            document.getElementById("error").style.display = "block";
            document.getElementById("login").style.display = "block";
            document.getElementById("error").style.top = "20%";
            document.getElementById("blockemail").style.display = "none";
            document.getElementById("blockmobile").style.display = "none";
            document.getElementById("error").innerHTML = outcome;
            document.getElementById('buttonEmail').onclick = null;
            document.getElementById('buttonMobile').onclick = null;
            document.getElementById('buttonEmail').classList.add('disablehover');
        }
    }
}