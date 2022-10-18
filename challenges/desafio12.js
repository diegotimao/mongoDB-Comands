// Adicione ketchup aos ingredientes para todos os sanduíches 
// menos o McChicken, garantindo que não haja duplicidade nos ingredientes

db.produtos.updateMany(
  { nome: { $ne: 'McChicken' }},
  { $addToSet: { ingredientes: "ketchup" } },
);

db.produtos.find(
  {},
  {
    _id: false,
    nome: true,
    ingredientes: true,
  }
);