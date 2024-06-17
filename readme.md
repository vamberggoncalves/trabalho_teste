# Testes Automatizados com Selenium

Este repositório contém testes automatizados utilizando Selenium para interagir com um site específico e validar suas funcionalidades.

## Objetivo

Desenvolver habilidades práticas na criação e execução de testes automatizados para aplicações web utilizando Selenium.

## Site Escolhido

O site escolhido para os testes é [Connect Parts](https://www.connectparts.com.br).

## Funcionalidades Testadas

1. **Seleção e Clique no Produto:**
   - Localiza o botão do produto específico usando XPath.
   - Clica no botão para acessar a página do produto.
   - Assert: Confirma se o produto é selecionado corretamente.

2. **Cálculo de Frete:**
   - Realiza scroll para baixo na página.
   - Localiza o campo de CEP e insere um CEP válido.
   - Pressiona Enter para calcular o frete.
   - Assert: Confirma se o cálculo do frete é realizado corretamente.

3. **Adição de Item ao Carrinho:**
   - Localiza e clica no botão para adicionar o produto ao carrinho.
   - Assert: Confirma se o produto é adicionado corretamente ao carrinho.

4. **Remoção de Item do Carrinho:**
   - Localiza e clica no botão para remover o item do carrinho usando o ID específico do item.
   - Fecha o carrinho clicando no ícone de fechar.
   - Assert: Confirma se o item é removido corretamente do carrinho.

5. **Pesquisa de Produto:**
   - Realiza scroll para cima na página.
   - Localiza o campo de pesquisa e insere o termo "Placa".
   - Pressiona Enter para realizar a pesquisa.
   - Assert: Confirma se a pesquisa retorna resultados esperados.

## Ferramentas Utilizadas

- Selenium WebDriver
- Mocha (para execução dos testes)
- Chai (para asserções)
- dotenv (para configuração de variáveis de ambiente)

## Instruções de Execução

1. Clone este repositório: 
```
git clone https://github.com/vamberggoncalves/trabalho_teste.git
```
2. Instale as dependências:
```
npm install
```
3. Execute os testes:
```
npm test
```

## Observações

Este projeto foi desenvolvido como parte de um exercício acadêmico/profissional para prática de testes automatizados com Selenium. Qualquer dúvida ou sugestão, entre em contato.
