var btnTranslate = document.querySelector("#btn-translate")
var txtInput = document.querySelector("#txt-input") 
var outputDiv=  document.querySelector("#output")

var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
function getTranslationnURL(text){
    return serverURL + "?"+ "text"+ text
}

function clickHandler(){
    // outputDiv.innerText="botttommmm " + txtInput.value;
    var inputText = txtInput

    fetch(getTranslationnURL(inputText))
    .then(response=>response.json())
    .then(json => console.log(json.contents.translated))
};
btnTranslate.addEventListener("click",clickHandler)
