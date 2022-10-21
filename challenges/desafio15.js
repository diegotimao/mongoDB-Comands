//  Adicione o campo avaliacao em todos os documentos da coleção e efetue alterações nesse campo

db.produtos.updateMany(
  {}, 
  {
  $set: {
    avaliacao: NumberInt(0),
  },
});

db.produtos.updateMany(
  { tags: { $all: ['bovino']}},
  { $inc: {
    avaliacao: 5,
    } 
  }
);

db.produtos.updateMany(
  { tags: { $all: ['ave']}},
  {
    $set: {
      avaliacao: 3,
    }
  }
);

db.produtos.find({}, {
  _id: false,
  nome: true,
  avaliacao: true,
});