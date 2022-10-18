// Retorne o nome de todos os lanches que tenham o percentual de 
// proteínas maior ou igual a 30 e menor ou igual a 40

db.produtos.find(
  {
    valoresNutricionais: {
      $elemMatch: { 
          tipo: 'proteínas',
          quantidade: { $gt: 20, $lt: 40 }
        }
      }
    },
  {
    _id: false,
    nome: true,
  }
);