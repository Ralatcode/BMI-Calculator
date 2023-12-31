let radios = document.querySelectorAll("input[type='radio'");
radios = Array.from(radios)

radios.forEach((radio) => {
    radio.addEventListener('change', () => {
        for (const eachRadio of radios) {
            if (eachRadio.checked) {
                console.log(eachRadio.value)
            }
        }
    })
})
// console.log(radios)