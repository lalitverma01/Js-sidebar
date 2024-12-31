function navopen() {
    document.getElementById("sidebar").style.width = "286px";
    document.getElementById("sidebar").style.display = "block";
    document.getElementById("bg-layer").style.display = "block";
}

function navclose() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("bg-layer").style.display = "none";

}