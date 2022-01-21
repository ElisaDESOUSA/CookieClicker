// CLICKER BASE
let clicks = 0;

function increment(){
    clicks = clicks + 1;
    eatenCookie.innerHTML = clicks;
}
// CLICKER BOOST

document.getElementById('cookie').addEventListener("click", boostCookie)
function boostCookie() {
    points = points + boostCookie;
    document.getElementById("cookie").innerHTML = points;
    uptade();
}