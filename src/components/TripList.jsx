import { useState } from 'react';
import { Link } from 'react-router-dom';
import { trips } from '../../data.js';


const TripList = () => {

    const [searchTerm, setSearchTerm] = useState('');


    const filteredTrips = trips.filter((trip) =>
        trip.luogo.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">Elenco viaggi</h1>
            <input
                type="text"
                placeholder="Cerca viaggio..."
                className="form-control mb-3"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="list-group">
                {filteredTrips.map((trip) => (
                    <Link
                        key={trip.id}
                        to={`/trips/${trip.id}`}
                        className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"

                    >
                        <div>
                            <strong className='luogo'>{trip.luogo}</strong>
                            <br />
                            <strong className="text-muted">
                                Partenza: {trip.dataInizio}
                            </strong>
                            <br />
                            <strong className="text-muted">
                                Ritorno: {trip.dataFine}
                            </strong>
                        </div>
                        <span className="badge bg-primary rounded-pill p-2">Bool-Roaders</span>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default TripList;

