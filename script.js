const theForm = document.querySelector('form')
const pokemoninput = document.getElementById("pokemonName")
const frontImg = document.getElementById("pokemonfront")
const backImg = document.getElementById("pokemonback")
const h = document.getElementById("height")
const w = document.getElementById("weight")
const toCapitalse = (str) => {
    let lowered = str.toLowerCase()
    return str.charAt(0).toUpperCase() + lowered.slice(1)
}

theForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const pokemonName = document.getElementById("name").value
    const pokemonNamme2 = pokemonName.toLowerCase()
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNamme2}`)
        .then(response => response.json())
        .then(data => {
            pokemoninput.textContent = toCapitalse(data.name)
            frontImg.src = data.sprites.front_default
            backImg.src = data.sprites.back_default
            frontImg.alt = data.name
            backImg.alt = data.name
            h.textContent = `Height: ${data.height}`
            w.textContent = `Weight: ${data.weight}`
            console.log(data)
        })

        .catch((error) => {
            if (error) {
                theForm.reset()
                pokemoninput.textContent = ''
                frontImg.src = ''
                backImg.src = ''
                frontImg.alt = ''
                backImg.alt = ''
                h.textContent = ''
                w.textContent = ''
                document.getElementById("err-code").textContent = `We can't find this pokemon, please enter again`
                console.log(error)
                setTimeout(() => {
                    document.getElementById("err-code").textContent = ''
                }
                    , 2000)
            }
        });
})