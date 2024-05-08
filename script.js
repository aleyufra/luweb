window.addEventListener('load', () => {

    const btnYes = document.querySelector(".btn-yes");
    const btnNo = document.querySelector(".btn-no");

    let frasesParaNo = [
        "Ño", "No?", "NO?", "¿Como que no?", "Estas segura?", "Estas completamente segura?",
        "Pero ¿Segura segura?", "Deja de darle al no >:v", "Dale que chi :'v", 
        "Y si te doy una salchipapas?", "Super segura?",
        "No puedes decir que no", "Por favor?", "Por favor? Por favor?",
        "Y si me hago de bokita?",
        "Di que chiiiii", "PONE CHI", "Dale al boton verde amor", 
        "Podriamos estar aqui todo el dia XD",
        "Ño? ultima oportunidad",
        "AMOR BASTA",
        "PRESIONA ARRIBA",
        "AL VERDE", "Ya te estas pasando >:v", 
        "vas a romper el boton amor",
        "dale amorchito 🥺",
        "Chi?"
    ]

    console.log("cantidad de frases del no", frasesParaNo.length)

    btnNo.textContent = frasesParaNo[0];
    index = 1;
    vueltaCompleta = false;

    function cambiarTexto() {
        if (!vueltaCompleta && index >= frasesParaNo.length - 1) {
            vueltaCompleta = true;
        } else if (vueltaCompleta) {
            btnNo.style.display = "none";
            sinBtn.style.display = "block";
        }
        btnNo.textContent = frasesParaNo[index];
        index++
    }

    let width = 55
    let height = 40
    let size = 16
    let paddingX = 15;
    btnYes.style.width = `${width}px`
    btnYes.style.height = `${height}px`
    btnYes.style.fontSize = `${size}px`
    btnYes.style.padding = `10px ${paddingX}px`

    btnNo.addEventListener('click', () => {
        cambiarTexto();
        width = width + (width/100 * 13)
        height = height + (height/100 * 13)
        size = size + (size/100 * 15)
        paddingX = paddingX + (paddingX/100 * 8)
        btnYes.style.width = `${width}px`
        btnYes.style.height = `${height}px`
        btnYes.style.fontSize = `${size}px`
        btnYes.style.padding = `10px ${paddingX}px`
    })

    function siApretasteEnChi() {
        const btnContainer = document.querySelector(".btn-container");
        btnContainer.style.display = "none";

        const titleContainer = document.querySelector(".title-container");
        titleContainer.style.display = "none";

        const answerContainer = document.querySelector(".answer-container");
        answerContainer.style.display = "flex";
    }

    // boton que aparece al romper el boton del ño
    const sinBtn = document.querySelector(".sinBtn");
    
    btnYes.addEventListener('click', siApretasteEnChi);
    sinBtn.addEventListener('click', siApretasteEnChi);

});