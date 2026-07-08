import {Component} from 'react'

import {MainContainer, UnorderList} from './styledComponent'

import MovieDetails from '../MovieDetails'
import SearchContext from '../../context/SearchContext'
import {Redirect} from 'react-router-dom'

class SearchMovie extends Component {
  render() {
    return (
      <SearchContext.Consumer>
        {value => {
          const {searchData} = value
          const len = searchData.length
          return len === 0 ? (
            <Redirect to="/" />
          ) : (
            <MainContainer>
              <UnorderList>
                {searchData.map(each => (
                  <MovieDetails details={each} key={each.id} />
                ))}
              </UnorderList>
            </MainContainer>
          )
        }}
      </SearchContext.Consumer>
    )
  }
}

export default SearchMovie
