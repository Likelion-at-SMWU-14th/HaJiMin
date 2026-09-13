import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
import styled from 'styled-components'
import MapPin from '../components/MapPin'
import CityCard from '../components/CityCard'

import koln from '../assets/koln.svg'
import barcelona from '../assets/barcelona.svg'
import paris from '../assets/paris.svg'
import nice from '../assets/nice.svg'
import edinburgh from '../assets/edinburgh.svg'
import dubrovnik from '../assets/dubrovnik.svg'
import bled from '../assets/bled.svg'
import budapest from '../assets/budapest.svg'

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
    <>
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
          <MapPin id='barcelona' coordinates={[2.1686496, 41.3874374]} />
          <MapPin id='paris' coordinates={[2.3513765, 48.8575475]} />
          <MapPin id='nice' coordinates={[7.261953200000001, 43.7101728]} />
          <MapPin id='edinburgh' coordinates={[-3.188267, 55.953252]} />
          <MapPin id='dubrovnik' coordinates={[18.0944238, 42.65066059999999]} />
          <MapPin id='bled' coordinates={[14.1145798, 46.3683266]} />
          <MapPin id='budapest' coordinates={[19.040235, 47.497912]} />
        </StyledMap>
      </MapContainer>

      {/* 도시 카드 */}
      <CityCard id='koln' img={koln} cityName='Germany - Köln' date='250329' />
      <CityCard id='barcelona' img={barcelona} cityName='Spain - Barcelona' date='250408' />
      <CityCard id='paris' img={paris} cityName='France - Paris' date='250421' />
      <CityCard id='nice' img={nice} cityName='France - Nice' date='250429' />
      <CityCard id='edinburgh' img={edinburgh} cityName='UK - Edinburgh' date='250509' />
      <CityCard id='dubrovnik' img={dubrovnik} cityName='Croatia - Dubrovnik' date='250714' />
      <CityCard id='bled' img={bled} cityName='Slovenia - Bled' date='250717' />
      <CityCard id='budapest' img={budapest} cityName='Hungary - Budapest' date='250718' />
    </>
  )
}

export default EuropeMap
