import {useEffect, useState} from "react";
import {fetchData} from "../helpers/fetchData.js";

export const useFetchData = (endPoint) => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    const getData = async ()=>{

        console.log(endPoint)
        const {data,isLoading} = await fetchData(endPoint)
        setData(data)
        setIsLoading(isLoading)
    }

    useEffect(() => {
        getData()
    }, [endPoint]);

    return{
        data,
        isLoading
    }
}