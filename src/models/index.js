import Genre from './genre.js'
import Game from './game.js'
import Platform from './platforms.js'

Game.belongsToMany(Genre, { through: 'game_genre', timestamps: false })
Genre.belongsToMany(Game, { through: 'game_genre', timestamps: false })

Game.belongsToMany(Platform, { through: 'game_platform', timestamps: false })
Platform.belongsToMany(Game, { through: 'game_platform', timestamps: false })

export { Game, Genre, Platform }
