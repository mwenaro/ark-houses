import { deleteById, fetchData, postData, updateById } from "@/utils"
import { useState, useEffect } from "react"

// Define a type for a single item with dynamic properties
interface DynamicItem {
  [key: string]: any;
}

// Create a union type that represents either an array of objects or an object with key-value pairs
type ServerData = DynamicItem[] | DynamicItem | null;

export default function useFetch(endipont: string, method: string = "GET", _data: any = null) {
    
    const [data, setData] = useState<ServerData>({})
    const [error, setError] = useState(null)

    useEffect(() => {
        async function getData() {
            console.log({endipont, _data, method})
            try {
                let response;
                switch (method) {

                    case 'POST':
                        response = await postData(endipont, _data)

                    case 'PUT':
                        response = await updateById(endipont, _data)

                    case 'DELETE':
                        response = await deleteById(endipont)
                    default:
                        response = await fetchData(endipont)
                }

                setData(response)

            } catch (error: any) {
                setError(error)
            }
        }
        getData()

    }, [endipont,_data,method])




    return (
        {
            data,
            error
        }
    )
}
