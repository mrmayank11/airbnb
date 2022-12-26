import React, { useState } from 'react'
import Map, { Marker, Popup } from 'react-map-gl';
import getCenter from 'geolib/es/getCenter';


function App({ searchResults }) {

    const coordinates = searchResults.map((item) => ({
        longitude: item.long,
        latitude: item.lat,
    }))

    const centre = getCenter(coordinates);

    // <Map
    //     initialViewState={{
    //         width: '100%',
    //         height: "100%",
    //         longitude: centre.longitude,
    //         latitude: centre.latitude,
    //         zoom: 11
    //     }}
    //     style={{ width: 600 }}
    //     mapStyle="mapbox://styles/mayank-1/clc4wfwnk008514oxwb2nrdcc"
    //     mapboxAccessToken={process.env.mapbox_keys}


    //     />;
    return <Map
        initialViewState={{
            width: '100%',
            // height: "100%",
            longitude: centre.longitude,
            latitude: centre.latitude,
            zoom: 11
        }}
        style={{ width: 600 }}
        mapStyle="mapbox://styles/mayank-1/clc4wfwnk008514oxwb2nrdcc"
        mapboxAccessToken={process.env.mapbox_keys}
    // onViewportChange={(nextViewport) => initialViewStat(nextviewport)}
    >

        {/* {searchResults.map(result => (
            <div key={result.long}> */}
        < Marker longitude={- 122.4376
        } latitude={37.7577} >
            <div style={{ color: 'white' }}>You are here</div>
        </Marker >
        {/* </div>
        ))
        } */}

    </Map >;


}
export default App;