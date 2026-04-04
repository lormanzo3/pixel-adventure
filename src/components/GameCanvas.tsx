import type { GameState, Scene } from '../types/game'

function GameCanvas({ scene, gameState, setGameState }: { 
  scene: Scene
  gameState: GameState
  setGameState: (state: GameState) => void
}) {
    return (
      <div style={{ position: "relative"}}>
        <img src={scene.background} />
        {scene.hotspots.map((hotspot) => (
          <div
            key={hotspot.id}
            style={{
              position: "absolute",
              left: hotspot.area.x + "%",
              top: hotspot.area.y + "%",
              width: hotspot.area.width + "%",
              height: hotspot.area.height + "%",
              cursor: "pointer"
            }}
            onClick={() => {
              setGameState(hotspot.action(gameState))
            }}
          />
        ))}
      </div>
    )
  }

  export default GameCanvas