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
      if (state.inventory.includes("coin")) {
        return {
          state: {...state },
          message: "There's nothing else under the counter."
        }
      }

      return {
        state: {
          ...state,
          inventory: [...state.inventory, "coin"]
        },
        message: "You found a coin under the counter."
      }
  }},
    {
    id: "payphone",
    label: "Payphone",
    area: { x: 70, y: 50, width: 10, height: 25 },
    action: (state) => {
      if (state.inventory.includes("coin")) {
        return {
          state: {...state, flags: { ...state.flags, foundThomasMessage: true } },
          message: "You drop the coin in. A recorded message plays: 'If you're hearing this, something's wrong. Come to the workshop. 3:14 — remember that.'"
        }
      }
      return { state: state, message: "It looks like the payphone needs a coin." }
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