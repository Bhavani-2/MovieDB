import {Component} from 'react'

import {MainContainer, UnorderList} from './styledComponent'
import MovieDetails from '../MovieDetails'

class TopRated extends Component {
  state = {
    topRatedData: [],
  }

  componentDidMount() {
    this.getTopRatedMovieData()
  }

  getTopRatedMovieData = async () => {
    const apiKey = '1303763ee89de2e76b22abaf890433e9'
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
    const options = {
      method: 'GET',
    }

    const response = await fetch(url, options)
    const data = await response.json()

    const convertedData = data.results.map(each => ({
      title: each.title,
      posterPath: each.poster_path,
      rating: Math.round(each.vote_average * 10) / 10,
      id: each.id,
    }))

    this.setState({topRatedData: convertedData})
  }

  render() {
    const {topRatedData} = this.state

    return (
      <MainContainer>
        <UnorderList>
          {topRatedData.map(each => (
            <MovieDetails details={each} key={each.id} />
          ))}
        </UnorderList>
      </MainContainer>
    )
  }
}

export default TopRated
