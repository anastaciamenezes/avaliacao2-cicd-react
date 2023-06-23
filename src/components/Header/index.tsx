import { useContext } from 'react'
import{ AppTitle, Container, PlayerLabel} from './styles'
import { UserContext } from '../../context/UserContext'

const Header = () => {
  useContext(UserContext)
  
  return (
    <Container>
      <AppTitle>Ball Dont Lie</AppTitle>
      <PlayerLabel>Stars Players</PlayerLabel>
    </Container>
  )
}
export default Header