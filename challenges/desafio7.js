db.produtos.find(
  {
    vendidos: { $ne: 50 },
    tags: null,
  },
  {
    _id: false,
    nome: true,
    vendidos: true,
  }
);