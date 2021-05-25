var value = prompt("enter a temperatue to convert celsius to fehrenheit");
CtoF(value);

function CtoF(Cl) {
    var Ff;
    Ff = (Cl * (9 / 5)) + 32;
    document.write(Ff + "F" + "<br>");
}

function FtoC(Fh) {
    var Cc;
    Cc = (Fh - 32) * (5 / 9);
    document.write(Cc + "C");
}

var value1 = prompt("enter a temperatue to convert fehrenheit to celsius ");
FtoC(value1)