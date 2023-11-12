export const fetchData = async (endPoint) => {
    try{
        console.log("12")
        console.log(endPoint)
        const response = await fetch(`https://fakestoreapi.com/${endPoint}`);
        const data = await response.json();
        console.log(data)
        return{
            data,
            isLoading:false
        }
    }catch (error){
        console.error(error);
    }
}