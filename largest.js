var a = prompt("Enter 1st number");
var b = prompt("Enter 2nd number");
var c = prompt("Enter 3rd number");

if (a > b) {
    if (a > c) {
        document.write("a is largest")
    } else {
        document.write("c is largest ")
    }
} else {
    document.write("b is largest ")
}