import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { trips, Travelers } from '../../data.js';

const AddTrip = () => {
    const [luogo, setLuogo] = useState('');
    const [dataInizio, setDataInizio] = useState('');
    const [dataFine, setDataFine] = useState('');
    const [partecipanti, setPartecipanti] = useState([]);
    const [nuovoPartecipante, setNuovoPartecipante] = useState({
        nome: '',
        cognome: '',
        email: '',
        telefono: '',
        codiceFiscale: '',
    });
    const navigate = useNavigate();

    const handlePartecipanteChange = (e) => {
        setNuovoPartecipante({
            ...nuovoPartecipante,
            [e.target.name]: e.target.value,
        });
    };

    const handleAggiungiPartecipante = () => {
        setPartecipanti([...partecipanti, nuovoPartecipante]);
        setNuovoPartecipante({
            nome: '',
            cognome: '',
            email: '',
            telefono: '',
            codiceFiscale: '',
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const nuovoViaggio = {
            id: trips.length + 1,
            luogo,
            dataInizio,
            dataFine,
        };
        trips.push(nuovoViaggio);
        partecipanti.forEach((partecipante) => {
            Travelers.push({
                ...partecipante,
                id: Travelers.length + 1,
                destinazione: luogo,
            });
        });
        navigate('/trips');
    };

    return (
        <div>
            <h2>Aggiungi nuovo viaggio</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Luogo"
                    value={luogo}
                    onChange={(e) => setLuogo(e.target.value)}
                />
                <input
                    type="date"
                    placeholder="Data inizio"
                    value={dataInizio}
                    onChange={(e) => setDataInizio(e.target.value)}
                />
                <input
                    type="date"
                    placeholder="Data fine"
                    value={dataFine}
                    onChange={(e) => setDataFine(e.target.value)}
                />
                <h3>Partecipanti</h3>
                {partecipanti.map((partecipante, index) => (
                    <div key={index}>
                        {partecipante.nome} {partecipante.cognome}
                    </div>
                ))}
                <input
                    type="text"
                    name="nome"
                    placeholder="Nome"
                    value={nuovoPartecipante.nome}
                    onChange={handlePartecipanteChange}
                />
                <input
                    type="text"
                    name="cognome"
                    placeholder="Cognome"
                    value={nuovoPartecipante.cognome}
                    onChange={handlePartecipanteChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={nuovoPartecipante.email}
                    onChange={handlePartecipanteChange}
                />
                <input
                    type="tel"
                    name="telefono"
                    placeholder="Telefono"
                    value={nuovoPartecipante.telefono}
                    onChange={handlePartecipanteChange}
                />
                <input
                    type="text"
                    name="codiceFiscale"
                    placeholder="Codice fiscale"
                    value={nuovoPartecipante.codiceFiscale}
                    onChange={handlePartecipanteChange}
                />
                <button type="button" onClick={handleAggiungiPartecipante}>
                    Aggiungi partecipante
                </button>
                <button type="submit">Aggiungi viaggio</button>
            </form>
        </div>
    );
};

export default AddTrip;