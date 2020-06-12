<div style="width: 100%; display: flex; flex-direction: column; align-items: center;" >
<h1>Pokemon Filter</h1>
<img src="https://github.com/IuriKintschev/pokemon-filter/blob/master/src/assets/Screen-Recording-2020-06-12-at-01.22.57.gif?raw=true" width="80%" />
</div>

<br>

## Objetivo

Essa aplicação devera realizar uma consulta, e trazer em tela todos os pokemons da <br> primeira geração. Você tambem podera efetuar filtros a partir dos tipos de pokemons que <br>gostaria de vizualizar, e tambem por pontos de força(CP) setando um range entre <br> o minino e o maximo.

## Overview

Foi utilizado como padrões `styled-components`, `zustand` como gerenciador <br> de estado e `typescript`. O desenvolvimento foi focado no desing, para que ele possa <br>chegar a mais fiel possivel ao podelo proposto. Assim que aplicação é iniciada, ela faz uma <br> requisiçao `graphql` em um [API](https://github.com/lucasbento/graphql-pokemon) publica e é setada ao estado global. No estado possue <br> um `getter` que computa os dados antes de ir em tela é nele que é efetuado a logica <br> de filtragem dos dados.

<br>
<br>

## Como executar

Clone o repositorio em sua maquina local, e logo após execute os seguimtes comandos.

<br>

> Instale as dependencias

```bash
$ yarn install
```

<br>

> Basta subir o servidor

```bash
$ yarn start
```

<br>

## Tambem esta no ar!

<b>`Você encontra a aplicação acessando a seguinte URL` https://pensive-ardinghelli-587ab5.netlify.app/ </b>
