

export const addPoint = (players, id) => {
    return players.map(player => player.id === id ? {...player, counter: player.counter + 1 } : player )
}