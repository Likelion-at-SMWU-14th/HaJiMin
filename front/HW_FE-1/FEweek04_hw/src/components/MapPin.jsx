import { Marker } from 'react-simple-maps'
import location from '../assets/location.svg'

const MapPin = ({ id, coordinates }) => {
  return (
    <Marker coordinates={coordinates}>
      <a href={`#${id}`}>
        <image href={location} width={30} height={30} x={-15} y={-30} />
      </a>
    </Marker>
  )
}

export default MapPin
