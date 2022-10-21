db.produtos.updateMany(
    { 
      $or: [
        { nome: "Big Mac" }, { nome: "Quarteirão com Queijo" },
      ], 
     },
    { $addToSet: { ingredientes: "bacon" } },
);

db.produtos.find(
  {},
  {
    _id: false,
    nome: true,
    ingredientes: true,
  },
);