async function getPokemonEvolutions (){
    const res = await fetch(`https://api-pokemons.herokuapp.com/pokemons`)
    const data = await res.json()
    await console.log(data)
}

export default  getPokemonEvolutions()