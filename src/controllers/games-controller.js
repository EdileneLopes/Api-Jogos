const { request, response } = require('../app')
const gamesModel = require('../models/games.json')

const getGames = (request, response) => {
    response.status(200).send(gamesModel)
}


//função para atualizar usando PUT
const atualizarItem = (request, response) => {
    //a requisição é feita no body
    const jogoAtualizado = request.body
    
    //certifica que o id é im inteiro
    const id = parseInt(request.params.id)
    console.log('esse é o id: ', id)
    
    //traz o índice do game citado na url
    const atualizaId = gamesModel.indexOf(id)
    console.log('esse é o índice:', atualizaId)
    
    //desestruturação com esa6 do game citado na url
    const gameAtualizadoComId = {id, ...jogoAtualizado}
    console.log('esse é o game Atualizado com Id',gameAtualizadoComId)
    
    //troca sendo feita do id mencionado, a partir de 1 troque por o desentruturado
    gamesModel.splice(atualizaId, 1, gameAtualizadoComId)
    console.log('agora, o jogo com nome trocado: ', gameAtualizadoComId)

    response.status(200).send(gameAtualizadoComId)
        
        
}

//função para atualizar nome usando PATCH

const trocarItem = (request, response) => {
    const itemTrocado = request.body
    const id = parseInt(request.params.id)

    const gameParaAtualizar = gamesModel.find(game => game.id == id)

    for (key in itemTrocado){
        gameParaAtualizar[key] = itemTrocado[key]
    }

    response.status(200).send(gameParaAtualizar)
}




module.exports = {
    getGames,
    atualizarItem,
    trocarItem
}