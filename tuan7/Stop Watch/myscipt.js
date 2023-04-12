window.onload = function() {
    var sophut = 00;
    var sogiay = 00;
    var somiligiay = 00;
    var getphut = document.getElementById("phut")
    var getgiay = document.getElementById("giay");
    var getmiligiay = document.getElementById("miligiay");
    var getstart = document.getElementById('Start');
    var getstop = document.getElementById('Stop');
    var getreset = document.getElementById('Reset');
    var Interval;

    getstart.onclick = function() {
        clearInterval(Interval);
        Interval = setInterval(s, 10);
    }
    getstop.onclick = function() {
        clearInterval(Interval);
    }
    getreset.onclick = function() {
        clearInterval(Interval);
        sophut = "00";
        sogiay = "00";
        somiligiay = "00";
        getphut.innerHTML = sophut;
        getgiay.innerHTML = sogiay;
        getmiligiay.innerHTML = somiligiay;
    }

    function s() {
        somiligiay++;
        if (somiligiay < 9) {
            getmiligiay.innerHTML = "0" + somiligiay;
        }
        if (somiligiay > 9) {
            getmiligiay.innerHTML = somiligiay;
        }
        if (somiligiay > 99) {
            console.log("sogiay");
            sogiay++;
            getgiay.innerHTML = "0" + sogiay;
            somiligiay = 00;
            getmiligiay.innerHTML = "0" + 0;
        }
        if (giay > 9) {
            getgiay.innerHTML = sogiay;
        }
        if (giay > 60) {
            console.log("spphut");
            sophut++;
            getphut.innerHTML = "0" + sophut;
            sogiay = 00;
            getgiay.innerHTML = "0" + 0;
        }
    }
}