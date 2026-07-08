import {Component} from 'react'
import Cast from '../Cast'
import {
  MainMovieContainer,
  MovieDetailsContainer,
  MoveItemContainer,
  PosterContainer,
  PosterImage,
  PosterInnerContainer,
  Heading,
  Rating,
  ReleaseDate,
  Minutes,
  BackImage,
  MinutesContainer,
  CastUnorderList,
} from './styledComponent'

class SingleMovieDetails extends Component {
  state = {
    movieDetailsData: {},
    castDetails: [],
    genre: [],
  }

  componentDidMount() {
    this.getMovieDetails()
  }

  getMovieDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const apiKey = '1303763ee89de2e76b22abaf890433e9'
    const movieUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
    const castUrl = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-US`

    const options = {
      method: 'GET',
    }

    const response = await fetch(movieUrl, options)
    const movieData = await response.json()

    const response1 = await fetch(castUrl, options)
    const castData = await response1.json()

    const convertedCastData = castData.cast.map(each => ({
      name: each.name,
      character: each.character,
      profilePath: each.profile_path,
      id: each.id,
    }))

    const convertMovieDetails = {
      backdropPath: movieData.backdrop_path,
      title: movieData.title,
      id: movieData.id,
      overview: movieData.overview,
      tagline: movieData.tagline,
      runtime: movieData.runtime,
      releaseDate: movieData.release_date,
      posterPath: movieData.poster_path,
      rating: Math.round(movieData.vote_average * 10) / 10,
    }

    const genreData = movieData.genres.map(each => ({
      name: each.name,
      id: each.id,
    }))

    this.setState({
      movieDetailsData: convertMovieDetails,
      castDetails: convertedCastData,
      genre: genreData,
    })
  }

  render() {
    const {movieDetailsData, genre, castDetails} = this.state

    const {
      backdropPath,
      posterPath,
      releaseDate,
      runtime,
      overview,
      title,
      tagline,
      rating,
    } = movieDetailsData
    const posterUrl = `https://image.tmdb.org/t/p/w500${posterPath}`
    const backdropUrl = `https://image.tmdb.org/t/p/w500${backdropPath}`

    return (
      <MainMovieContainer>
        <MovieDetailsContainer>
          <MoveItemContainer>
            <PosterContainer>
              <PosterImage src={posterUrl} />
              <PosterInnerContainer>
                <Heading>
                  {title}: {tagline}
                </Heading>
                <Rating>Rating: {rating}</Rating>
                <MinutesContainer>
                  <Minutes>{runtime} min </Minutes>
                  {genre.map(each => (
                    <Minutes key={each.id}>{each.name}</Minutes>
                  ))}
                </MinutesContainer>

                <ReleaseDate>ReleaseDate: {releaseDate}</ReleaseDate>
              </PosterInnerContainer>
            </PosterContainer>
            <Heading value="true">Overview</Heading>
            <ReleaseDate value="true">{overview}</ReleaseDate>
          </MoveItemContainer>
          <BackImage src={backdropUrl} />
        </MovieDetailsContainer>
        <Heading>Cast</Heading>
        <CastUnorderList>
          {castDetails.map(each => (
            <Cast key={each.id} details={each} />
          ))}
        </CastUnorderList>
      </MainMovieContainer>
    )
  }
}

export default SingleMovieDetails
