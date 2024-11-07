import { Link } from "react-router-dom"
import s  from './Navigation.module.css'

export const Navigation = () => {
    return (
        <nav className={s.container}>
            <Link to="/generate">Генерировать QR</Link>
            <Link to="/scan">Сканировать QR</Link>
            <Link to='/generateHistory'>История генов QR</Link>
            <Link to='/scanHistory'>История сканов QR</Link>
        </nav>
    )
}