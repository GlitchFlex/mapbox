import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
// importing the state wise data from ./data/stateData.js
import * as data from './data/stateData.js';
// importing the marker icon from  ./location.png
import mark from './location.png';

export default function App() {
    // the viewport state to keep a track the center coords and the zoom level
    const [viewport, setViewport] = useState({
        latitude: 23.653458,
        longitude: 77.123767,
        width: '100vw',
        height: '100vh',
        zoom: 4,
    });

    const [selectedState, setSelectedState] = useState(null);

    //marker click handler function

   

    return (
        <div>
            <ReactMapGL
                {...viewport}
                mapboxApiAccessToken={
                    'pk.eyJ1IjoicHJhdHl1Z25hIiwiYSI6ImNsNzZvc2N3YTBkam0zd3BnZjdvZmt5am8ifQ.91jMiLMArSebRkCbx43jSQ'
                }
                mapStyle="mapbox://styles/mapbox/outdoors-v11"
                onViewportChange={(viewport) => {
                    setViewport(viewport);
                }}
            >
                {data.map((state) => (
                    <Marker
                        key={state.Name}
                        latitude={state.Lat}
                        longitude={state.Lon}
                    >
                        <button
                            className="marker-btn"
                            onClick={(e)=>{
                              e.preventDefault();
                              setSelectedState(state);
                              setViewport({
                                  latitude: state.Lat,
                                  longitude: state.Lon,
                                  width: '100vw',
                                  height: '100vh',
                                  zoom: 10,
                              });
                            }}
                        >
                            <img src={mark} alt="none" />
                        </button>
                    </Marker>
                ))}

                
            </ReactMapGL>
        </div>
    );
}
