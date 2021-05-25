function DOB(n) {
    var year = dob.slice(6, 10);
    var age = Math.abs(2021 - year);
    //document.write(age);
    if (age > 18 && age < 44) {
        window.open("https://selfregistration.cowin.gov.in/", '_blank');
    } else {
        document.write("you are not eligible");
    }
}

var dob = prompt("enter the DOB in this DD/MM/YYYY format ");
DOB(dob);