const theForm = document.querySelector('form')
theForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const pokemonName = document.getElementById("name").value
    const pokemonNamme2 = pokemonName.toLowerCase()
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNamme2}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById("pokemonName").textContent = data.name.toUpperCase()
            document.getElementById("pokemonImg").src = data.sprites.front_default

        })
        .catch((error) => {
            document.getElementById("pokemonName").textContent = error
        });
})