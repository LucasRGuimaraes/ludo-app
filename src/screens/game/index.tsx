import GameBoard from './components/gameBoard'
import PlayersInfo from './components/playersInfo'
import { Container } from './styles'

export default function Game () {

    return (
        <Container>
            <PlayersInfo positions='top' firstName='Lucas' secondName='Caio' />
            <GameBoard />
            <PlayersInfo positions='bottom' firstName='Liviane' secondName='Cleber' />
        </Container>
    )
}