import React from 'react';
import { useParams } from 'react-router-dom';
import { Travelers } from '../../data.js';

const TravelerDetails = () => {
    const { id } = useParams();
    const traveler = Travelers.find((traveler) => traveler.id === parseInt(id));

    if (!traveler) {
        return <div>Viaggiatore non trovato</div>;
    }

    return (
        <div>
            <h2>{traveler.nome} {traveler.cognome}</h2>
            <p>Email: {traveler.email}</p>
            <p>Telefono: {traveler.telefono}</p>
            <p>Codice fiscale: {traveler.codiceFiscale}</p>
        </div>
    );
};

export default TravelerDetails;