import type { GameState, Scene } from '../types/game'

function GameCanvas({ scene, gameState, setGameState }: { 
  scene: Scene
  gameState: GameState
  setGameState: (state: GameState) => void
}) {
    return <img src={scene.background} />
  }

  export default GameCanvas