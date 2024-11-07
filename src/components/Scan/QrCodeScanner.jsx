import { Scanner  } from "@yudiel/react-qr-scanner"
import { useState } from "react"
import s from './qrCodeScanner.module.css'

import { SCAN_DATA } from '../../constants'
import { json } from "react-router-dom"




export const QrCodeScanner = () => {

    
    const [code, setCode] = useState(null)

    const scanHandler = (result) => {
        setCode(result[0].rawValue)

        const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]')

        localStorage.setItem(SCAN_DATA,
            JSON.stringify([...prevData, result[0].rawValue])
            )
        
    }

    const settings = {
        audio: false,
        finder: false
    }

    const styleSettings = {
        container: {width: 400}

    }

    return (
        
        <div className={s.container}>
            
            <Scanner 
            styles={styleSettings}
            components={settings}
            onScan={scanHandler}/>
            <p className={s.result}>{code}</p>
        </div>
    )
}