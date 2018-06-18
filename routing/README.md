

# Criando um modulo para as rotas
ng g m app-routing --flat --spec=false

# Criando os componentes root
ng g c login --spec=false
ng g c admin --spec=false
ng g c client --spec=false

# Criando os modulos para os componentes filhos
ng g m admin/admin --flat --spec=flase
ng g m client/client --flat --spec=false

# Criando os modulos de rotas
ng g m admin/admin-routing --flat --spec=flase
ng g m client/client-routing --flat --spec=false

# Criando as paginas filhas do admin
ng g c admin/painel --spec=false
ng g c admin/clientes --spec=false

# Criando as paginas filhas do client
ng g c client/painel --spec=false
ng g c client/produtos --spec=false

# Videopicker
ng g c client/videopicker --spec=false
ng g m client/videopicker/videopicker --flat --spec=false
ng g m client/videopicker/videopicker-routing --flat --spec=false
ng g c client/videopicker/dashboard --spec=false
ng g c client/videopicker/produtos --spec=false


## Fontes
https://angular.io/tutorial/toh-pt5
https://angular.io/guide/router