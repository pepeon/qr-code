import { SCAN_DATA } from "../../constants"
import {QRCodeSVG} from 'qrcode.react';

export const ScanHistory = () => {

    const valuesFromHistory = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]')
    return (
        <div>
            {valuesFromHistory.map((value) => (
                <div style={{display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center'}}>
                <QRCodeSVG 
                
                value={value} />
                
                <p key={value}>{value}</p>
            </div>
            ))}
        </div>
    )
}