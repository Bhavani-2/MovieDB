import {
  ListContainer,
  Image,
  Title,
  Rating,
  Button,
  LinkItem,
} from './styledComponent'

const MovieDetails = props => {
  const {details} = props
  const {title, rating, posterPath, id} = details
  const path = `https://image.tmdb.org/t/p/w500${posterPath}`
  return (
    <ListContainer>
      <Image src={path} />
      <Title>{title}</Title>
      <Rating>Rating: {rating}</Rating>
      <LinkItem to={`/movies/${id}`}>
        <Button>View Details</Button>
      </LinkItem>
    </ListContainer>
  )
}

export default MovieDetails
