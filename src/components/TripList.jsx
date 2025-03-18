import { Link } from 'react-router-dom';
import { trips } from '../../data.js';


const TripList = () => {
    return (
        <div>
            <h2>Elenco viaggi</h2>
            <ul>
                {trips.map((trip) => (
                    <li key={trip.id}>
                        <Link to={`/trips/${trip.id}`}>
                            {trip.luogo} ({trip.dataInizio} - {trip.dataFine})
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TripList;

