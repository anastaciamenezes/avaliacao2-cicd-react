import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Card = styled.div`
  background-color: #f1e7fe;
  padding: 10px 15px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  width: 60%;
  margin: 0 auto 20px auto;

  @media (max-width: 600px) {
    width: 80%;
  }
`
export const PlayerTitle = styled.span`
  font-family: 'bold';
`

export const InfoLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: black;
`
export const Players = styled.span`
  font-family: 'italic';
`