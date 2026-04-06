import { useState } from "react"
import GameCanvas from "./components/GameCanvas"
import type { Scene, GameState } from './types/game'

const scene: Scene = {
  id: "diner",
  background: "/scenes/diner.jpg",
  hotspots: []
 }


function App() {
  const [gameState, setGameState] = useState<GameState>({
    currentScene: "diner",
    inventory: [],
    flags: {}
  })
  return <GameCanvas scene={scene} gameState={gameState} setGameState={setGameState} />
}

export default App