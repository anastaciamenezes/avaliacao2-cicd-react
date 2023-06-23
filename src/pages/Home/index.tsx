import { useContext, useEffect, useState } from 'react'
import PlayerCard from '../../components/PlayerCard'
import { Container, FilterInput, Loading } from './styles'
import { UserContext } from '../../context/UserContext'
import Player from '../../models/Player'
import { PlayerService } from '../../services/PlayerService'

const Home = () => {
  const [player, setPlayer] = useState<Player[]>([])
  const [filter, setFilter] = useState('')
  const [playerLoaded, setPlayerLoaded] = useState(false)
  const [playerService] = useState(new PlayerService())

  const { Player } = useContext(UserContext)

  const loadPlayers = async () => {
    setPlayerLoaded(false)
    const loadedPlayers = await playerService.loadPlayers(Player)
    setPlayer(loadedPlayers)
    setPlayerLoaded(true)
  }

  useEffect(() => {
    loadPlayers()
  }, [Player])

  useEffect(() => {
    const results = playerService.filterPlayers(filter)
    setPlayer(results)
  }, [filter, playerService])

  return (
    <Container>
      {playerLoaded && (
        <>
          <FilterInput
            placeholder='Digite o nome do time'
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
          {player.length > 0 &&
            player.map((p) => <PlayerCard player={p} key={p.id} />)}
          
          {player.length == 0 && <h2>Erro ao acessar os dados</h2>}
        </>
      )}

      {!playerLoaded && <Loading src={Loading} alt='Carregando' />}
    </Container>
  )
}

export default Home