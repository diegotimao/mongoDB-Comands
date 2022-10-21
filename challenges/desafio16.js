// Adicione o campo ultimaModificacao com a data corrente somente no sanduíche Big Mac

db.produtos.updateOne(
  {
    name: "Big Mac",
  },
  {
    $currentDate: {
      ultimaModificacao: true,
    },
  },
);

db.produtos.find(
  {
    ultimaModificacao: { $exists: true },
  },
  {
    _id: false,
    nome: true,
  },
);