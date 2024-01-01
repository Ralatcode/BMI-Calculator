let radios = document.querySelectorAll("input[type='radio'");
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
                }
                // console.log(eachRadio.value)
            }
        }
    })
})
// console.log(radios)