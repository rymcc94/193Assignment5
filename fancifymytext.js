
document.addEventListener("DOMContentLoaded", function () {
    var textArea = document.getElementById("textArea");
    var biggerButton = document.getElementById("biggerButton");
    var radioFancy = document.getElementById("radio1");
    var radioBoring = document.getElementById("radio2");
    var mooButton = document.getElementById("mooButton");

    biggerButton.addEventListener("click", function () {
        textArea.style.fontSize = "24pt";
    });

    radioFancy.addEventListener("change", function () {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    });

    radioBoring.addEventListener("change", function () {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "";
        textArea.style.textDecoration = "";
    });

    mooButton.addEventListener("click", function () {
        textArea.value = textArea.value.toUpperCase();

        var sentences = textArea.value.split(".");
        for (var i = 0; i < sentences.length - 1; i++) {
            var words = sentences[i].split(" ");
            if (words.length > 0) {
                words[words.length - 1] += "-Moo";
            }
            sentences[i] = words.join(" ");
        }
        textArea.value = sentences.join(".");
    });
});
    