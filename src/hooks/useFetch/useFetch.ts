import { useEffect, useState } from "react";

export const useFetch = <T,>( url: string, value?:string)  => {
    const [data, setData] = useState<T | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)
    
    const getData = (url:string) => {
        setLoading(true)
        if(value?.length === 0) return 
        return fetch(url)
            .then((res) => {
                const showError = {
                    err:true,
                    statuscode:res.status,
                    message:"Error in your request"
                }
                if(!res.ok){
                    throw showError;
                }
                return res.json()
            })
            .then((data) => {
                setData(data)
            })
            .catch((err) => setError(err))
            .finally(() => {
                setLoading(false);
            })
    }

    useEffect(() => {
        getData(url)
    }, [url])
    
    return {data, loading, error}
}


/*
const API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

export const getData = async () => {
    const res = await fetch(API)
    const data = await res.json()
    return data
}

*/