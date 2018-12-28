# angular-study
Repositório para criar projetos de estudo utilizando o Angular v2 ou superior

## Preparar o ambiente

- Instalando o Angular CLI globalmente
npm install -g @angular/cli

- Criando um novo projeto
ng new my-app
ng new my-app --style=scss (utilizar o sass)
ng new my-app --skip-tests (não criar os arquivos de testes)
ng new my-app --skip-git (no inicializa o git no repositorio, no caso de estar dentro de um repositorio)
ng new my-app --skip-install (cria o projeto sem instalar as dependências)
ng new my-app --style=scss --skip-test --skip-git

- Limpar cache do npm caso apresente erro no npm install
npm cache clean --force

- Configurar o proxy caso tenha algum erro de conexão (o padrão é https, mas apresenta erro utilizando o modem 3G da Claro)
npm config set proxy null
npm config set https-proxy null
npm config set registry http://registry.npmjs.org/

- Executar o projeto
cd my-app
ng serve
ng serve --open
ng serve --port=XXXX

- Compilar o projeto para produçao
ng build
    --prod (configura a variavel de ambiente para producao - TESTAR)
    --aot (deixa os arquivos menores)

- Criar um componente
ng generate component comp1
ng g c comp1

## Projetos

### hello-world
Primeiro projeto utilizando a nova versão do Angular

### tour-of-heroes
Projeto seguindo o tutorial do site oficial
https://angular.io/tutorial

### routing
Projeto utilizado para testar e estudar as funcionalidades de rotas do Angular
https://www.youtube.com/watch?v=tPOMG0D57S0&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G
https://loiane.training/course/angular/ 
https://angular.io/guide/router

### material
Projeto utilizado para testar e estudar a instalação e funcionalidades do Angular Material
https://material.angular.io/

### chart-ng2-charts
Componente para criação de gráficos. Projeto utilizado para testar e estudar a instalação e funcionalidades do ng2-charts
https://valor-software.com/ng2-charts/

### chart-ngx-charts
Componente para criação de gráficos. Projeto utilizado para testar e estudar a instalação e funcionalidades do ngx-charts
https://github.com/swimlane/ngx-charts

### drag-and-drop-ngx
Componente para utilizar o recurso de Drag and Drop (clicar e arrastar)
https://www.npmjs.com/package/ngx-drag-drop

### excel
Exportação de dados para arquivo do Excel
https://www.npmjs.com/package/xlsx

### material-icons-hosting
Projeto de teste para utilizar o Material Design Icons dentro do projeto, sem utilizar fontes externas

## Projetos para verificar
- ng-bootstrap <https://ng-bootstrap.github.io>
- Angular Universal <https://angular.io/guide/universal>

## Fontes
https://angular.io/guide/quickstart
https://angular.io/tutorial
https://github.com/angular/angular-cli
