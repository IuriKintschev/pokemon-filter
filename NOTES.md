# Review notes

## Tentando Rodar

Primeiramente parabéns, o projeto ficou bem simples de rodar, apenas dois comandos e já deu tudo certo.

Vi que também foi implementado quase todos os critérios extras, faltando só o lazy loading (e testes, a não ser que rodei algo errado), mas sem problemas, muito bom mesmo, parabéns!!!

Além disso, o loading ficou bem bonitinho hahaha.

Senti falta de ter no README a explicação de como rodar os testes (ok, sou dev, olhei no package.json e vi que tinha um script), mas lembrando que a documentação é para ser clara e tornar mais fácil a execução do projeto/testes

Não sei se fiz algo de errado, quando rodei o teste com yarn test ele quebrou aqui, mas olhando o código faz sentido, visto que a Home está atrelada a pegar os dados de uma API, enquanto nos testes vocè tentou passar a informação via props.

## Review do layout

Em geral ficou muito bom, principalmente a questão da responsividade, mandou bem! Tiveram algumas pequenas inconsistências (o que é normal de acontecer), vou apenas pontuar aqui como feedback:

- Espaço do filtro com dimensões incorretas, maior do que foi previsto.
- Parte do filtro (type) estão todos não selecionados e todos os pokémons estão aparecendo. No projeto estava selecionado os types dos pokémons na tela.
- Todo o elemento do filtro (type) está fora de posição. Padding de baixo muito pequeno e padding de cima muito grande.
- A barra do filtro (maxCP) está com delay, comprometendo a precisão no posicionando e dando uma experiência negativa de uso.
- Algumas imagens dos pokémons estão fora de posição, algumas estão muito pra cima, outras muito pra esquerda dentro do elemento da imagem)

## Review do código

Pontos gerais notados:
- Foi utilizado styled-components e isso foi bem legal, porém uma das vantagens de utilizar ele é deixar o código mais semântico, porém não foi aproveitado ao máximo da tecnologia. Por exemplo no PokemonCard, só foi utilizado para o Container, sendo que o resto era html puro, poderias ter criado uma div com styled components que o nome seria PokemonImage, mesma coisa com PokemonDetails.
- Vi que foi muito bem tipado, gostei, ficou até mais fácil de ler e entender.
- Estrutura do código ficou bem legal, a forma como vocè utilizou das pastas utils, services, constants, components... etc.. ficou bem legal, parabéns.

Em linhas gerais foi isso, deixei vários comentários espalhados pelo código