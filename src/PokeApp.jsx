import {useState} from "react";
import {DatosPoke} from "./componentes/DatosPoke.jsx";
import {Pokemon} from "./componentes/Pokemon.jsx";

export const PokeApp =()=> {

    const [endPoint, setEndPoint] = useState();


    const next = () => {

    }

    const previous = () => {

    }



    return(
        <>
            <h1>Lista de Pokemones</h1>
            <Pokemon></Pokemon>
            <button onClick={next}>Siguiente</button>
            <button onClick={previous}>Atras</button>
            <DatosPoke endPoint={endPoint}></DatosPoke>

        </>
    )
}