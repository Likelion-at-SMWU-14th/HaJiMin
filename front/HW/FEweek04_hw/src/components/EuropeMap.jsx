import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps'
import styled from 'styled-components'

const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json'

const MapContainer = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
`

const StyledMap = styled(ComposableMap)`
  width: 100%;
  height: 100%;
`

const EuropeMap = () => {
  return (
    <MapContainer>
      <StyledMap
        projection='geoAzimuthalEqualArea'
        projectionConfig={{
          rotate: [-10, -48, 0], // 유럽이 중앙에 오도록 회전
          scale: 1700, // 확대 크기
        }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: { fill: '#D6D6DA', stroke: '#fff' }, // 기본 색
                  hover: { fill: '#b0b0b0' }, // 호버 색
                }}
              />
            ))
          }
        </Geographies>
      </StyledMap>
    </MapContainer>
  )
}

export default EuropeMap
