import pokemonApi from "@/api/pokemonApi";

const getPokemon = () => {
    const mixedPokemons = [];
    for (let i=0; i<4; i++){
        // esto obtiene un numero entre 0 y 649
        const numero = Math.trunc(Math.random() * 650);
        mixedPokemons[i] = numero + 1;
    }
    return mixedPokemons;
}

const getPokemonOptions = async () => {
    const FourPokemons =  getPokemon()
    const [a,b,c,d] = FourPokemons;

    const promiseArr = [
        pokemonApi.get(`${a}`),
        pokemonApi.get(`${b}`),
        pokemonApi.get(`${c}`),
        pokemonApi.get(`${d}`),
    ]
  
    const [p1, p2, p3, p4] = await Promise.all( promiseArr )
    return [
        {name: p1.data.name, id: p1.data.id},
        {name: p2.data.name, id: p2.data.id},
        {name: p3.data.name, id: p3.data.id},
        {name: p4.data.name, id: p4.data.id},
    ]
    
    
}

const getPokemonNames = async () => {
    const pokemons = await getPokemonOptions();
    return pokemons
}

export default getPokemonNames;