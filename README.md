# Nlw Heat - React Native App

* Aplicativo React Native desenvolvido durante a NLW Heat - 2021 da Rocketseat.
* No aplicativo é possível acompanhar mensagens em tempo real. Para enviar mensagens é necessário logar com uma conta do GitHub.

## Configurando a aplicativo
* Git clone
* npm install
* Instalar a versão mais atual do app Expo
* Usar um emulador virtual ou físico (no físico será necessário instalar manualmente o app Expo Go)

## Configurando a api do GitHub
* Criar aplicativo OAuth. [Acesse aqui e siga o tutorial](https://docs.github.com/pt/developers/apps/building-oauth-apps/creating-an-oauth-app)
* Quando estiver criando o aplicativo OAuth, em "homepage url" e "callback url" coloque o valor: ```https://auth.expo.io/[EXPO-USER]/nlwheatapp```. Substitua EXPO-USER pelo seu usuário do Expo. Exemplo da url com meu usuário: ```https://auth.expo.io/@andersonrr/nlwheatapp```.
* Crie um arquivo .env na raiz do projeto e crie variáveis com as informações do aplicativo OAuth criado: ```GITHUB_CLIENT_SECRET= , GITHUB_CLIENT_ID= , JWT_SECRET=```. Lembrabdo que JWT_SECRET= pode ser um valor qualquer.

## Executando o aplicativo
* Configure o backend e deixe-o rodando em um terminal. [Acesse aqui para configurar](https://github.com/AndersonRR/backendDoWhile2021)
* Execute o comando ```Expo start``` na raiz do projeto e escolha seu emulador

[Clique aqui](https://efficient-sloth-d85.notion.site/React-Native-80fa8ecb21f848c5a14093800a5277ba) para mais informações.
