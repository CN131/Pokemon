const baseURL = 'https://pokeapi.co/api/v2/pokemon/';
const picture = document.getElementById('picture');
const answer = document.getElementById('answer');
const button = document.getElementById('answerButton');
const info = document.getElementById('info');
let myURL;
let pokeData;

function getPokemon(){
    let rand = Math.ceil(Math.random() * 150); //Update this number as you learn more Pokemon
    myURL = baseURL + rand;
    showPokemon();
}

function showPokemon() {
        $.ajax(
        myURL,{
        success: function(data) {
            pokeData = data;
            console.log(pokeData);
            let pokeImage = pokeData.sprites.back_default;
           
            picture.src = pokeImage;
            answer.innerHTML = '';
            info.innerHTML = '';
            button.style.visibility = 'visible';
            picture.style.visibility = 'visible';

        }           
    })
}

 function showAnswer() {
           let pokeImage = pokeData.sprites.front_default;
           picture.src = pokeImage;
           let name = pokeData.name.toUpperCase();
           answer.innerHTML = `It's ${name}!`;
            
           let type = 'Type: ';
           for (i=0; i<pokeData.types.length; i++) {
                if (i < pokeData.types.length-1){
                    type += pokeData.types[i].type.name+', ';
                } else {
                    type += pokeData.types[i].type.name;
                }
           }
           //let moves;
           info.innerHTML = type;
            
        }           
