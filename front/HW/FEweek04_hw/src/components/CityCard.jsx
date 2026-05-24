import styled from 'styled-components'

const CardContainer = styled.div`
  display: none;

  &:target {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;

  width: 26.8125rem;
  height: 39.75rem;
  background: #eeecec;
`

const CloseLink = styled.a`
  text-decoration: none;
  color: inherit;
`

const CityImg = styled.img`
  width: 24.1875rem;
  height: 28.25rem;
  aspect-ratio: 125/146;
  margin-top: 2.75rem;
`

const CityText = styled.p`
  margin: 0;
  color: #7e6969;
  font-family: VT323;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
  margin-top: 2.13rem;
`

const DateText = styled.p`
  margin: 0;
  color: #b85959;
  font-family: VT323;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
  margin-top: 0.81rem;
`

const CityCard = ({ id, img, cityName, date }) => {
  return (
    <CardContainer id={id}>
      <CloseLink href='#'>
        <CityImg src={img} />
        <CityText>{cityName}</CityText>
        <DateText>{date}</DateText>
      </CloseLink>
    </CardContainer>
  )
}

export default CityCard
