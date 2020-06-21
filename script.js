let rec;
const button = document.querySelector("button")
let text = document.querySelector('#texto')

if (!("webkitSpeechRecognition" in window)) {
    alert("Disculpa, no puedes usar la API");
} else {
    rec = new webkitSpeechRecognition();
    rec.lang = "eng";
    rec.continuous = true;
    rec.interim = false;
    rec.addEventListener("result", iniciar);
    }
function iniciar(event) {
    for (let i = event.resultIndex; i < event.results.length; i++) {
        document.getElementById('texto').innerHTML = event.results[i][0].transcript;
    }
}
button.onclick = () => {
    texto.innerHTML = ""
}

rec.start();



document.querySelector('#speak').onclick = () =>{
    say(document.querySelector("#text").value)
}
function say(texto){
    speechSynthesis.speak(new SpeechSynthesisUtterance(texto))
}