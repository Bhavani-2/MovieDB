import {Component} from 'react'
import {
  HeaderMainContainer,
  LinkItem,
  MovieTitle,
  ItemsAndSearchContainer,
  MoviePara,
  Input,
  Button,
  MainContainer,
} from './styledComponent'
import SearchContext from '../../context/SearchContext'

class Header extends Component {
  render() {
    return (
      <SearchContext.Consumer>
        {value => {
          const {onChangeSearchInput, searchInput, onSearchButtonClikc} = value
          const onChangeInput = event => {
            onChangeSearchInput(event.target.value)
          }

          const onSearch = () => {
            onSearchButtonClikc()
          }
          const onChangeSearch = event => {
            if (event.key === 'Enter') {
              onSearchButtonClikc()
            }
          }
          return (
            <MainContainer>
              <HeaderMainContainer>
                <LinkItem to="/">
                  <MovieTitle>MovieDB</MovieTitle>
                </LinkItem>
                <ItemsAndSearchContainer>
                  <LinkItem to="/">
                    <MoviePara>Popular</MoviePara>
                  </LinkItem>
                  <LinkItem to="/top-rated">
                    <MoviePara>Top Rated</MoviePara>
                  </LinkItem>
                  <LinkItem to="/upcoming">
                    <MoviePara>Upcoming</MoviePara>
                  </LinkItem>

                  <Input
                    type="text"
                    placeholder="Movie Name"
                    value={searchInput}
                    onKeyDown={onChangeSearch}
                    onChange={onChangeInput}
                  />
                  <Button onClick={onSearch}>Search</Button>
                </ItemsAndSearchContainer>
              </HeaderMainContainer>
            </MainContainer>
          )
        }}
      </SearchContext.Consumer>
    )
  }
}

export default Header
