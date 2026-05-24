import Marker from 'react-simple-maps'
import location from '../assets/location.svg'

const MapPin = ({ id, coordinates }) => {
  return (
    <Marker coordinates={coordinates}>
      <a href={`#${id}`}>
        <image href={location} />
      </a>
    </Marker>
  )
}

export default MapPin
