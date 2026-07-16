import {Component} from 'react'
import {Switch, Route, withRouter} from 'react-router-dom'

import Home from './component/Home'
import TopRated from './component/TopRated'
import UpComing from './component/UpComing'
import SingleMovieDetails from './component/SingleMovieDetails'
import Header from './component/Header'
import SearchMovie from './component/SearchMovie'
import SearchContext from './context/SearchContext'

import './App.css'

class App extends Component {
  state = {
    searchInput: '',
    data: [],
  }

  onSearchButtonClikc = async () => {
    const {searchInput} = this.state

    const apiKey = '1303763ee89de2e76b22abaf890433e9'
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchInput}&page=1`
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

    this.setState({data: convertedData})
    const {history} = this.props
    history.push('/search')
  }

  onChangeSearchInput = value => {
    this.setState({searchInput: value})
  }

  render() {
    const {data, searchInput} = this.state
    return (
      <SearchContext.Provider
        value={{
          searchData: data,
          searchInput,
          onChangeSearchInput: this.onChangeSearchInput,
          onSearchButtonClikc: this.onSearchButtonClikc,
        }}
      >
        <>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/top-rated" component={TopRated} />
            <Route exact path="/upcoming" component={UpComing} />
            <Route exact path="/movies/:id" component={SingleMovieDetails} />
            <Route exact path="/search" component={SearchMovie} />
          </Switch>
        </>
      </SearchContext.Provider>
    )
  }
}

export default withRouter(App)
