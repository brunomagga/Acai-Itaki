**Integrantes**:
Bruno Martin Magalhães   RA: 10752758
Henry Ribeiro Reis    RA: 10752725
Luiz Fernando Nakamura   RA: 10738516
Gustavo Pereira Biasso RA: 10738330


 **Ideação**

A ideia do projeto surgiu a partir da observação de uma necessidade real dentro da nossa própria comunidade. Um dos integrantes do grupo tem um tio que possui uma loja de açaí, e percebemos que o estabelecimento ainda não contava com um site.
Diante disso, identificamos uma oportunidade de aplicar os conhecimentos adquiridos na disciplina para desenvolver uma solução que pudesse beneficiar diretamente esse pequeno empreendedor local.

Para chegar a essa ideia, realizamos um momento de brainstorming em grupo. Inicialmente, discutimos diferentes possibilidades de projetos que atendessem ao caráter extensionista da disciplina. Cada integrante apresentou sugestões baseadas em situações reais que conhecia na comunidade, como pequenos comércios, prestadores de serviço e iniciativas locais que poderiam se beneficiar da tecnologia. Durante essa troca de ideias, analisamos quais propostas seriam viáveis dentro do tempo disponível, quais teriam impacto real e quais permitiriam aplicar de forma prática os conteúdos de HTML5, CSS3 e JavaScript. Foi nesse momento que surgiu a proposta de desenvolver um site para a loja de açaí.

**Caráter extensionistas**

O projeto possui caráter extensionista porque foi desenvolvido para atender a uma necessidade real da comunidade, conectando o conhecimento acadêmico à prática social. A criação do site para a loja de açaí representa uma forma concreta de aplicar os conteúdos aprendidos em sala de aula em benefício de um pequeno empreendedor local. Ao desenvolver essa solução, contribuímos para fortalecer a presença digital do comércio, ampliar sua divulgação e apoiar o empreendedorismo na comunidade. Além disso, ao publicar o projeto no GitHub, possibilitamos que outras pessoas tenham acesso ao trabalho, promovendo o compartilhamento de conhecimento e ampliando o impacto da iniciativa para além da sala de aula.

**TUTORIAL**
# Açaí Itaki — Estrutura do HTML

Este projeto apresenta a estrutura básica de um site para uma loja fictícia chamada **Açaí Itaki**. O objetivo do código é criar a base de uma página web simples utilizando HTML, organizando diferentes seções que normalmente aparecem em sites de produtos ou pequenas lojas online.

O documento começa com a declaração `<!DOCTYPE html>`, que informa ao navegador que o arquivo utiliza o padrão **HTML5**. Logo em seguida aparece a tag `<html>`, que representa a raiz do documento e envolve todo o conteúdo da página.

Dentro da estrutura principal existe a seção `<head>`, responsável pelas configurações da página. Nela encontramos a tag `<meta charset="UTF-8">`, que define a codificação de caracteres permitindo o uso correto de acentos e caracteres especiais. Também está presente a meta tag de **viewport**, utilizada para que o site seja exibido corretamente em dispositivos móveis como celulares e tablets. Há ainda a tag `<link rel="stylesheet">`, que serve para conectar um arquivo CSS externo responsável pela estilização do site. Por fim, a tag `<title>` define o nome que aparece na aba do navegador, que neste caso é **Açaí Itaki**.

Após o head começa a estrutura visível do site dentro da tag `<body>`. A primeira parte é o `<header>`, que representa o cabeçalho da página. Nesse espaço normalmente ficam o logotipo da empresa e o menu de navegação. No código existe uma tag `<img>` destinada ao logo e uma lista `<ul>` contendo itens `<li>` que representam as opções do menu: HOME, PRODUTOS, SOBRE e CONTATO. Esse menu serviria para direcionar o usuário para diferentes partes do site.

Depois do cabeçalho existe uma linha horizontal criada com `<hr>`, usada apenas para separar visualmente o conteúdo. Em seguida aparece a seção principal do site definida pela tag `<section id="principal">`. Essa área funciona como a apresentação inicial da página, mostrando um título chamativo com `<h3>`, uma breve descrição do produto com `<h5>`, um botão de ação (`button`) que pode incentivar o usuário a comprar ou conhecer os produtos e também um espaço para uma imagem do açaí.

Logo abaixo existe outra seção chamada `<section id="linha">`, que funciona como um separador para indicar a área de produtos do site. Dentro dela há uma linha horizontal e o texto **NOSSOS PRODUTOS**, introduzindo a vitrine de itens disponíveis.

A seção `<section id="copos">` contém os produtos que a loja oferece. Cada produto é representado por um `<article>`, que serve para separar conteúdos independentes dentro da página. Em cada artigo aparecem o nome do produto, uma linha de separação, o preço e um botão de compra. Esse botão poderia futuramente levar o usuário para um carrinho de compras ou página de pagamento.

Mais abaixo encontramos o `<article id="sobre">`, que apresenta uma breve descrição sobre o açaí ou sobre a empresa. Dentro dele existe um título `<h4>`, uma linha horizontal `<hr>`, um parágrafo `<p>` contendo o texto descritivo e um botão chamado **Saiba mais**, que poderia direcionar para uma página com mais informações.

Em seguida aparece a seção `<article id="depoimentos">`, dedicada às avaliações dos clientes. Ela possui um título indicando os depoimentos, uma label chamada **AVALIAÇÕES** e um campo `<textarea>` onde os usuários poderiam escrever comentários ou feedbacks sobre o produto.

Depois disso há o `<article id="premium">`, que funciona como uma área de cadastro para receber novidades. Nessa parte o site convida o usuário a assinar um plano ou lista premium para receber descontos especiais. Existe um título, uma breve descrição e um campo `<input type="email">` onde o visitante pode inserir seu endereço de e-mail.

Por fim, o site termina com a tag `<footer>`, que representa o rodapé da página. Dentro dele existem três divisões feitas com `<div>`. A primeira apresenta os produtos mais vendidos, contendo links `<a>` para diferentes itens. A segunda seção mostra informações institucionais como sobre a empresa e política de privacidade. A terceira área exibe informações de contato e redes sociais, como Instagram e telefone.

No geral, esse HTML cria a estrutura básica de um site de apresentação de produtos para uma loja de açaí. Ele organiza o conteúdo em diferentes seções como cabeçalho, apresentação principal, produtos, informações sobre o produto, avaliações de clientes, cadastro para novidades e rodapé. A partir dessa base, é possível adicionar CSS para estilização visual e JavaScript para interações mais avançadas, transformando a página em um site completo e funcional.

#Açaí Itaki – CSS
Este projeto apresenta a estilização completa de uma interface web para uma loja fictícia, utilizando CSS para criar um visual moderno, organizado e responsivo. O objetivo do código é definir a aparência de uma página estruturada em HTML, aplicando cores, espaçamentos, tipografia e layouts adaptáveis para diferentes tamanhos de tela.
O arquivo começa com a declaração `:root`, onde são definidas variáveis globais. Essas variáveis armazenam cores principais, tons de texto, sombras, bordas arredondadas e largura máxima do layout. Isso facilita a manutenção do código, pois permite alterar o visual do site inteiro modificando apenas esses valores centrais.
Em seguida, é aplicado um reset geral utilizando o seletor `*`, removendo margens e espaçamentos padrão dos elementos e definindo `box-sizing: border-box`, o que melhora o controle de tamanhos e espaçamentos. Também são definidos estilos base para elementos como body, img, listas (ul, ol), links (a), botões e campos de formulário, garantindo consistência visual em todos os navegadores.
O body recebe a fonte padrão, cor de fundo e cor de texto, estabelecendo a base visual do site. As imagens são configuradas para serem responsivas com max-width: 100%, enquanto listas e links têm seus estilos padrões removidos para permitir personalização.
A estrutura principal do layout é organizada utilizando uma combinação de Flexbox e CSS Grid. O header, por exemplo, utiliza Flexbox para alinhar o logotipo e o menu de navegação horizontalmente, com espaçamento entre os itens e efeitos de hover que mudam a cor dos links ao passar o mouse.
A seção principal (#principal) utiliza CSS Grid para dividir o conteúdo em duas colunas: uma para textos e botão de ação, e outra para uma imagem de destaque. Os títulos possuem tamanhos responsivos com clamp, permitindo melhor adaptação em diferentes telas. O botão dessa seção, assim como outros do site, possui um gradiente, bordas arredondadas e um efeito de elevação ao passar o mouse.
A seção #linha funciona como um divisor visual, com texto em destaque e uma linha horizontal que se adapta ao espaço disponível, ajudando a organizar o conteúdo da página.
A área de produtos (#copos) também utiliza CSS Grid, exibindo inicialmente três colunas de cards. Cada produto é estilizado como um card com fundo branco, borda suave, sombra e espaçamento interno. Existe ainda um pseudo-elemento : before que simula uma área de imagem no topo de cada card. Os textos dentro dos cards destacam o nome e o preço dos produtos, e o botão ocupa toda a largura na parte inferior.
As seções #sobre, #depoimentos e #premium compartilham um estilo semelhante, com fundo branco, bordas arredondadas, sombra e espaçamento interno. A seção “sobre” contém textos descritivos com largura controlada para melhor leitura. Já a seção de depoimentos inclui um campo textarea estilizado, permitindo que usuários escrevam avaliações.
A área #premium apresenta um layout em grid com duas colunas, combinando texto informativo com um campo de entrada de e-mail estilizado, incentivando o usuário a se cadastrar para receber novidades ou promoções.
O footer é estruturado em três colunas utilizando CSS Grid, cada uma representando um bloco de informações. Cada bloco possui fundo, borda e sombra, mantendo a consistência visual com o restante do site. Os links e textos são organizados verticalmente para facilitar a navegação.
Por fim, o código inclui  **media queries**, que tornam o layout responsivo. Em telas menores, o header passa a se organizar em coluna, os grids são reduzidos (de três para duas ou uma coluna) e os espaçamentos são ajustados para melhorar a experiência em dispositivos móveis como tablets e celulares.
De forma geral, esse CSS define toda a identidade visual de um site de produtos, garantindo um design moderno, consistente e adaptável. Ele complementa a estrutura HTML, transformando uma página simples em uma interface agradável e funcional, pronta para ser expandida com interatividade utilizando JavaScript.


# Açaí Itaki – Java Script
Este projeto apresenta a implementação de interatividade em uma página web da loja fictícia Açaí Itaki, utilizando JavaScript para tornar o site dinâmico e responsivo às ações do usuário. O objetivo do código é adicionar comportamentos como cliques em botões, validação de formulário e envio de depoimentos, melhorando a experiência do usuário.
O código começa com o evento document.addEventListener("DOMContentLoaded", ...) , que garante que todo o HTML seja carregado antes da execução do JavaScript. Isso é importante para evitar erros ao tentar acessar elementos que ainda não existem na página. Logo no início, é exibida uma mensagem no console informando que o sistema foi carregado com sucesso.
Em seguida, o script seleciona todos os botões de compra dentro da seção de produtos (#copos) utilizando document.querySelectorAll. Para cada botão encontrado, é adicionado um evento de clique. Quando o usuário clica em um botão, o código identifica o tamanho do copo correspondente (buscando o texto dentro do elemento `li` do mesmo card) e exibe uma mensagem personalizada informando que o item foi adicionado ao carrinho.
Depois disso, o código trata a funcionalidade de cadastro de e-mail na seção premium (#premium). Ele seleciona o campo de entrada de e-mail e o botão de envio. Em seguida, é criada uma função chamada validarEmail, responsável por verificar se o e-mail digitado contém os caracteres básicos “@” e “.”. Caso o e-mail seja válido, uma mensagem de sucesso é exibida e o campo é limpo. Caso contrário, o usuário é alertado para inserir um e-mail válido.
O campo de e-mail também recebe um evento de teclado (keydown), permitindo que o usuário envie o formulário pressionando a tecla Enter. Além disso, o botão da seção premium também executa a mesma função de validação ao ser clicado, oferecendo duas formas de interação.
Na sequência, o código implementa a funcionalidade de envio de depoimentos. Ele seleciona o botão de envio (btnDepoimento) e o campo de texto (textarea). Quando o botão é clicado, o conteúdo digitado é verificado. Caso esteja vazio, o sistema alerta o usuário para escrever um depoimento antes de enviar. Se houver conteúdo, uma mensagem de sucesso é exibida, o depoimento é registrado no console e o campo é limpo.
De forma geral, esse JavaScript adiciona interatividade essencial ao site, permitindo que o usuário simule a adição de produtos ao carrinho, realize o cadastro de e-mail para receber novidades e envie avaliações. Com isso, a página deixa de ser apenas estática e passa a oferecer uma experiência mais completa e próxima de um sistema real.
                       
<img width="277" height="616" alt="image" src="https://github.com/user-attachments/assets/18e5b9cb-2597-4eb4-8336-6e557b7ecb3a" />

<img width="433" height="650" alt="image" src="https://github.com/user-attachments/assets/5fa4dba0-f207-4218-8ae3-d62b9b049c99" />
