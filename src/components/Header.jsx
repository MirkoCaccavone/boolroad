import { Link } from "react-router-dom"
export default function Header() {
    return (
        <div>
            <Link to="/"><h1>Logo</h1></Link>
            <Link to="/add-trip">Aggiungi viaggio</Link>
        </div>
    )
}