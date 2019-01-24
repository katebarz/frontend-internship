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