/* Here goes your JS code */
document.getElementById('show-popup-form').onclick = function() {
    document.getElementById("popup").style.visibility = "visible";
    document.getElementById("popup").style.opacity = "1";
    document.getElementById("popup").style.transition = ".5s";
    document.getElementById("show-popup-form").style.display = "none";
}
document.getElementById('close').onclick = function() {
    document.getElementById("popup").style.visibility = "hidden";
    document.getElementById("popup").style.opacity = "0";
    document.getElementById("popup").style.transition = ".5s";
    document.getElementById("show-popup-form").style.display = "block";
}
document.getElementById("button").onclick = function() {
    let massage;
    document.forms['frm'].login.value === "" ? massage = 'Please enter your login' : massage = '';
    document.getElementById("validation-login").innerHTML = massage;
    document.forms['frm'].password.value === "" ? massage = 'Please enter your password' : massage = '';
    document.getElementById("validation-password").innerHTML = massage;
    document.getElementById("check-box").checked ? massage = '' : massage = 'Please indicate that you agree to the terms';
    document.getElementById("validation-check-box").innerHTML = massage;
}