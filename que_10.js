function vowels(str1) {
    var vowel_list = 'aeiouAEIOU';
    var count_vowel = 0;
    var a_count = 0;
    var e_count = 0;
    var i_count = 0;
    var o_count = 0;
    var u_count = 0;

    for (var x = 0; x < str1.length; x++) {
        if (vowel_list.indexOf(str1[x]) !== -1) {
            count_vowel += 1;
        }
        if (str1[x] == 'a' || str1[x] == 'A') {
            a_count = a_count + 1;
        }
        if (str1[x] == 'e' || str1[x] == 'E') {
            e_count = e_count + 1;
        }
        if (str1[x] == 'i' || str1[x] == 'I') {
            i_count = i_count + 1;
        }
        if (str1[x] == 'o' || str1[x] == 'O') {
            o_count = o_count + 1;
        }
        if (str1[x] == 'u' || str1[x] == 'U') {
            u_count = u_count + 1;
        }
    }
    console.log("A : " + a_count);
    console.log("E : " + e_count);
    console.log("I : " + i_count);
    console.log("O : " + o_count);
    console.log("U : " + u_count);
    return count_vowel;

}
console.log(vowels("hey This is Skillsanta JS Trainig"))