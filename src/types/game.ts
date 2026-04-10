export type GameState = {
  currentScene: string
  inventory: string[]
  flags: Record<string, boolean>
}

export type Choice = {
  label: string
  action: (state: GameState) => {
    state: GameState
    message: string
    choices?: Choice[]
  }
}

export type Hotspot = {
  id: string
  label: string
  area: { x: number; y: number; width: number; height: number }
  action: (state: GameState) => {
    state: GameState
    message: string
    choices?: Choice[]
  }
}

export type Scene = {
  id: string
  background: string
  hotspots: Hotspot[]
}

