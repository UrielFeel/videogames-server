import getAllGames from './getAllGames.js'

export async function getPlatformsFromGames () {
  const platforms = []

  const games = await getAllGames()
  games.forEach(game => {
    return game.platforms.forEach(platform => {
      if (platforms.some(p => p.name === platform.name)) return

      platforms.push(platform)
    })
  })

  return platforms
}
