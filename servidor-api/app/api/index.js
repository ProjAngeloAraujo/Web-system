/* Código simplório, apenas para fornecer o serviço para a aplicação */
var api = {}


api.dados = function(req, res) {

    res.json([
        { nome: 'Cleber', idade: 2, nascimento: '2001-04-10' },
        { nome: 'João', idade: 5, nascimento: '2001-04-11' },
        { nome: 'Gustavo', idade: 1, nascimento: '2001-04-12'},
        { nome: 'Pedro', idade: 2, nascimento: '2001-04-13' }
    ]);
    
};


module.exports = api;