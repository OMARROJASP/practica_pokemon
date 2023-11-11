import {useEffect, useState} from "react";

export const UserList = ({endPoint}) => {

    const [informacion, setInformacion] = useState([]);

    const fetchData = async ()=>{
        try{
            const response = await fetch(`https://fakestoreapi.com/${endPoint}`);
            const data = await response.json();
            console.log(data);
            setInformacion(data);
        }catch (error){
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData()
    }, [endPoint]);

    return(
        <>
            <ul>
                {endPoint == 'products' ? informacion.map(product=> <li key={product.id}>{product.title} <img src={product.image}  /> </li>)
                :                         informacion.map(user=> <li key={user.id}>{user.username}</li> )
                }
            </ul>
        </>
    )
}