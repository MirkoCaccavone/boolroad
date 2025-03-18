import { Link } from 'react-router-dom';
import { Travelers } from '../../data.js';

const TravelList = () => {
    return (
        <div>
            <h2>Elenco viaggiatori</h2>
            <ul>
                {Travelers.map((traveler) => (
                    <li key={traveler.id}>
                        <Link to={`/travelers/${traveler.id}`}>
                            {traveler.nome} {traveler.cognome}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TravelList;