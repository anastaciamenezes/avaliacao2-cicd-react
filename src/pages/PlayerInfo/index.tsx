import { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
import Player from '../../models/Player'
import {
  BackButton,
  BackLink,
  BackLinkPanel,
  CardRow,
  Container,
  InfoCard,
  RowKey,
  RowValue,
} from './styles'


const PlayerInfo = () => {

  
  return (
    <Container>
      <InfoCard>
        <CardRow>
          <RowKey>Nome:</RowKey>
          <RowValue>{Player.name}</RowValue>
        </CardRow>
        
      </InfoCard>

      <BackLinkPanel>
        <BackLink to='/'>
          <BackButton>Voltar</BackButton>
        </BackLink>
      </BackLinkPanel>
    </Container>
  )
}

export default PlayerInfo