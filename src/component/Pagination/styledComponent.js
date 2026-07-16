import styled from 'styled-components'

// --- Styled Components ---

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  margin: 2rem 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  margin-bottom: 0px;
`
export const NavButton = styled.button`
  background-color: #ffffff;
  color: #000000;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  padding: 0 1rem;
  height: 40px;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease;
`
export const PageBox = styled.div`
  background-color: #ffffff;
  color: #000000;
  border: 1px solid #4f46e5;
  border-radius: 6px;
  width: 40px;
  height: 40px;
  font-size: 0.95rem;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
`
