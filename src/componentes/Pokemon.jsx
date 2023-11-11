import {useEffect, useState} from "react";

export const Pokemon = () => {

    const [pokemonData, setPokemonData] = useState()
    const [pokemonid, setPokemonId] = useState()
    const [pokemonName, setPokemonName] = useState()
    const leerUrl = async () => {
        try {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon/1/");
            const data = response.json();
            console.log(data.sprites.front_default)
            setPokemonData(data.sprites.front_default)

            setPokemonName(data.name)
            setPokemonId(data.id)
        }catch (e){
            console.log(e);
        }
    }


    useEffect(() => {
        leerUrl()
    }, []);


    return (
        <>
            <ul>

                    <li key={pokemonid}>
                        <h1>{pokemonName}</h1>
                        <img src={pokemonData}/>
                    </li>


            </ul>
        </>
    )
}
