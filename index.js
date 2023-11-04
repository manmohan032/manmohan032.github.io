var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-content");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-content");
}



function showmenu() {

    document.getElementById("mob_menu").classList.add("show_menu");
}
function unshowmenu() {

    document.getElementById("mob_menu").classList.remove("show_menu");
}
function openmenu() {
    document.getElementById("mob_menu").style.right = "0";

}
function closemenu() {
    document.getElementById("mob_menu").style.right = "-200px";
}
