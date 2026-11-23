const router = require('express').Router();
const Product = require('./product.model');

router.get('/',        async (req, res) => res.json(await Product.find()));
router.get('/:id',     async (req, res) => res.json(await Product.findById(req.params.id)));
router.post('/',       async (req, res) => res.status(201).json(await Product.create(req.body)));
router.put('/:id',     async (req, res) => res.json(await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })));
router.delete('/:id',  async (req, res) => { await Product.findByIdAndDelete(req.params.id); res.status(204).send(); });

module.exports = router;
