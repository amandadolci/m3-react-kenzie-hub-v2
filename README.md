# Kenzie Hub - Parte 1 (Cadastro e Login)

- Para deixar toda experiência refinada e fazer as notificações de sucesso e erro com mais facilidade, você pode utilizar o Toastfy

## Registro de usuário

1. Crie um formulário utilizando React Hook Form e Zod;
2. Faça as validações necessárias:
   - Todos os campos obrigatórios;
   - E-mail precisa ser fornecido no formato adequado;
   - Senha com no mínimo 8 caracteres. Necessário ter letras, números e ao menos um símbolo;
   - Confirmação de senha;
3. Crie a função de cadastro (aplicando no submit do form), realizando uma requisição na rota /users (POST), conforme as orientações da documentação da API
4. Crie notificações de sucesso e erro
5. Em caso de sucesso, redirecione o usuário para a tela de login

## Login de usuário

1. Novamente, crie um formulário utilizando React Hook Form e Zod
2. Nesse formulário serão necessários somente validações de campo obrigatório (tanto e e-mail, quanto em senha)
3. Crie um estado de carregamento (loading) na rota de login, e um estado de usuário (user) de forma global
4. Crie a função de login, realizando uma requisição na rota /sessions (POST), conforme as orientação da documentação da API
5. Crie notificação
6. Em caso de sucesso, armazene o data.user no estado user, o data.token e data.user.id em chaves diferentes no localStorage(@TOKEN, @USERID), feito isso, redirecione o usuário para o dashboard

## Dashboard

1. Renderize as informações de nome e módulo do usuário na tela de dashboard
2. Crie uma função de logout, limpando o estado user e as chaves no localStorage(@TOKEN, @USERID)

#

# Kenzie Hub - Parte 2

## Refatorando:

1. Comece criando um contexto chamado de UserContext, feito isso, traga todas as funcionalidades e estados referentes ao usuário para este contexto (Login e Cadastro)
2. Crie um componente chamado Providers para centralizar os seus contextos e envolva o componente App com este componente
3. Substitua toda a passagem de props na aplicação relacionada aos estados e funcionalidades centralizados em UserContext

## Criando o Autologin:

- Ao realizar login e atualizar a página, o usuário continuará logado

1. No contexto UserContext, crie um useEffect de montagem, neste efeito realize uma requisição na rota /profile (GET)
2. Envolva a requisição com uma condicional verificando se o token ( colhido do localStorage) é válido.
3. Assim como na função de Login, o resultado da requisição deverá armazenar as informações do usuário no estado user
4. Em caso de erro (em catch), faça a limpeza da @TOKEN do localStorage.

## Dashboard

1. Cadastro de tecnologias: A aplicação permite o usuário logado cadastre tecnologias
2. Renderização e Deleção de tecnologias: A aplicação permite que o usuário logado visualize e delete as próprias tecnologias
3. A aplicação permite o usuário logado editar tecnologias

   ## Interagindo com as tecnologias:

   1. Comece renderizando as tecnologias do usuário, elas já estão na resposta que vem das funcionalidades de Login e Autologin;
   2. Crie um modal (AddModal) para ser renderizado por meio de renderização condicional
   3. Neste modal, crie um formulário e realize as validações e coleta de dados, utilizando Hook Form/Zod
   4. Prosseguindo, crie um novo contexto chamado TechContext, neste criaremos duas funcionalidades, que deverão ter loading e toast de erro:
      - Uma função de criação de tecnologias, realizando uma requisição na rota /users/techs (POST)
      - Uma função de exclusão de tecnologias, realizando uma requisição na rota /users/techs/:tech_id (DELETE)
   5. Você deve criar um novo modal para atualização de tecnologia, que será aberto ao clicar na respectiva tecnologia
      - Dicas:
        - Faça o modal carregar as informações da respectiva tecnologia nos inputs
        - Desabilite o input cujo o dado não pode ser alterado

   - OBS: Ambas as rotas são privadas, por isso não esqueça de enviar o token (presente no localStorage)
   - OBS 2: não esqueça, é necessário, mesmo com a requisição, atualizar o estado, para que a renderização aconteça instantaneamente na interface.
