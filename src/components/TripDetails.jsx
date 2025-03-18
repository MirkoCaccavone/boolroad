import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { trips, Travelers } from '../../data.js';

const TripDetails = () => {
    const { id } = useParams();
    const trip = trips.find((trip) => trip.id === parseInt(id));
    const [searchTerm, setSearchTerm] = useState('');

    if (!trip) {
        return <div>Viaggio non trovato</div>;
    }

    const participants = Travelers.filter(
        (traveler) => traveler.destinazione === trip.luogo
    );

    const filteredParticipants = participants.filter((participant) => {
        const fullName = `${participant.nome} ${participant.cognome}`.toLowerCase();
        return fullName.includes(searchTerm.toLowerCase());
    });

    return (
        <div>
            <h2>{trip.luogo}</h2>
            <input
                type="text"
                placeholder="Cerca partecipante..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ul>
                {filteredParticipants.map((participant) => (
                    <li key={participant.id}>
                        <Link to={`/travelers/${participant.id}`}>
                            {participant.nome} {participant.cognome}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TripDetails;