# MongoDB - Comands

Repósitorio destinado ao aramazenamento de queryes referentes ao banco de dados não relacional MongoDB.

Para acessar deve-se entrar na pasta **/challenges** onde estão todos os arquivos.


*OBS:* Toda a parte de configuração deste projeto foi desenvolvido pela trybe.

## Query referentes ao banco de dados MongoDB

---

desafio1 - Retorne a quantidade de documentos inseridos na coleção `produtos`.

---

desafio2 - Ordene a coleção `produtos` pela quantidade de lanches vendidos em ordem crescente, mostrando apenas o `nome` e a quantidade de lanches `vendidos`.

---

desafio3 - Escreva uma query que exiba os valores da coluna que representa a primary key da tabela `products`.

---

desafio4 - Retorne os lanches que tiveram vendas maiores que `50` e menores que `100`, mostrando apenas o nome e a quantidade de lanches `vendidos` em ordem crescente.

---

desafio5 - Retorne o `nome`, as `curtidas` e `vendidos` dos lanches que tiveram quantidade de `curtidas` igual a `36` ou tenham a quantidade de vendas igual a `85`.

---

desafio6 - Retorne o `nome` e as `curtidas` dos lanches que tiveram curtidas maiores que `10` e menores que `100`.

---

desafio7 - Retorne o `nome` e `vendidos` dos lanches que tenham sido `vendidos` com uma quantidade diferente de `50` e em que o campo `tags` não exista.

---

desafio8 - Delete os lanches com menos de `50` `curtidas` e retorne o `nome` dos lanches que restaram no banco.

---

desafio9 - Retorne o `nome` de todos os lanches que possuam `calorias` abaixo de `500`.

---

desafio10 - Retorne o `nome` de todos os lanches que tenham o percentual de `proteínas` maior ou igual a `30` e menor ou igual a `40`.

---

desafio11 - Retorne o `nome` do produto, a quantidade de `curtidas` e quantos itens foram `vendidos` dos produtos que não sejam iguais a `Big Mac` e `McChicken`.

---

desafio12 - Adicione `ketchup` aos `ingredientes` para todos os sanduíches menos o `McChicken`, garantindo que não haja duplicidade nos `ingredientes`.

---

desafio13 - Inclua o campo `criadoPor` em todos os documentos, colocando `Ronald McDonald` no valor desse campo.

---

desafio14 - Crie uma query que retorne todos os lanches que possuem *picles* em seus ingredientes e mostre apenas os `3` primeiros itens contidos no array `valoresNutricionais`.

---

desafio15 - Adicione o campo `avaliacao` em todos os documentos da coleção e efetue alterações nesse campo.

---

desafio16 - Adicione o campo `ultimaModificacao` com a data corrente somente no sanduíche `Big Mac`.

---

desafio17 - Retorne a quantidade total de produtos em uma nova coleção chamada `resumoProdutos`.

---

desafio18 - Inclua `bacon` no final da lista de `ingredientes` dos sanduíches `Big Mac` e `Quarteirão com Queijo`.

---

desafio19 - Remova o item `cebola` de todos os sanduíches.

---

desafio20 - Remova o primeiro `ingrediente` do sanduíche `Quarteirão com Queijo`.

---

desafio21 - Remova o último `ingrediente` do sanduíche `Cheddar McMelt`.

---

desafio22 - Adicione a quantidade de vendas dos sanduíches por dia da semana.

---

desafio23 - Insira os valores `combo` e `tasty` no _array_ `tags` de todos os sanduíches e aproveite para deixar os valores em ordem alfabética ascendente (A a Z).

---

desafio24 - Ordene em todos os documentos os valores do _array_ `valoresNutricionais` pelo campo `percentual` de forma decrescente.

---

desafio25 - Adicione o valor `muito sódio` ao final do _array_ `tags` nos produtos em que o `percentual` de `sódio` seja maior ou igual a `40`.

---

desafio26 - Adicione o valor `contém sódio` ao final do _array_ `tags` nos produtos em que o `percentual` de `sódio` seja maior do que `20` e menor do que `40`.

---

desafio27 - Conte quantos produtos contém `Mc` no nome, sem considerar letras maiúsculas ou minúsculas.

---

desafio28 - Conte quantos produtos têm `4` ingredientes.

--- 

desafio29 - Renomeie o campo `descricao` para `descricaoSite` em todos os documentos.

---

desafio30 - Remova o campo `curtidas` do item `Big Mac`.

---

desafio31 - Retorne o `nome` dos sanduíches em que o número de `curtidas` é maior que o número de sanduíches `vendidos`

---

desafio32 - Retorne o `nome` e a quantidade de vendas (`vendidos`) dos sanduíches em que o número de vendas é múltiplo de `5`