const express =require('express');
const { getAll, getPending, toggle } = require('../controller/product');
const router = express.Router();
router.get('/dishes',getAll);
router.get('/dishess',getPending);
router.get('/toggle/:id',toggle);

module.exports=router;