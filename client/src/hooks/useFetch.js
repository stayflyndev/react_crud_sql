import { useEffect, useState } from "react"
import axios from "axios"

const useFetch = (url) => {

//fetch API DATA and STORE STATE
const [data, setData] = useState([]);
const [loading, setLoading] = useState(false)
const [error, setError] = useState(false)

const fetchData = () => {
    fetch(url)
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw 'Error getting users list'
        }
    }).then((data) => {
        console.log(data)
        setData(data);
    }).catch((error) => {
        setError(true)
    })
}

useEffect(() => {
    setLoading(true)
   fetchData()
}, [url])



// const reFetch = async () => {
//     try{
//         //GET DATA, UPDATE STATE
//         const res = await axios.get(url)
//         setData(res.data)
//     }
//     catch(err){
//         setError(err)
//     }
// };

//current state to use to for other components
 return {data, loading, error}
}
export default useFetch