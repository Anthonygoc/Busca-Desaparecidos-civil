# Projeto de Consulta - Pessoas Desaparecidas (PJC-MT)

Este projeto é uma Single Page Application (SPA) desenvolvida em Angular como parte de um teste prático para a Polícia Judiciária Civil de Mato Grosso. A aplicação consome a API de pessoas desaparecidas para permitir que cidadãos consultem registros e enviem informações adicionais.

## ✨ Funcionalidades Planejadas

* **Consulta de Registros:** Visualização de pessoas desaparecidas e localizadas em formato de cards com paginação.
* **Busca Avançada:** Campo de busca para filtrar registros conforme os parâmetros da API.
* **Página de Detalhes:** Exibição de informações completas sobre um registro específico.
* **Envio de Informações:** Formulário para que o cidadão possa enviar novas informações, como localização e fotos.

## 🚀 Tecnologias Utilizadas

* **Angular v17+**
* **SCSS**
* **TypeScript**
* **Docker**
* **GitHub Actions**

## 📦 Como Executar o Projeto

Siga os passos abaixo para configurar e executar o projeto em seu ambiente local.

### Pré-requisitos

* [Node.js](https://nodejs.org/) (versão 20.x LTS recomendada)
* [Angular CLI](https://angular.io/cli) (instalado globalmente)
* [Docker](https://www.docker.com/products/docker-desktop/) (para executar a versão em container)

### Instalação

1.  Clone o repositório:
    ```bash
    git clone [https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git](https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git)
    ```

2.  Navegue até a pasta do projeto:
    ```bash
    cd policia-civil-app
    ```

3.  Instale as dependências:
    ```bash
    npm install
    ```

### Executando a Aplicação

Para iniciar o servidor de desenvolvimento, execute o comando:

```bash
ng serve
```

Abra seu navegador e acesse `http://localhost:4200/`.

## 🐳 Docker & CI/CD

O projeto está configurado para ser empacotado em um container Docker utilizando Nginx como servidor web.

O workflow de CI/CD no GitHub Actions é acionado a cada `push` nas branches principais, realizando o build da imagem Docker e o push para o GitHub Container Registry (GHCR).

## 📂 Estrutura do Projeto


```
src/app/
├── core/         # Serviços centrais (ex: ApiService)
├── pages/        # Componentes que representam as páginas/rotas
├── shared/       # Componentes, modelos e diretivas reutilizáveis
└── ...
```

