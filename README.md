# IgniteLab - NodeJS
### Evento realizado pela Rocketseat focado no desenvlovimento do back-end utilizando o NodeJS
## Conteúdo Teórico
### O que são microsserviços
* Grandes empresas como Uber, LinkedIn e outros grandes e-commerces estão utilizando bastante
* Na arquitetura monolito, o código está sempre junto e em conversa com o banco de dados de maneira simples. No entanto, em uma aplicação muito grande, esta arquitetura vai precisar de mais memória RAM e processamento para executar os processos. Também pode acontecer de em caso de bug em uma parte da aplicação, tornar uma outra parte da aplicação falha
* Utilizando microsserviços, a aplicação é dividida em aplicações menores, tornando cada aplicação menor "independednte", assim dificilmente acarretando em problemas em outras partes da aplicação geral.
  * Cada microsserviço possui seu próprio banco de dados, o que acarreta em duplicidade de dados, pois com a independência das tarefas, acaba dificultando a comunicação entre os microsserviços
  * Quando um microsserviço é executado, é comum ter o registro no seu banco de dados e também ser enviada uma "mensagem" com os registros da ação, assim os outros microsserviços podem ter acesso de maneira facilitada as informações. Quando a mensagem é enviada, as aplicações que necessitam das informações que foram enviadas captam estas informações e armazenam no seu banco de dados as informações que são necessárias para a sua aplicação
### Sobre o desenvolvimento da aplicação
* Utilização da framework NestJS
  * Ao criar um projeto, ele já vem com sua estrutura pré-definida que o desenvolvedor deve seguir ao implementar a aplicação
  * Uso de TypeScript e Decorators
## Criando a aplicação
Para criar a aplicação em NestJS basta executar os códigos abaixo
```bash
npm i -g @nestjs/cli
nest new notification-service
```
O primeiro comando irá instalar a interface de linha de comando da framework. Ao executar o segundo comando, irá pedir qual é o gerenciador de pacotes que você deseja utilizar. Ao escolher o pacote, basta navegar até ele e pressionar a tecla "Enter" para continuar a criação do projeto
Para rodar o projeto basta entrar no diretório raiz e executar o comando `npm run start:dev`
Com o comando já executado, você pode entrar no navegador e acessar a aplicação no `localhost:3000`. A porta que o projeto será executado pode variar se você estiver executando outros projetos simultaneamente
#### Para saber mais informações sobre os comandos, acesse a [documentação do NestJS](https://docs.nestjs.com/)