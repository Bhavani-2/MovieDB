import styled from 'styled-components'

export const MainMovieContainer = styled.div`
  background-color: #272b34;

  margin: 0px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
`
export const MovieDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #020a17;
  border-radius: 5px;
  height: 80vh;
  max-height: 70vh;

  @media screen and (max-width: 1000px) {
    height: 50vh;
    max-height: 35vh;
  }
`
export const MoveItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const PosterContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 15px;
`

export const PosterImage = styled.img`
  height: 250px;
  width: 200px;
  @media screen and (max-width: 786px) {
    height: 200px;
    width: 180px;
  }
`
export const PosterInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  @media screen and (min-width: 786px) and (max-width: 986px) {
    width: 300px;
    max-width: 250px;
  }
`
export const Heading = styled.h1`
  color: #ffffff;
  font-size: 25px;
  margin-bottom: 2px;
  padding-left: ${props => (props.value ? '15px' : '0px')} @media screen and
    (max-width: 786px) {
    font-size: 20px;
    margin-bottom: 2px;
  }
`
export const Rating = styled.p`
  color: rgb(37, 70, 121);
  font-size: 20px;
  margin-bottom: 2px;
  @media screen and (max-width: 786px) {
    font-size: 18px;
    margin-bottom: 2px;
  }
`
export const Minutes = styled.p`
  color: #434a52;
  font-size: 20px;
  margin-bottom: 2px;
  padding-right: 5px;
  @media screen and (max-width: 786px) {
    font-size: 18px;
    margin-bottom: 2px;
  }
`
export const ReleaseDate = styled.p`
  color: #646a76;
  font-size: 20px;
  padding-left: ${props => (props.value ? '15px' : '0px')} @media screen and
    (max-width: 786px) {
    font-size: 18px;
    margin-bottom: 2px;
  }
`
export const BackImage = styled.img`
  width: 700px;
  @media screen and (max-width: 786px) {
    display: none;
  }

  @media screen and (min-width: 786px) and (max-width: 986px) {
    width: 300px;
    max-width: 250px;
    height: 50vh;
    max-height: 35vh;
  }
`
export const MinutesContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const CastUnorderList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
