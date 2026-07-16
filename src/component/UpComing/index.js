import {Component} from 'react'

import {MainContainer, UnorderList} from './styledComponent'
import MovieDetails from '../MovieDetails'
import Pagination from '../Pagination'

class UpComing extends Component {
  state = {
    upComingData: [],
    page: 1,
    totaPages: 1,
  }

  componentDidMount() {
    this.getUpComingMovieData()
  }

  getUpComingMovieData = async () => {
    const {page} = this.state
    const apiKey = '1303763ee89de2e76b22abaf890433e9'

    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`

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

    this.setState({
      upComingData: convertedData,
      totaPages: data.total_pages || 1,
    })
  }

  onPageChange = page => {
    this.setState({page}, this.getUpComingMovieData)
  }

  render() {
    const {upComingData, page, totaPages} = this.state

    return (
      <MainContainer>
        <UnorderList>
          {upComingData.map(each => (
            <MovieDetails details={each} key={each.id} />
          ))}
        </UnorderList>
        <Pagination
          currentPage={page}
          totalPages={totaPages}
          onPageChange={this.onPageChange}
        />
      </MainContainer>
    )
  }
}

export default UpComing
