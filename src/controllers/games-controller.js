const { request, response } = require('../app')
const gamesModel = require('../models/games.json')

const getGames = (request, response) => {
    response.status(200).send(gamesModel)
}


//função para atualizar usando PUT
const atualizarNome = (request, response) => {
    //a requisição é feita no body
    const nomeAtualizado = request.body
    
    //certifica que o id é im inteiro
    const id = parseInt(request.params.id)

    //traz o índice do game citado na url(trouxe -1?)
    const atualizaId = gamesModel.indexOf(id)
    console.log('esse é o índice:', atualizaId)
    
    //desestruturação com esa6 do game citado na url
    const gameAtualizadoComId = {id, ...nomeAtualizado}
    
    //troca sendo feita do id mencionado, a partir de 1 troque por o desentruturado
    gamesModel.splice(atualizaId, 1, gameAtualizadoComId)
    console.log('agora, o jogo com nome trocado: ', gameAtualizadoComId)

    response.status(200).send(gameAtualizadoComId)
        
        
}

//função para atualizar nome usando PATCH

const trocarNome = (request, response) => {
    const nomeTrocado = request.body
    const id = parseInt(request.params.id)

    const gameParaAtualizar = gamesModel.find(game => game.id == id)

    for (key in nomeTrocado){
        gameParaAtualizar[key] = nomeTrocado[key]
    }

    response.status(200).send(gameParaAtualizar)
}




module.exports = {
    getGames,
    atualizarNome,
    trocarNome
}