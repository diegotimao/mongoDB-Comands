db.produtos.find(
  {
    curtidas: { $gt: 10, $lt: 100 },
  },
  {
    _id: false,
    nome: true,
    curtidas: true,
  },
);