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
                } else if (eachRadio === radios[0]) {
                    imperial.style.display = 'none';
                    metric.style.display = 'grid';
                    const cmValue = getCm();
                    const kgValue = getKg();

                    if (cmValue === undefined || kgValue === undefined) {
                        return;
                    } else if (cmValue === 0 || kgValue === 0) {
                        return;
                    } else {
                        console.log('calculate...')
                    }

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

function BMICalculator (weight, height) {
    const result = weight/(height**2) * 10000;
    return result.toFixed(2);
}

console.log(BMICalculator(85, 180));
console.log(typeof(24));


getCm();
getKg();
