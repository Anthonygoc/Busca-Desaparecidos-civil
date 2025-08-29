# Projeto de Consulta de Pessoas Desaparecidas - PJC-MT

## Visão Geral

Esta é uma Single Page Application (SPA) desenvolvida em Angular, criada como solução para o projeto prático do programa DESENVOLVE MT. O sistema consome a API da Polícia Judiciária Civil de Mato Grosso para fornecer uma interface pública para a consulta de registros de pessoas desaparecidas e localizadas.

O objetivo é oferecer uma ferramenta intuitiva e eficiente para que os cidadãos possam auxiliar na busca por pessoas desaparecidas.

## ✨ Funcionalidades

* **Consulta Paginada:** Exibição dos registros em formato de cards, com sistema de paginação para navegar entre os resultados.
* **Busca por Filtros:** Formulário de busca avançada que permite filtrar os resultados por nome, faixa etária, sexo e status (desaparecido/encontrado), utilizando os parâmetros suportados pela API.
* **Estatísticas em Tempo Real:** Apresentação de contadores de pessoas localizadas e desaparecidas, atualizados dinamicamente a partir da API.
* **Página de Detalhes:** Navegação para uma visão detalhada de cada registro, exibindo informações completas da pessoa.
* **(Em Desenvolvimento) Envio de Informações:** Funcionalidade para que o cidadão possa enviar novas informações sobre uma pessoa desaparecida.

## 🚀 Tecnologias Utilizadas

* **Angular v17+**
* **TypeScript**
* **SCSS** para estilização
* **Docker** para containerização
* **GitHub Actions** para CI/CD (Integração e Entrega Contínua)

## 📦 Execução do Projeto

Siga os passos abaixo para configurar e executar o projeto em seu ambiente.

### Pré-requisitos

* Node.js (versão 20.x LTS recomendada)
* Angular CLI (instalado globalmente via `npm install -g @angular/cli`)
* Docker (para execução em container)

### 1. Execução Local

1.  Clone o repositório:
    ```bash
    git clone [https://github.com/Anthonygoc/Busca-Desaparecidos-civil.git](https://github.com/Anthonygoc/Busca-Desaparecidos-civil.git)
    ```

2.  Navegue até a pasta do projeto:
    ```bash
    cd Busca-Desaparecidos-civil
    ```

3.  Instale as dependências:
    ```bash
    npm install
    ```

4.  Inicie o servidor de desenvolvimento:
    ```bash
    ng serve
    ```

5.  Abra seu navegador e acesse `http://localhost:4200/`.

### 2. Execução via Docker

O projeto inclui um `Dockerfile` para execução em um ambiente containerizado.

1.  Construa a imagem Docker:
    ```bash
    docker build -t busca-desaparecidos-pjc .
    ```

2.  Execute o container:
    ```bash
    docker run -p 8080:8080 busca-desaparecidos-pjc
    ```

3.  Abra seu navegador e acesse `http://localhost:8080/`.

## ⚙️ CI/CD (Integração e Entrega Contínua)

O repositório está configurado com um workflow de GitHub Actions (`.github/workflows/build-push.yml`) que automatiza o processo de build da aplicação e da imagem Docker. A cada `push` para as branches `master` ou `develop`, a Action é acionada para:
1.  Instalar as dependências do Node.js.
2.  Realizar o build de produção da aplicação Angular.
3.  Construir a imagem Docker.
4.  Publicar a imagem no GitHub Container Registry (GHCR).

## 📂 Estrutura do Projeto

A estrutura de arquivos principal da aplicação segue as convenções do Angular, organizada para escalabilidade e manutenção.

```
src/app/
├── core/
│   └── services/
│       └── api.service.ts      # Serviço central para todas as requisições HTTP
├── pages/
│   ├── home/                   # Componente da página inicial (busca e listagem)
│   └── person-details/         # Componente da página de detalhes
├── shared/
│   ├── components/
│   │   └── person-card/        # Card reutilizável para exibir cada pessoa
│   └── models/
│       └── person.model.ts     # Interfaces e tipos (Person, Statistics, etc.)
├── app.config.ts               # Configurações da aplicação (rotas, providers)
├── app.routes.ts               # Definição das rotas da aplicação
└── ...
```

## 📄 Documentação da API

A API utilizada neste projeto é fornecida pela Polícia Judiciária Civil de Mato Grosso. A documentação completa dos endpoints, modelos e parâmetros está disponível na interface Swagger:

* **URL do Swagger:** [https://abitus-api.geia.vip/swagger-ui/index.html](https://abitus-api.geia.vip/swagger-ui/index.html)

## 👤 Autor

* **Nome:** [Anthony Gabriel Oliveira Cruz]
* **Contato:** [anthonygabrieloliveiracruz@gmail.com]
