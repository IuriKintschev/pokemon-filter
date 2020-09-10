<p align="center">
<h1>Pokemon Filter</h1>
</p>
<p align="center">
<a href="https://pensive-ardinghelli-587ab5.netlify.app/" target="blank"><img src="https://github.com/IuriKintschev/pokemon-filter/blob/master/src/assets/Screen-Recording-2020-06-12-at-01.22.57.gif?raw=true" width="80%" /></a>
</p>

<br>

## Objetivo

Essa aplicação deverá realizar uma consulta e trazer em tela todos os pokémons da <br> primeira geração. Você tambem poderá efetuar filtros a partir dos tipos de pokémons que <br>gostaria de vizualizar, além de por pontos de força(CP) setando um range entre <br> o mínino e o máximo.

## Overview

Foram utilizados como padrões `styled-components`, `zustand` como gerenciador <br> de estado e `typescript`. O desenvolvimento foi focado no desing, para que ele possa <br>chegar a mais fiel possivel ao modelo proposto. Assim que aplicação é iniciada, ela faz uma <br> requisiçao `graphql` em um [API](https://github.com/lucasbento/graphql-pokemon) publíca e é setada ao estado global. No estado possue <br> um `getter` que computa os dados antes de ir em tela, é nele que é efetuado a lógica <br> de filtragem dos dados.

<br>
<br>

## Como executar

Clone o repositório em sua maquina local, e logo após execute os seguintes comandos.

<br>

> Instale as dependências

```bash
$ yarn install
```

<br>

> Basta subir o servidor

```bash
$ yarn start
```

## <b> !atualmente o backend não esta mais servindo os dados, infelizmente :(
