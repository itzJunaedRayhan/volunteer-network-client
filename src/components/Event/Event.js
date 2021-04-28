import React from 'react';

const Event = ({event}) => {
    return (
        <div className="event col-md-4 col-sm-6">
            <img style={{height: '300px'}} src={event.imgURL} alt=""/>
            <h3>{event.name}</h3>
        </div>
    );
};

export default Event;