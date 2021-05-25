var str = prompt("Enter a string");
var n = str.split('').reverse().join('');
document.write(n + "<br>")
if (str == n) {
    document.write("String is palindrom");
} else {
    document.write("String is not palindrom");
}