import {useEffect, useState} from "react";

export const DatosPoke = ({endPoint}) => {

    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
//            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${endPoint}&limit=20`)
            const response = await fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20")
            const aux = await response.json();

            setData(aux.results);

        }catch (e) {
          console.log(e);
        }
    }

    useEffect(() => {
        fetchData()
    }, [endPoint]);

    return(
        <>
            <ul>
                {data.map(poke => <li key={poke.name}>{poke.name}</li>)}
            </ul>
        </>
    )
}