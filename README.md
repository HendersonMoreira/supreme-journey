# Norte Contábil

Site institucional de uma empresa contábil fictícia, criado como demonstração de uma presença digital para escritórios que atendem empreendedores e pequenas empresas. A página apresenta os serviços, explica como funciona o atendimento e conduz o visitante até um primeiro contato.

O conteúdo evita depender de conhecimento contábil prévio: explica a proposta em linguagem direta e deixa as chamadas para contato visíveis ao longo da navegação. Nome, e-mail e textos são exemplos e devem ser substituídos pelos dados do escritório que for usar o projeto.

## Escopo atual

O site é uma página única, organizada nesta sequência:

1. Capa com carrossel de três mensagens, avanço automático e indicadores clicáveis.
2. Apresentação de serviços contábeis, tributários, de departamento pessoal e abertura de empresa.
3. Apresentação do escritório e das etapas para iniciar o atendimento.
4. Perguntas frequentes em formato expansível.
5. Formulário demonstrativo para contato.

As animações de entrada são acionadas quando os elementos entram na tela e se repetem ao voltar pela página. Os cards de serviços também têm destaque ao passar o mouse ou receber foco pelo teclado. O layout se adapta a telas menores; as animações de rolagem respeitam a preferência de movimento reduzido do dispositivo.

## Tecnologias e estrutura

- **HTML5** organiza o conteúdo em seções semânticas.
- **CSS3** define identidade visual, layout responsivo e animações.
- **JavaScript** controla o formulário demonstrativo, o menu mobile, o ano do rodapé e as animações de rolagem.
- **Bootstrap 5.3.3** fornece o grid, o menu recolhível, o carrossel e o acordeão de perguntas.
- **Bootstrap Icons** e **Google Fonts** fornecem ícones e tipografia.

| Arquivo | Responsabilidade |
| --- | --- |
| `index.html` | Conteúdo, navegação e componentes Bootstrap. |
| `styles.css` | Cores, tipografia, espaçamento, responsividade e animações. |
| `script.js` | Interações do menu e do formulário, ano do rodapé e revelação ao rolar. |
| `README.md` | Documentação do projeto e orientações para execução. |

Bootstrap, ícones, fontes e fotografias são carregados por CDN ou serviços externos. O site precisa de conexão com a internet para exibir esses recursos. Não há dependências locais, etapa de compilação, gerenciador de pacotes ou API neste projeto.

## Executar localmente

1. Abra `index.html` diretamente no navegador; ou
2. Abra a pasta no VS Code e use uma extensão de servidor local, se preferir testar por um endereço HTTP.

Como os arquivos são estáticos, podem ser publicados em uma hospedagem de sites estáticos. Não existe um comando de build ou servidor de aplicação para configurar.

## Fluxo do formulário

O navegador verifica os campos obrigatórios e o formato do e-mail. Quando os dados passam pela validação, a página exibe uma confirmação demonstrativa e limpa os campos.

**Nenhuma solicitação é enviada ou armazenada.** A mensagem de confirmação não significa que o escritório recebeu os dados. Para receber contatos, conecte o formulário a um serviço de formulários ou a um backend e trate a validação também no servidor.

## Preparação para produção

Antes de divulgar o site, revise estes pontos:

- Substitua o nome demonstrativo, o e-mail e os textos por informações verdadeiras do escritório.
- Conecte e teste o envio do formulário; informe claramente ao visitante como os dados serão usados.
- Revise serviços, perguntas frequentes e qualquer afirmação comercial com a equipe responsável.
- Confirme a licença e as condições de uso das fotografias, fontes e demais recursos externos. Considere hospedar localmente os recursos essenciais.
- Teste navegação, formulário e carrossel em celular, desktop e nos navegadores usados pelos clientes.
- Se adicionar analytics, pixels ou outros rastreadores, avalie os requisitos aplicáveis de privacidade, consentimento e política de cookies.

O projeto não inclui backend, armazenamento de dados, integração com WhatsApp, analytics, painel administrativo ou consentimento de cookies. Esses recursos precisam ser definidos e implementados separadamente caso façam parte da publicação final.