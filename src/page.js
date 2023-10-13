import axios from "axios"
import { useEffect } from "react"

let result;
export const Page = () => {

    useEffect(() => {
        const url = "https://yoke-j3t7.onrender.com/movies"

        const temp = async () => {
            const doc =  await axios({
                method: "get",
                url: url,
            })
    
            const result = doc.data
            return result
        }

        temp()


    
      }, []);

    


    return (
        <div>
            <p>Data to Render: {result}</p>
        </div>
    )

} 