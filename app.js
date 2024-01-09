let radios = document.querySelectorAll("input[type='radio']");
const metric = document.querySelector('#metric');
const imperial = document.querySelector('#imperial');
radios = Array.from(radios)

radios.forEach((radio) => {
    radio.addEventListener('change', () => {
        for (const eachRadio of radios) {
            if (eachRadio.checked) {
                if (eachRadio === radios[1]) {
                    metric.style.display = 'none';
                    imperial.style.display = 'grid';
                    getKg();
                } else if (eachRadio === radios[0]) {
                    imperial.style.display = 'none';
                    metric.style.display = 'grid';
                    getCm();
                }
            }
        }
    })
})



function getCm() {
    const cm = document.querySelector("input[name='centimeter']");
    cm.addEventListener('input', () => {
        console.log(cm.value)
        return cm.value;
    })
}

function getKg() {
    const kg = document.querySelector("input[name='kilogram']");
    kg.addEventListener('input', () => {
        console.log(kg.value)
        return kg.value;
    })
}



getCm();
getKg();
