

//ONMOUSEOVER IR ONMOUSEOUT

        function bigLogo(x) {
            x.style.height = "64px";
            x.style.width = "64px";
            x.style.marginLeft = "-20px"
        }

        function regularLogo(x) {
            x.style.height = "30px";
            x.style.width = "30px";
        }
        
//MASYVAS IS NUOTRAUKU
        (function() {
            var i = 0;
            var imageDir = "img/";
            var pics = [imageDir + "rest5.jpg", imageDir + "rest6.jpg", imageDir + "rest7.jpg", imageDir + "rest7a.jpg", imageDir + "rest8.jpg", imageDir + "rest9.jpg", imageDir + "rest11.jpg"];
            var el = document.getElementById('img_to_flip'); 
            function toggle() {
                el.src = pics[i]; 
                i = (i + 1) % pics.length; 
            }
            setInterval(toggle, 2000);
        })(); 



//SKAICIUOTI IR RODYTI KAINA EKRANE. TOLOCALESTRING

function skaiciuoti_kaina() {

    var suaug_sk = document.getElementById("suaugusiu_sk").value;
    var vaiku_sk = document.getElementById("vaiku_sk").value;
    var vakariene_sk = document.getElementById("vakariene").value;
    var pramogu_p_sk = document.getElementById("pramogu_p").value;
    var muziejus_sk = document.getElementById("muziejus").value;

    var kainike = (Number(suaug_sk) * 200000) + (vaiku_sk * 95000) + (vakariene_sk * 750) + (pramogu_p_sk * 3000) + (muziejus_sk * 500);


    var ats = document.getElementById("atsakymas");
    ats.innerHTML = kainike.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }) + "  EUR";
}

skaiciuoti_kaina();

//UZSAKYMO PATVIRTINIMO FORMA

function perziureti_kaina() {
    var x = document.getElementById("suaugusiu_sk").value;
    var xEUR = x * 200000;

    document.getElementsByClassName("patvirtinimo_tekstas")[0].innerHTML = "PERŽIŪRĖKITE SAVO UŽSAKYMĄ:" + "<br/>" + "Skrydžio paslauga suaugusiems asmenims (18-64 m.): " + x + " vnt., " + xEUR.toLocaleString() + " EUR";

    var xs = document.getElementById("vaiku_sk").value;

    if (xs > 0) {
        var xsEUR = xs * 95000;
        document.getElementsByClassName("patvirtinimo_tekstas")[1].innerHTML = "Skrydžio paslauga vaikams (12-17 m.): " + xs + " vnt., " + xsEUR.toLocaleString() + " EUR";
    }

    var xres = document.getElementById("vakariene").value;
    if (xres > 0) {
        var xresEUR = xres * 750;
        document.getElementsByClassName("patvirtinimo_tekstas")[2].innerHTML = "Vakarienė restorane 'Galaktika': " + xres + " vnt., " + xresEUR.toLocaleString() + " EUR";
    }

    var xpram = document.getElementById("pramogu_p").value;
    if (xpram > 0) {
        var xpramEUR = xpram * 3000;
        document.getElementsByClassName("patvirtinimo_tekstas")[3].innerHTML = "Apsilankymas pramogų parke: " + xpram + " vnt., " + xpramEUR.toLocaleString() + " EUR";
    }

    var xmuz = document.getElementById("muziejus").value;
    if (xmuz > 0) {
        var xmuzEUR = xmuz * 500;
        document.getElementsByClassName("patvirtinimo_tekstas")[4].innerHTML = "Apsilankymas kosmoso muziejuje: " + xmuz + " vnt., " + xmuzEUR.toLocaleString() + " EUR";
    }

    document.getElementById("patvirtinimo_forma").style.backgroundColor = "white";
    document.getElementById("patvirtinimo_forma").style.border = "1px solid black";
    document.getElementById("patvirtinimo_forma").style.padding = "15px";
    document.getElementById("patvirtinimo-mygtukas").style.display = "block";
    document.getElementById("patvirtinimo-mygtukas").style.backgroundColor = "grey";
}

//UZDAROME PATVIRTINIMO FORMA IR PASAKOME KAD UZSAKYMAS PRIIMTAS
var patvirtinti_uzdaryti = document.getElementById("patvirtinimo-mygtukas");
var patvirtinimo_form_uzd = document.getElementById("patvirtinimo_forma");
patvirtinti_uzdaryti.onclick = function () {
    patvirtinimo_form_uzd.style.display = "none";
    alert("Ačiū, Jūsų užsakymas priimtas.")
}





//PRANESIMAI SU KLAUSTUKU-INFORMACINIAI
// "PAIMTI" pranesima
var modal = document.getElementById('myModal');
var modal_2 = document.getElementById('myModal_2');

// "PAIMTI" pranesimo atidarymo ir uzdarymo mygtukus
var btn = document.getElementById("myBtn");
var btn2 = document.getElementById("myBtn2");
var span = document.getElementsByClassName("close")[0];
var span_2 = document.getElementsByClassName("close")[1];

// Atidaryti pranesima
btn.onclick = function () {
    modal.style.display = "block";
}

btn2.onclick = function () {
    modal_2.style.display = "block";
}

// Uzdaryti pranesima paspaudus <span> (x)
span.onclick = function () {
    modal.style.display = "none";
}

span_2.onclick = function () {
    modal_2.style.display = "none";
}

// EVENT.TARGET, IF - paspaudus langa uz info pranesimo - uzdaryti pranesima
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    } else if (event.target == modal_2) {
        modal_2.style.display = "none";
    }
}
