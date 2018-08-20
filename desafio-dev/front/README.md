
## Requisitos
Construa uma aplicação SPA utilizando Angular (versão acima de 2), Sass e TypeScript que atenda o seguinte:
- Ter uma tela que liste os títulos dos posts para o usuário
- Ao clicar no título do post, deverão ser exibidas as informações complementares, como o nome e e-mail do autor (que está vinculado a um user Id)
- As informações devem ser consumidas pelo [JSONPlaceholder] (https://jsonplaceholder.typicode.com/).

## Criação do projeto
```bash
# Estrutura
ng new front --style=scss --skip-tests --skit-git

# Criando um modulo para as rotas
ng g m app-routing --flat --spec=false

# Componentes
ng g c posts
ng g c posts/post --spec=false
ng g c post-detail --spec=false

# Serviços
ng g s posts/posts --spec=false
```