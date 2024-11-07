import { GENERATE_DATA } from "../../constants"
import {QRCodeSVG} from 'qrcode.react';


export const GenerateHistory = () => {

    const valuesFromHistory = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]')

    return (
        <div>
            {valuesFromHistory.map((value) => (
                <div  style={{display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center'}}>
                    <QRCodeSVG 
                    
                    value={value} />
                    
                    <p key={value}>{value}</p>
                </div>
            ))}
            </div>
    )
}