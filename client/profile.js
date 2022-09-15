function happiness(){
    alert("do something just because it makes you feel good, be who you want to be, do the things that give your life more meaning") }
    axios.get(`${baseURL}happiness`)
    .then(res => message.innerHTML = res.data.input)
happiness.addEventListener("click", happiness);

function sadness(){
    alert("you may feel small, but to someone, you are big")}
sadness.addEventListener("click", sadness);

function anger(){
    alert("Being angry is okay. Being upset is okay. Feeling your emotions is okay. You do not have to have permission to feel things.")}
sadness.addEventListener("click", sadness);

function disgust(){
    alert("Don't feel disgusted with yourself.")}
sadness.addEventListener("click", sadness);


function fear(){
    alert("I don't need to be afraid of change. everything is always moving, flowing, shifting.")}
sadness.addEventListener("click", fear);


function surprise(){
    alert("Surprising oneself is the greatest form of surprise.")}
sadness.addEventListener("click", sadness);



