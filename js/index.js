/* Here goes your JS code */
document.getElementById('show-popup-form').onclick = e => {
    document.getElementById("popup").style.visibility = "visible";
    document.getElementById("popup").style.opacity = "1";
    document.getElementById("popup").style.transition = ".5s";
    document.getElementById("show-popup-form").style.display = "none";
}
document.getElementById('close').onclick = e => {
    document.getElementById("popup").style.visibility = "hidden";
    document.getElementById("popup").style.opacity = "0";
    document.getElementById("popup").style.transition = ".5s";
    document.getElementById("show-popup-form").style.display = "block";
}
document.getElementById("button").onclick = e => {
    let message1, message2, message3;
    document.forms['frm'].login.value === "" ? message1 = 'Please enter your login' : message1 = '';
    document.getElementById("validation-login").innerHTML = message1;
    document.forms['frm'].password.value === "" ? message2 = 'Please enter your password' : message2 = '';
    document.getElementById("validation-password").innerHTML = message2;
    document.getElementById("check-box").checked ? message3 = '' : message3 = 'Please indicate that you agree to the terms';
    document.getElementById("validation-check-box").innerHTML = message3;
    if (!message1 && !message2 && !message3) {
        setTimeout(hide, 3000);
    }
}

function hide() {
    document.getElementById("popup").style.visibility = "hidden";
    document.getElementById("thank-you").innerHTML = 'Thank you';
}