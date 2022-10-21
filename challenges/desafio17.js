//  Retorne a quantidade total de produtos em uma nova coleção chamada resumoProdutos

db.resumoProdutos.insertOne(
  {
    franquia: 'McDonalds',
    totalProdutos: 5,
  }
);

db.resumoProdutos.find(
  {},
  {
    _id: false,
    franquia: true,
    totalProdutos: true
  }
);