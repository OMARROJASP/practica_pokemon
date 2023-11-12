
import {useFetchData} from "../hooks/useFetchData.js";

export const UserList = ({endPoint}) => {

   const {data, isLoading} = useFetchData(endPoint)


    return(
        <>
            <ul>
                {isLoading? <p>CARGANDO...</p>: endPoint == 'products' ? data.map(product=> <li key={product.id}>{product.title} <img src={product.image}  /> </li>)
                :                         data.map(user=> <li key={user.id}>{user.username}</li> )
                }
            </ul>
        </>
    )
}