# 💰 Wallet Backend API

> A robust backend API for the **Wallet** React Native mobile application. Built with modern technologies to provide a seamless financial transaction experience.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-13AA52?style=for-the-badge&logo=mongodb&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)

---

## 📋 Table of Contents

- [Overview](#overview)
- [🛠️ Technologies](#technologies)
- [✨ Features](#features)
- [📁 Project Structure](#project-structure)
- [🚀 Getting Started](#getting-started)
- [🔧 Configuration](#configuration)
- [📚 API Documentation](#api-documentation)
- [🔐 Security](#security)
- [📝 License](#license)

---

## Overview

This is the production-ready backend server for the **Wallet** mobile application. It provides a complete API for managing financial transactions, user accounts, and real-time data synchronization. The backend is designed with scalability, security, and performance in mind.

---

## 🛠️ Technologies

### Core Framework

- **[Node.js](https://nodejs.org/)** - JavaScript runtime for building scalable server applications
- **[Express.js](https://expressjs.com/)** - Fast, unopinionated web framework for Node.js

### Database & Cache

- **[MongoDB](https://www.mongodb.com/)** - NoSQL database for flexible data storage and transaction records
- **[Upstash Redis](https://upstash.com/)** - Serverless Redis for caching and real-time operations

### Scheduling & Tasks

- **[Node Cron](https://www.npmjs.com/package/node-cron)** - Schedule recurring tasks and background jobs

### Security & Performance

- **Rate Limiting** - Protect API from abuse and DDoS attacks
- **Request Logging** - Track all API calls for debugging and monitoring
- **Response Helpers** - Standardized API responses with proper error handling

### Utilities

- **Date Formatting** - Consistent date/time handling across the application
- **Custom Middleware** - Request validation and authentication

---

## ✨ Features

✅ **Transaction Management** - Create, read, update, and delete transactions with full audit trails

✅ **Rate Limiting** - Prevent API abuse with intelligent rate limiting

✅ **Scheduled Tasks** - Cron jobs for background processing and maintenance

✅ **Real-time Caching** - Redis integration for fast data retrieval

✅ **Error Handling** - Comprehensive error handling and logging

✅ **RESTful API** - Clean and intuitive API endpoints

✅ **Middleware Support** - Extensible middleware system for custom logic

✅ **Environment Configuration** - Flexible configuration for different environments

---

## 📁 Project Structure

```
src/
├── 📄 server.js                          # Main application entry point
│
├── 📂 config/
│   ├── cron.js                          # Scheduled tasks & background jobs
│   ├── db.js                            # MongoDB database connection
│   └── upstash.js                       # Redis/Upstash configuration
│
├── 📂 controllers/
│   └── transactionController.js         # Transaction business logic
│
├── 📂 middleware/
│   └── rateLimiter.js                   # Rate limiting middleware
│
├── 📂 models/
│   └── Transaction.js                   # Transaction data model (schema)
│
├── 📂 routes/
│   └── transactionRoutes.js             # API route definitions
│
└── 📂 utils/
    └── helpers/
        ├── dateFormat.js                # Date formatting utilities
        ├── logger.js                    # Application logging
        └── responseHelper.js            # Standard API response format
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** - Package manager
- **MongoDB** - Database (local or cloud)
- **Redis/Upstash** - Caching layer

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/arturoCrisanto/rn-backend.git
   cd rn-backend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create environment file**

   ```bash
   cp .env.example .env
   ```

4. **Start the server**
   ```bash
   npm start
   ```

The server will run on `http://localhost:3000` (or your configured port)

### Development Mode

For development with auto-reload:

```bash
npm run dev
```

---

## 🔧 Configuration

Create a `.env` file in the root directory with the following variables:

```env
# Server Configuration
PORT=3000
NODE_ENV=development

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/wallet
DB_NAME=wallet

# Redis/Upstash Configuration
UPSTASH_REDIS_REST_URL=your_upstash_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_token

# Rate Limiting
RATE_LIMIT_WINDOW_MS=15000
RATE_LIMIT_MAX_REQUESTS=100

# Logging
LOG_LEVEL=info
```

---

## 📚 API Documentation

### Transaction Endpoints

#### Create Transaction

```http
POST /api/transactions
Content-Type: application/json

{
  "amount": 100.50,
  "description": "Payment for service",
  "type": "expense",
  "category": "services"
}
```

#### Get All Transactions

```http
GET /api/transactions
```

#### Get Transaction by ID

```http
GET /api/transactions/:id
```

#### Update Transaction

```http
PUT /api/transactions/:id
Content-Type: application/json
```

#### Delete Transaction

```http
DELETE /api/transactions/:id
```

---

## 🔐 Security

- ✅ Rate limiting on all endpoints
- ✅ Input validation and sanitization
- ✅ Environment variable protection
- ✅ CORS configuration
- ✅ Error message sanitization (no sensitive data leaks)
- ✅ Request logging for audit trails

---

## 📦 Scripts

```bash
npm start      # Start production server
npm run dev    # Start development server with auto-reload
npm test       # Run test suite
npm run lint   # Lint code
```

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

<div align="center">

Made with ❤️ for the **Wallet** React Native Application

[⬆ Back to top](#-wallet-backend-api)

</div>
