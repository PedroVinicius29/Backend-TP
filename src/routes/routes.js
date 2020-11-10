const express = require('express');
const ProdutosController = require ('../controllers/produtosController.js');
const ClienteController = require ('../controllers/clientesController.js');
const PedidoController = require('../controllers/pedidoController.js')
const router = express.Router();

router.post('/produtos', ProdutosController.Insert);
router.get ('/produtos', ProdutosController.SelectAll);
router.get ('/produtos/:id', ProdutosController.SelectDetail);
router.put ('/produtos/:id', ProdutosController.Update);
router.delete ('/produtos/:id', ProdutosController.Delete); 

router.post('/clientes', ClienteController.Insert);
router.get ('/clientes', ClienteController.SelectAll);
router.get ('/clientes/:id', ClienteController.SelectDetail);
router.put ('/clientes/:id', ClienteController.Update);
router.delete ('/clientes/:id', ClienteController.Delete); 

router.post('/pedidos', PedidoController.Insert);
router.get('/pedidos', PedidoController.SelectAll);
router.get('/pedidos/:id', PedidoController.SelectDetail);
router.put('/pedidos/:id', PedidoController.Update);
router.delete('/pedidos/:id', PedidoController.Delete);


module.exports = router;