# Material

## Criação do projeto
ng new material --style=scss --skip-tests

## Instalação do Angular Material
npm install --save @angular/material @angular/cdk
npm install --save @angular/animations

- No app.module.ts
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
adicionar o "BrowserAnimationsModule" dentro do imports

- Criar um modulo para importar os componentes utilizados
ng g m angular-material --flat --spec=false 
importar o modulo criado dentro do app.module
adicionar os modulos dos componentes utilizados no imports e no exports

- Adicionar um thema do Material
adicionar o import dentro do arquivo css ou scss
@import '~@angular/material/prebuilt-themes/deeppurple-amber.css';
pre-built themes disponíveis no angular material (deeppurple-amber.css, indigo-pink.css, pink-bluegrey.css, purple-green.css)

- Adicionar o Material Icon Fonts
adicionar o link no index.html
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

## Fontes
https://material.angular.io/guide/getting-started
https://material.io/tools/icons/?style=baseline
