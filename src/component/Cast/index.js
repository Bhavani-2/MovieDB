import {ListContainer, Image, Title, Rating} from './styledComponent'

const Cast = props => {
  const {details} = props
  const {name, character, profilePath} = details
  const path = `https://image.tmdb.org/t/p/w500${profilePath}`
  return (
    <ListContainer>
      <Image src={path} alt={name} />
      <Title>{name}</Title>
      <Rating>character: {character}</Rating>
    </ListContainer>
  )
}

export default Cast
