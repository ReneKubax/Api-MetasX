var express = require('express');
var router = express.Router();


let metas = [
{
  "id": "1",
  "detalles": "Leer libros",
  "plazo": "Semana",
  "frecuencia": "6",
  "icono": "📚",
  "meta": "12",
  "fecha_limite": "2030-01-01",
  "completado": "0"
},
{
  "id": "2",
  "detalles": "Leer libros",
  "plazo": "Semana",
  "frecuencia": "6",
  "icono": "📚",
  "meta": "12",
  "fecha_limite": "2030-01-01",
  "completado": "0"
},
{
  "id": "3",
  "detalles": "Leer libros",
  "plazo": "Semana",
  "frecuencia": "6",
  "icono": "📚",
  "meta": "12",
  "fecha_limite": "2030-01-01",
  "completado": "0"
},
{
  "id": "4",
  "detalles": "Leer libros",
  "plazo": "Semana",
  "frecuencia": "6",
  "icono": "📚",
  "meta": "12",
  "fecha_limite": "2030-01-01",
  "completado": "0"
},
{
  "id": "5",
  "detalles": "Leer libros",
  "plazo": "Semana",
  "frecuencia": "6",
  "icono": "📚",
  "meta": "12",
  "fecha_limite": "2030-01-01",
  "completado": "0"
},
];
/* GET lista de metas */
router.get('/', function (req, res, next) {
  res.send(metas);
});
/* GET meta con id */
router.get('/id:', function(req, res, next) {
  const id = req.params.id;
  const metas = metas.find(item => item.id === id);
  if(!meta){
    return res.sendStatus(404);
  }
  res.send(meta);
});
/* POST crear meta */
router.post('/', function(req, res, next) {
  const meta = req.body;
  metas.push(meta);
  res.status(201);
  res.send(meta);
});
/* put actualizar meta */
router.put('/:id', function(req, res, next) {

  const meta = req.body;
  const id = req.params.id;
  if(meta.id !== id){
    return res.sendStatus(409);
  }
  metas[indice] = meta;
  res.send(meta);

});
/* DELETE crear meta */
router.delete('/:id', function(req, res, next) {
  const id = req.params.id;
  const indice = metas.findIndex(item => item.id === id);
  if(indice === -1){
    return res.sendStatus(404);
  }
  metas.splice(indice, 1);
  res.sendStatus(204);
});

module.exports = router;
