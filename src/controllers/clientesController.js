// Define a utilização do model usuario e a dependência http-status
const Clientes = require('../models/clientes.js');
const status = require('http-status');

// Cria o método Insert, obtendo os dados da request
exports.Insert = (req, res, next) => {
    const nome = req.body.nome;
    const end = req.body.end;
    const email = req.body.email;
    const tell = req.body.tell;

    // Popula cada um dos campos do model com os campos recebido na request
    Clientes.create({
        nome: nome,
        end: end,
        email: email,
        tell: tell,
    })
        //then = registra o que queremos que aconteca quando a Promise for resolvida
        .then(clientes => {
            if (clientes) {
                res.status(status.OK).send(clientes);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        //catch = registra o que queremos que aconteca quando a Promise falhar
        .catch(error => next(error));
};

exports.SelectAll = (req, res, next) => {
    Clientes.findAll()
        .then(clientes => {
            if (clientes) {
                res.status(status.OK).send(clientes);
            }
        })
        .catch(error => next(error));
}

exports.SelectDetail = (req, res, next) => {
    const id = req.params.id;

    Clientes.findByPk(id)
        .then(clientes => {
            if (clientes) {
                res.status(status.OK).send(clientes);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};

exports.Update = (req, res, next) => {
    const id = req.params.id;
    const nome = req.body.nome;
    const end = req.body.end;
    const email = req.body.email;
    const tell = req.body.tell;

    Clientes.findByPk(id)
        .then(clientes => {
            if (clientes) {
                clientes.update({
                    nome: nome,
                    end: end,
                    email: email,
                    tell: tell,
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

    Clientes.findByPk(id)
        .then(clientes => {
            if (clientes) {
                clientes.destroy({
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

