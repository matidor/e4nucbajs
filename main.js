//url para la llamada a la api 
const baseURL = "https://pokeapi.co/api/v2/pokemon/";

const idInput = document.getElementById(pokeId);

const pokemoncontainer = document.getElementById('pokecontainer');
//

const pokemones = async (id) => {
    try {
        const response = await fetch(baseURL + id);
        const pokemon = await response.json();
        console.log(pokemon);
        renderpokemon(pokemon);

    } catch (error) {
        console.error(`upssss no hay pokemos con ese id`);
    }
}


const renderpokemon = pokemon => {
    const imagen = pokemon.sprites.other.home.front_default;
    const tipo = pokemon.types[0].type.name;

    const { name, height, weight, } = pokemon;
    pokecontainer.innerHTML =
        `
    <div class='card'>
        <h1> ${name}</h1>
        <img src="${imagen}" />
        <h4> tipo : ${tipo}</h4>
        
        <h4>Altura:${height / 10} metros</h4>
        <h4>Peso: ${weight / 10} kilogramos</h4>
    </div> 
`

}


poke.addEventListener('submit', e => {
    e.preventDefault();
    const valor = pokeId.value;
    console.log(valor);
    if (valor > 0) {
        pokemones(valor);
    }
    else {
        alert(`no se aceptan numeros negativos`);
    }
    pokeId.value = '';
}
)
    ;




