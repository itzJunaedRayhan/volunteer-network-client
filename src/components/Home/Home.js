import React, { useEffect, useState } from 'react';
import Event from '../Event/Event';
import './Home.css'

const Home = () => {

    const [Events, setEvents] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5055/events')
        .then(res => res.json())
        .then(data => setEvents(data))
    }, [])
    return (
        <div className="row home">
            {
                Events.map(event =><Event event={event}></Event>)
            }
        </div>
    );
};

export default Home;