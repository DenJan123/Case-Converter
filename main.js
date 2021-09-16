const textArea = document.querySelector("textarea");
const upperCase = document.querySelector("#upper-case");
const lowerCase = document.querySelector("#lower-case");
const properCase = document.querySelector("#proper-case");
const sentenceCase = document.querySelector("#sentence-case");
const saveFile = document.querySelector("#save-text-file");


function getTextFromTextArea() {
    return textArea.value;
}

function makeUpper() {
    console.log("upper pressed")
    let text = getTextFromTextArea().toUpperCase();
    console.log(text)
    textArea.value = text;
}

upperCase.addEventListener("click", makeUpper);

function makeLower() {
    let text = getTextFromTextArea();
    textArea.value = text.toLowerCase();
}

lowerCase.addEventListener("click", makeLower);

function makeProper() {
    let text = getTextFromTextArea();
    text = text.split(" ");
    text = text.map(function (string) {
        string = string.slice(0, 1).toUpperCase() + string.slice(1);
        return string;
    }).join(" ");
    // console.log(text);
    textArea.value = text;
}

properCase.addEventListener("click", makeProper);

function makeSentence() {
    let text = getTextFromTextArea();
    text = text.split(".");
    text = text.map(function (string) {
        let ind = string.match("[A-za-z]") == null ? 0 : string.indexOf(string.match("[A-za-z]")[0]);
        string = string.slice(0, ind) + string.charAt(ind).toUpperCase() + string.slice(ind + 1).toLowerCase();
        return string;
    }).join(".");
    console.log(text.slice(0, -1));
    textArea.value = text;
}

sentenceCase.addEventListener("click", makeSentence);

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

function saveFileFunction() {
    let text = getTextFromTextArea();
    download("text.txt", text);
}

saveFile.addEventListener("click", saveFileFunction);