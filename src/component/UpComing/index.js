import {Component} from 'react'

import {MainContainer, UnorderList} from './styledComponent'
import MovieDetails from '../MovieDetails'

class UpComing extends Component {
  state = {
    upComingData: [],
  }

  componentDidMount() {
    this.getUpComingMovieData()
  }

  getUpComingMovieData = async () => {
    const apiKey = '1303763ee89de2e76b22abaf890433e9'
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`
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

    this.setState({upComingData: convertedData})
  }

  render() {
    const {upComingData} = this.state

    return (
      <MainContainer>
        <UnorderList>
          {upComingData.map(each => (
            <MovieDetails details={each} key={each.id} />
          ))}
        </UnorderList>
      </MainContainer>
    )
  }
}

export default UpComing
