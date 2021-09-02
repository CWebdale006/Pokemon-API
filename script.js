// search button functions
const searchBtn = document.getElementById('search-btn'); 
const inputField = document.getElementById('name-input');
const nameScreen = document.getElementById('name-screen');
const imageScreen = document.getElementById('main-screen');
const aboutScreen = document.getElementById('about-screen');
const typeScreen = document.getElementById('type-screen');
const idScreen = document.getElementById('id-screen');

// nav button functions 
const left = document.getElementById('left');
const right = document.getElementById('right');
let currentId = idScreen.innerText.substring(1);

// accessing the pokemon data from the api
const getPokemonData = (pokemon) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then((res) => res.json())
        .then((data) => {
            let id = ('00' + data.id).slice(-3);
            currentId = data.id;
            imageScreen.style.backgroundImage = `url('https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png')`;
            nameScreen.innerHTML = data.name;
            typeScreen.innerHTML = data.types[0].type.name;
            idScreen.innerHTML = `#${data.id}`;
            aboutScreen.innerHTML = `Height: ${data.height * 10}cm Weight: ${data.weight / 10}kg`;
            inputField.value = '';
        })
        .catch((err) => {
            alert("Please enter a valid name or id");
            console.log(err);
        });
};

// event listeners for the search bar 
inputField.addEventListener('keydown', (event) => event.key === 'Enter' && searchBtn.click());
searchBtn.addEventListener('click', () => getPokemonData(inputField.value));

// function the change the id when using nav buttons 
const moveId = (id, dir) => {
    id = parseInt(id);
    if (dir === "left") {
        if (id === 1) id = 899;
        id = id - 1;
        getPokemonData(id);
    }
    if (dir === "right") {
        if (id === 898) id = 0;
        id = id + 1;
        getPokemonData(id);
    }
}

// event listeners for the nav buttons 
left.addEventListener('click', () => moveId(currentId, "left"));
right.addEventListener('click', () => moveId(currentId, "right"));