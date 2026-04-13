# 📋 Cotidian - Gerenciador de Hábitos

Aplicação full-stack para criação e acompanhamento de hábitos diários. Possui backend em Spring Boot e frontend em React, permitindo registro, login e acompanhamento de progresso dos hábitos.

---

## 🚀 Setup do Projeto

### 🔹 Opção 1: Docker (Recomendado)

#### 1. Clone o repositório
```bash
git clone <repo-url>
cd cotidian
```

#### 2. Suba os containers
```bash
docker-compose up --build
```

#### 3. Acesse
- Frontend: http://localhost:5173
- Backend: http://localhost:8080

### 🔹 Opção 2: Setup Local

#### Backend
```bash
cd backend
./mvnw clean install
./mvnw spring-boot:run
```

Backend disponível em: http://localhost:8080

#### Frontend
```bash
cd frontend
npm install
npm run dev
```

Frontend disponível em: http://localhost:5173

---

## ⚙️ Explicação Básica

O sistema é dividido em três partes:

- **Backend**: API REST responsável por autenticação, usuários e hábitos
- **Frontend**: Interface web para interação do usuário
- **Banco de Dados**: Armazena usuários, hábitos e registros diários

---

## 🔐 Autenticação

Utiliza JWT para autenticação, onde o usuário faz login e recebe um token para acessar rotas protegidas.

---

## 📊 Funcionalidades principais

- Criar e gerenciar hábitos
- Marcar hábitos como concluídos diariamente
- Acompanhar progresso
