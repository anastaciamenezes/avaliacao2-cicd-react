import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import Player from '../../models/Player'
import { Card, PlayerTitle, InfoLink, Players} from './styles'

type Props = {
  player: Player
}

const firstNameStyle = {
  color: '#26c281',
}

const lastNameStyle = {
  color: '#ff4c30',
}

const PlayerCard = ({player}: Props) => {
  const playerSpecific =
    player.name >= '' ? firstNameStyle : lastNameStyle
    
    useContext(UserContext)

  return (
    <InfoLink to='/info' state={{ player: player }}>
      <Card>
        <PlayerTitle>{'Balldontlie'}</PlayerTitle>
        <Players>{playerSpecific}</Players>
      </Card>
    </InfoLink>
  )
}

export default PlayerCard