import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
import styled from 'styled-components'
import MapPin from '../components/MapPin'

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
                  default: { fill: '#D6D6DA', stroke: '#fff', outline: 'none' },
                  hover: { fill: '#D6D6DA', stroke: '#fff', outline: 'none' }, // 호버 색 고정
                  pressed: { fill: '#D6D6DA', stroke: '#fff', outline: 'none' }, // 클릭 효과 제거
                }}
              />
            ))
          }
        </Geographies>

        {/* 핀 표시 */}
        <MapPin id='koln' coordinates={[6.9602786, 50.937531]} />
      </StyledMap>
    </MapContainer>
  )
}

export default EuropeMap
