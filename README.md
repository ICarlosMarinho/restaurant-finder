# Restaurant Finder

Web app para busca de restaurantes próximos à localização do usuário (a partir da geolocation API), consumindo as APIs _maps_ e _places_ do Google. Além de listar os restaurantes, o usuário pode visualizar detalhes sobre determinado restaurante clicando sobre ele na lista. Por fim, o usuário também pode buscar utilizando palavras-chave. Para visualizar o resultado final, basta entrar nesse [_link_](https://restaurant-finder-nine.vercel.app/).

## Rodando o projeto localmente.

1.  Faça o clone do projeto
2.  No diretório raiz do mesmo, execute o comando > npm install
3.  Após o processo de instalação das dependências, execute o comando > npm run start

Obs.: Para ter acesso as APIs do Google é necessário ter uma _api key_, a qual pode ser gerada no console do Google Cloud. Após obter a _api key_, basta criar um arquivo _.env_ e adicionar a seguinte linha:

> API_KEY=_api key_
