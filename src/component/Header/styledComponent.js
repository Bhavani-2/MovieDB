import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const MainContainer = styled.div`
 display:flex;
 flex-direction:column;
`

export const HeaderMainContainer = styled.div`
background-color: #34393f;
height:60px;
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
padding:5px;

`

export const MovieTitle = styled.h1`
  font-size:25px;
  color: #7e8184;

`
export const LinkItem = styled(Link)`
  text-decoration:none;
`
export const ItemsAndSearchContainer = styled.div`
  display:flex;
  flex-direction:row;
`
export const MoviePara = styled.p`
  font-size:18px;
  color: #7e8184;
  margin-right:5px;
  font-weight:500;
  font-family:"roboto";
  `
export const Input = styled.input`
   background-color: #fefefd;
   witdh:100px;
   border:none;
   cursor:pointer;
   height:30px;
   margin-top:10px;
   outline:none;
   margin-right:5px;
`

export const Button = styled.button`
  background-color: #6c767d;
  color: #a6aaaf;
  border:none;
  border-radius:5px;
   height:30px;
   margin-top:10px;
   cursor:pointer;
`
export const UnorderList = styled.ul`
 display:flex;
 flex-direction:row;
 flex-wrap:wrap;
justify-content:center;

`
