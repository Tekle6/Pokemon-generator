const url =  "https://pokeapi.co/api/v2/pokemon/"
const btn = document.querySelector(".btn")
const card = document.querySelector("#card")

function generateData(data)
{

    card.innerHTML = `
    <p class="hp"> <span>HP</span> ${data.stats[0].base_stat} </p>
    <img src="${data.sprites.front_default}" alt="">
    <h2 class="poke-name"> ${data.name} </h2>

    <div class="types">

        

    </div>

    <div class="stats">

        <div>

            <h3> ${data.stats[1].base_stat} </h3>
            <p> Attack </p>

        </div>
        

        <div>

            <h3> ${data.stats[2].base_stat} </h3>
            <p> Defense </p>

        </div>

        <div>

            <h3> ${data.stats[5].base_stat} </h3>
            <p> Speed </p>

        </div>

    </div>
    `;
    appendTypes(data.types)

   
}

function appendTypes(types)
{
    types.forEach((item) => 
    {
        let span = document.createElement('span')
        span.textContent = item.type.name
        document.querySelector(".types").appendChild(span)
    })
}

function getPokemon()
{
    let id = Math.floor((Math.random() * 150) + 1)
    let finalUrl = url + id
    
   

    fetch(finalUrl)
    .then((response) => response.json())
    .then((data) =>
    {
        
       
        generateData(data)
        
    })

}

btn.addEventListener('click', getPokemon)
window.addEventListener('load', getPokemon)