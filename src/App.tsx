import { useState } from "react"
import GameCanvas from "./components/GameCanvas"
import type { Scene, GameState } from './types/game'

const scene: Scene = {
  id: "diner",
  background: "/scenes/diner.jpg",
  hotspots: [{
    id: "counter",
    label: "Diner Counter",
    area: { x: 10, y: 60, width: 30, height: 20 },
    action: (state) => {
      return {
        ...state,
        inventory: [...state.inventory, "coin"]
      }
    }
  },
    {
    id: "payphone",
    label: "Payphone",
    area: { x: 70, y: 50, width: 10, height: 25 },
    action: (state) => {
      if (state.inventory.includes("coin")) {
        return {
          ...state,
          flags: { ...state.flags, foundThomasMessage: true }
        }
      }
      return state
    }
  }]
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