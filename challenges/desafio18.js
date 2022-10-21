db.produtos.updateMany(
    { nome: 'Big Mac', nome: 'Quarteirão com Queijo' },
    { $addToSet: { ingredientes: "bacon" } },
);

db.produtos.find(
  {nome: 'Big Mac', nome: 'Quarteirão com Queijo'},
);


db.produtos.find(
  {},
  {
    _id: false,
    nome: true,
    ingredientes: true,
  }
);