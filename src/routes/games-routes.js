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
@desc altera o nome do game a partir do id
@access Public 
@endpoint http:/localhost:porta/games/:id
**/
router.put('/games/:id', gamesController.atualizarNome)


/**
@router PATCH
@desc altera o nome do game a partir do id
@access Public 
@endpoint http:/localhost:porta/games/:id
**/
router.patch('/games/:id', gamesController.trocarNome)



module.exports = router
