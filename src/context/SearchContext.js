import React from 'react'

const SearchContext = React.createContext({
  searchInput: '',
  searchData: [],
  onChangeSearchInput: () => {},
  onSearchButtonClikc: () => {},
})

export default SearchContext
