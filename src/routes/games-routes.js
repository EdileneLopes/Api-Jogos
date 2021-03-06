const express = require('express')

const router = express.Router()

const gamesController = require('../controllers/games-controller')


/**
@router GET games
@desc retorna todos os games
@access Public 
@endpoint http:/localhost:porta/games
**/
router.get('/games', gamesController.getGames)


/**
@router PUT 
@desc altera o qualquer chave do game a partir do id
@access Public 
@endpoint http:/localhost:porta/games/:id
**/
router.put('/games/:id', gamesController.atualizarItem)


/**
@router PATCH
@desc altera o item do game a partir do id
@access Public 
@endpoint http:/localhost:porta/games/:id
**/
router.patch('/games/:id', gamesController.trocarItem)



module.exports = router
