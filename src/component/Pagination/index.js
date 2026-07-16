import {PaginationContainer, NavButton, PageBox} from './styledComponent'

const Pagination = props => {
  const {currentPage, totalPages, onPageChange} = props

  const onClickPrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1)
    }
  }

  const onClickNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1)
    }
  }

  return (
    <PaginationContainer>
      {/* Prev Button */}
      <NavButton onClick={onClickPrev} disabled={currentPage === 1}>
        Prev
      </NavButton>

      {/* Active Page Number */}
      <PageBox>{currentPage}</PageBox>

      {/* Next Button */}
      <NavButton onClick={onClickNext} disabled={currentPage === totalPages}>
        Next
      </NavButton>
    </PaginationContainer>
  )
}

export default Pagination
