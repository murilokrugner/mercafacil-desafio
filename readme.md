<p align="center">
  <a href="https://mercafacil.com">
    <img src="https://mercafacil.com/wp-content/themes/mercafacil/img/logo.svg" alt="Logo">
  </a>

<h3 align="center">Challenge Mercafacil React Native</h3>

<!-- ABOUT THE PROJECT -->

## Sobre o Projeto

Este projeto visa a criação de um aplicativo Android e Ios que consome a API do desenho animado Rick and Morty para o desafio técnico da Mercafacil.

### Feito Com

Abaixo segue o que foi utilizado na criação deste projeto:

- [React Native](http://facebook.github.io/react-native/) - O React Native é um framework que permite o desenvolvimento de aplicações mobile usando JavaScript e React;
- [React Navigation](https://reactnavigation.org/) - O React Navigation surgiu da necessidade comunidade do React Native de uma navegação de forma fácil de se usar, e escrita toda em JavaScript;
- [@react-navigation/stack](https://reactnavigation.org/) - Roteamento e navegação para seus aplicativos React Native em Stack.
- [React Native Gesture Handler](https://kmagiera.github.io/react-native-gesture-handler/) - API declarativa que permite a manipulação de toques e gestos no React Native;
- [Reactotron-react-native](https://github.com/infinitered/reactotron/blob/master/docs/quick-start-react-native.md) - Plugin para configurar o Reactotron para se conectar ao projeto React Native;
- [react-native-safe-area-context](https://github.com/th3rdwave/react-native-safe-area-context) - Dependências de React Navigation;
- [react-native-screens](https://github.com/software-mansion/react-native-screens) - Dependências de React Navigation;
- [styled-components](https://styled-components.com/) - Use os melhores bits de ES6 e CSS para estilizar seus aplicativos sem estresse;
- [@apollo/client](https://www.apollographql.com/docs/react/) - Lib para consultas de api em Graphql
- [react-native-picker-select](https://github.com/lawnstarter/react-native-picker-select) - Picker para react native
- [storybook](https://storybook.js.org/) - Documentação de componentes

## API Rick and Morty - Graphql
- [API Rick and Morty](https://rickandmortyapi.com/) - Veja mais

## Para a padronização do código, o projeto utilizar as extensões para Visual Studio Code, como:
- [eslint](https://eslint.org/) - Encontre e corrija problemas em seu código JavaScript
- [prettier](https://prettier.io/) - Um formatador de código opinativo
- [editorconfig](https://editorconfig.org/) - EditorConfig ajuda a manter estilos de codificação consistentes para vários desenvolvedores

<!-- GETTING STARTED -->
## Começando

Para conseguir rodar o projeto, clone o mesmo e siga os passos abaixo.

### Pré-requisitos

Antes de seguirmos para as configurações do projeto, é ideal que você tenha o ambiente configurado para criar e testar aplicativos em React Native, para isso você pode seguir o guia do link abaixo como exemplo:

[Ambiente React Native (Android/iOS)](https://github.com/Rocketseat/ambiente-react-native)

### Instalação

1. Com o projeto clonado, abra o mesmo em seu Terminal, Powershell ou CMD e execute os seguites comandos:
   - Se estiver utilizando Yarn execute:
     - ```sh
          yarn
          ```
   - Se estiver utilizando NPM execute:
     - ```sh
          npm install
          ```
2. Para executar o projeto em IOS, execute o seguinte comando:
   - ```sh
          ios/pod install
        ```
3. Depois de todas as dependências tiverem sido baixadas execute o projeto:

   - ```sh
          yarn run android
        ```
    - ```sh
           yarn run ios
        ```
    Caso utilize NPM:
    - ```sh
          npm run android
        ```
    - ```sh
          npm run ios
        ```