import {useState} from "react";
import {UserList} from "./componentes/UserList.jsx";

export const UserApp=() => {

    const [endPoint, setEndPoint] = useState('products');

    const [cambio, setCambio] = useState(true);
    const handleFetch = () => {
        if(cambio === true){
            setEndPoint('users')
            setCambio(false)
        }else{
            setEndPoint('products')
            setCambio(true)
        }


    }


    return (
        <>
            <h1>Lista de Productos:</h1>
            <button onClick={handleFetch}> Llamar API</button>
            <UserList endPoint={endPoint}></UserList>


        </>
    )
}