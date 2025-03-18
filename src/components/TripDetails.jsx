import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { trips, Travelers } from '../../data.js';
import { Accordion, Card, Button } from 'react-bootstrap';

const TripDetails = () => {
    const { id } = useParams();
    const trip = trips.find((trip) => trip.id === parseInt(id));
    const [searchTerm, setSearchTerm] = useState('');

    if (!trip) {
        return <div className="alert alert-danger">Viaggio non trovato</div>;
    }

    const participants = Travelers.filter(
        (traveler) => traveler.destinazione === trip.luogo
    );

    const filteredParticipants = participants.filter((participant) => {
        const fullName = `${participant.nome} ${participant.cognome}`.toLowerCase();
        return fullName.includes(searchTerm.toLowerCase());
    });

    return (
        <>
            <div className='container-sm'>
                <Accordion defaultActiveKey="0" className="mt-4">
                    {filteredParticipants.map((participant, index) => (
                        <Card key={participant.id} className='list-group-item'>
                            <Accordion.Item className='list-group-item' eventKey={index.toString()}>
                                <Accordion.Header>
                                    {participant.nome} {participant.cognome}
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p>Email: {participant.email}</p>
                                    <p>codice Fiscale {participant.codiceFiscale}</p>
                                    <p>cellulare {participant.telefono}</p>
                                    <Link className='dettagli' to={`/travelers/${participant.id}`}>Dettagli</Link>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Card>
                    ))}
                </Accordion>
                <button className='back-to' ><Link className='white' to="/">Home</Link></button>
            </div >

        </>
    );
};

export default TripDetails;