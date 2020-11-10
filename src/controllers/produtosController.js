// Define a utilização do model usuario e a dependência http-status
const Produtos = require('../models/produtos.js');
const status = require('http-status');

// Cria o método Insert, obtendo os dados da request
exports.Insert = (req, res, next) => {
    const nome = req.body.nome;
    const precoCusto = req.body.precoCusto;
    const precoVenda = req.body.precoVenda;
    const qtdEstoque = req.body.qtdEstoque;

    // Popula cada um dos campos do model com os campos recebido na request
    Produtos.create({
        nome: nome,
        precoCusto: precoCusto,
        precoVenda: precoVenda,
        qtdEstoque: qtdEstoque,
    })
        //then = registra o que queremos que aconteca quando a Promise for resolvida
        .then(produto => {
            if (produto) {
                res.status(status.OK).send(produto);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        //catch = registra o que queremos que aconteca quando a Promise falhar
        .catch(error => next(error));
};

exports.SelectAll = (req, res, next) => {
    Produtos.findAll()
        .then(produto => {
            if (produto) {
                res.status(status.OK).send(produto);
            }
        })
        .catch(error => next(error));
}

exports.SelectDetail = (req, res, next) => {
    const id = req.params.id;

    Produtos.findByPk(id)
        .then(produto => {
            if (produto) {
                res.status(status.OK).send(produto);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};

exports.Update = (req, res, next) => {
    const id = req.params.id;
    const nome = req.body.nome;
    const precoCusto = req.body.precoCusto;
    const precoVenda = req.body.precoVenda;
    const qtdEstoque = req.body.qtdEstoque;

    Produtos.findByPk(id)
        .then(produto => {
            if (produto) {
                produto.update({
                    nome: nome,
                    precoCusto: precoCusto,
                    precoVenda: precoVenda,
                    qtdEstoque: qtdEstoque,
                },
                    {
                        where: { id: id }
                    })
                    .then(() => {
                        res.status(status.OK).send();
                    })
                    .catch(error => next(error));
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};

exports.Delete = (req, res, next) => {
    const id = req.params.id;

    Produtos.findByPk(id)
        .then(produto => {
            if (produto) {
                produto.destroy({
                    where: { id: id }
                })
                    .then(() => {
                        res.status(status.OK).send();
                    })
                    .catch(error => next(error));
            }
            else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};

