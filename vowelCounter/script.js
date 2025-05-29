function countVowels(){

    var inputText = document.getElementById("inputText").value;
    var vowelCount = 0;

    inputText = inputText.toLowerCase();

    for( var i = 0; i < inputText.length ; i++){

        var char = inputText.charAt(i);

        if(isVowel(char)){
            vowelCount++;
        }
    }

    var result = document.getElementById("result");
    result.textContent = "Total Vowels: " + vowelCount;
}

function isVowel(char){

    var vowels = ["a","e","i","o","u"];
    return vowels.includes(char);
}