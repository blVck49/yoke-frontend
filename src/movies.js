import {useState, useEffect} from "react"
import QRCode from "react-qr-code"
import axios from "axios"

export const Movies = () => {

    useEffect(() => {
        const refreshPage = () => {
         
          setTimeout(() => {
            window.location.reload();
          }, 100000);
        };
    
        refreshPage(); 

    
      }, []);

    const [qrText] = useState("https://yoke-j3t7.onrender.com/movies");
    {qrText.length > 0 && <QRCode value={qrText} />}
    return (
        <div>
            <QRCode value={qrText}/>
        </div>
    )

}