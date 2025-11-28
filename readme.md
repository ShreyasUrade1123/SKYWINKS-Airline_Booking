# ✈️ SkyWinks - Airline Booking Microservices System

A production-ready, microservices-based Airline Booking System designed for scalability, robustness, and performance. It features a modern React frontend and a distributed Node.js backend handling flights, bookings, and authentication.

## ✨ Features

### 🎯 Core Capabilities
-   **Microservices Architecture**: Decoupled services for Flights, Bookings, and Authentication.
-   **API Gateway**: Centralized entry point with rate limiting and request routing.
-   **Flight Management**: Search and manage flight schedules and inventory.
-   **Booking System**: Secure booking processing with asynchronous handling using RabbitMQ.
-   **User Authentication**: JWT-based secure authentication and authorization.
-   **Interactive Frontend**: Premium React application with GSAP animations and dark mode.

### 🛡️ Production Features
-   ✅ **Scalable Architecture**: Independent deployment and scaling of services.
-   ✅ **Message Queuing**: RabbitMQ for reliable asynchronous communication (e.g., booking confirmations).
-   ✅ **Database Isolation**: Separate MySQL databases for distinct services.
-   ✅ **Security**: Rate limiting, JWT verification, and secure password hashing.
-   ✅ **Cron Jobs**: Automated tasks for booking expiration and cleanup.

## 📋 Table of Contents
-   [Architecture](#-architecture)
-   [Prerequisites](#-prerequisites)
-   [Installation](#-installation)
-   [Quick Start](#-quick-start)
-   [Usage](#-usage)
-   [Configuration](#-configuration)
-   [Troubleshooting](#-troubleshooting)
-   [Project Structure](#-project-structure)

## 🏗️ Architecture

```mermaid
graph TD
    User[User / Client] --> Gateway[API Gateway]
    
    subgraph "Frontend"
        UI[React App (SkyWinks)]
    end
    
    User -.-> UI
    UI --> Gateway
    
    subgraph "Backend Services"
        Gateway --> Auth[Auth Middleware]
        Gateway --> FlightService[Flight Service]
        Gateway --> BookingService[Booking Service]
        
        BookingService -- "Async Events (RabbitMQ)" --> Queue[Message Queue]
    end
    
    subgraph "Data Layer"
        FlightService --> FlightDB[(MySQL - Flights)]
        BookingService --> BookingDB[(MySQL - Bookings)]
    end
```

### Component Overview
-   **Frontend (`frontend-airline-app`)**: React + Vite application for user interaction.
-   **API Gateway (`API_Gateway`)**: Node.js/Express server acting as the single entry point. Handles routing and authentication.
-   **Flight Service (`Flight_Service`)**: Manages flight data, airports, and cities.
-   **Booking Service (`Booking_Service`)**: Handles ticket booking, payments (stub), and integrates with RabbitMQ for async processing.

## 📦 Prerequisites

### Required Software
-   **Node.js**: v16 or higher
    ```bash
    node --version
    ```
-   **MySQL**: Database server
-   **RabbitMQ**: Message broker (for Booking Service)

## 🚀 Installation

### 1. Clone the Repository
```bash
git clone <repository-url>
cd Airline
```

### 2. Install Dependencies
You need to install dependencies for **each** service.

**Frontend:**
```bash
cd frontend-airline-app
npm install
cd ..
```

**API Gateway:**
```bash
cd API_Gateway
npm install
cd ..
```

**Flight Service:**
```bash
cd Flight_Service
npm install
cd ..
```

**Booking Service:**
```bash
cd Booking_Service
npm install
cd ..
```

## ⚡ Quick Start

### Step 1: Database Setup
Ensure your MySQL server is running. You may need to create databases for each service (e.g., `flights_db`, `bookings_db`) and run migrations if configured in `sequelize`.

### Step 2: Start Backend Services
Open separate terminals for each service:

**Terminal 1 (API Gateway):**
```bash
cd API_Gateway
npm run dev
```

**Terminal 2 (Flight Service):**
```bash
cd Flight_Service
npm run dev
```

**Terminal 3 (Booking Service):**
```bash
cd Booking_Service
npm run dev
```

### Step 3: Start Frontend
**Terminal 4:**
```bash
cd frontend-airline-app
npm run dev
```
Access the app at `http://localhost:5173`

## 📖 Usage

### User Flow
1.  **Register/Login**: Users authenticate via the API Gateway.
2.  **Search Flights**: Query the Flight Service for available routes.
3.  **Book Flight**: Submit a booking request. The Booking Service processes this and may queue a task via RabbitMQ.
4.  **My Bookings**: View past and upcoming trips.

## ⚙️ Configuration

Each service has its own configuration (usually a `.env` file).

### Common Variables
| Variable | Description | Default |
| :--- | :--- | :--- |
| `PORT` | Service Port | 3000/3001/3002... |
| `DB_HOST` | MySQL Host | localhost |
| `DB_USER` | MySQL User | root |
| `DB_PASS` | MySQL Password | - |
| `JWT_KEY` | Secret for Tokens | - |
| `RABBITMQ_URL` | Message Queue URL | amqp://localhost |

## 🔧 Troubleshooting

**Issue: "Connection Refused"**
-   Ensure MySQL and RabbitMQ are running.
-   Check if the ports defined in `.env` match the running services.

**Issue: "CORS Error"**
-   Verify that the API Gateway is correctly configured to allow requests from the frontend URL (`http://localhost:5173`).

## 📁 Project Structure

```
Airline/
├── API_Gateway/            # Entry point, Auth, Routing
├── Booking_Service/        # Booking logic, RabbitMQ integration
├── Flight_Service/         # Flight inventory management
├── frontend-airline-app/   # React Frontend
├── .gitignore              # Global git ignore
└── README.md               # This file
```

## 🤝 Contributing
Contributions are welcome! Please fork the repository and submit a pull request.

## 📄 License
This project is licensed under the ISC License.

---
**Happy Flying! ✈️**
