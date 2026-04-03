import GameCanvas from "./components/GameCanvas"
import type { Scene, GameState } from './types/game'

const scene: Scene = {
  id: "diner",
  background: "/scenes/diner.jpg",
  hotspots: []
 }

const gameState: GameState = {
  currentScene: "diner",
  inventory: [],
  flags: {}
}


function App() {
  return <GameCanvas scene={scene} gameState={gameState} setGameState={() => {}} />
}

export default App