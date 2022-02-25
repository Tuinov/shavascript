import React, { useState } from 'react';
import { GoogleMap, Marker , useJsApiLoader} from '@react-google-maps/api'
import places from '../mock-up/places';
import styles from './Map.module.css';

const API_KEY = 'AIzaSyAFPweeF39eZjt77G9sLII6n4vlF5cck_g';

//console.log(styles);

const containerStyle = {
  width: '50vw',
  height: '50vh',
  display: 'inline-block',
  border: '1px solid #5460A8'
};

const defaultOptions = {
  panControl: true,
  zoomControl: true,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  rotateControl: false,
  clickableIcons: false,
  keyboardShortcuts: false,
  scrollwheel: true,
  disableDoubleClickZoom: false,
  fullscreenControl: false,
}


const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY
  })

  const mapRef = React.useRef(undefined)

  const onLoad = React.useCallback(map => {
    mapRef.current = map;
  }, [])

  const onUnmount = React.useCallback(() => {
    mapRef.current = undefined;
  }, [])

  const [center, setCenter] = useState(places[0].location);

  const contacts = places.map((contact) => {
    return <div key={contact.id} className={styles.one_contact} onClick={() => {
      setCenter(contact.location)
    }}>
      <div>{contact.name}</div>
      <div>{contact.address}</div>
      <div>{contact.phone}</div>
      <div>{contact.workingHours}</div>
    </div>
  })

  const markers = places.map((marker) => {
    return <Marker position={marker.location} label={{ text: marker.name }} />
  })

  return isLoaded ? <table>
    <tbody>
      <tr>
        <td>
          <div>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={10}
              onLoad={onLoad}
              onUnmount={onUnmount}
              options={defaultOptions}
            >
              {markers}
            </GoogleMap>
          </div>
        </td>
        <td className={styles.contacts_td}>
          <div className={styles.contacts}>
            {contacts}
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  : <h2>Loading..</h2>
}

export { Map };