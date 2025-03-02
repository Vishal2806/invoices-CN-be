### Table of Contents

- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Routes](#api-routes)
    - [Root Route](#root-route)
    - [Invoices](#invoices)
    - [User Authentication](#user-authentication)
- [Live Demo](#live-demo)
- [Live Backend](#live-backend)
- [License](#license)
# Invoices Codenicely Backend

This is the backend application for managing invoices. It provides a set of APIs to create, read, update, and delete invoices.

## Getting Started

### Prerequisites

- Node.js
### Live Demo

You can access the live application at [Invoices Codenicely](https://invoices-codenicely.onrender.com/).

### Prerequisites

- Node.js

### Live Backend

The live backend for this application is available at: [https://invoices-codenicely-be.onrender.com/](https://invoices-codenicely-be.onrender.com/)

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/vishal2806/invoices-codenicely-be.git
    ```
2. Navigate to the project directory:
    ```sh
    cd invoices-codenicely-be
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

### Running the Application

To start the application, run the following command:
```sh
npm run dev
```

The application will be available at `http://localhost:8000`.

### API Routes

#### Root Route

- `GET /` - Returns a welcome message.

#### Invoices

- `GET /api/invoices/all` - Get all invoices
- `POST /api/invoices/add` - Create a new invoice
- `GET /api/invoices/:id` - Get an invoice by ID
- `PATCH /api/invoices/:id` - Update an invoice by ID

#### User Authentication

- `POST /api/user/login` - Login a user
- `POST /api/user/create` - Create a new user

### License

This project is licensed under the MIT License.
