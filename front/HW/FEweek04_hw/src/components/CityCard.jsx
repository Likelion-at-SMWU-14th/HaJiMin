import styled from 'styled-components'

const CardContainer = styled.div`
  width: 26.8125rem;
  height: 39.75rem;
  background: #eeecec;
`

const CityImg = styled.img`
  width: 24.1875rem;
  height: 28.25rem;
  aspect-ratio: 125/146;
`

const CityText = styled.p`
  color: #7e6969;
  font-family: VT323;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
`

const DateText = styled.p`
  color: #b85959;
  font-family: VT323;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
`

const CityCard = ({ img, cityName, date }) => {
  return (
    <CardContainer>
      <CityImg src={img} />
      <CityText>{cityName}</CityText>
      <DateText>{date}</DateText>
    </CardContainer>
  )
}

export default CityCard
