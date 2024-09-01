# Auth Service

## Overview

The Auth Service is a component of a Node.js and Express.js application that handles user authentication. It provides functionality for user registration, login, token-based authentication, and admin verification. The service uses JWT (JSON Web Tokens) for authentication and bcrypt for password hashing.

## Features

- **User Registration**: Create new user accounts with email and password.
- **User Login**: Authenticate users and issue JWT tokens.
- **Token-Based Authentication**: Verify JWT tokens to protect routes and identify users.
- **Admin Verification**: Check if a user has admin privileges.
- **Password Encryption**: Securely hash and verify passwords using bcrypt.

## Technologies Used

- **Node.js**: JavaScript runtime for executing server-side code.
- **Express.js**: Web framework for building the API.
- **Sequelize**: ORM for database management.
- **JWT (JSON Web Tokens)**: For secure token-based authentication.
- **bcrypt**: For hashing and verifying passwords.
- **dotenv**: For managing environment variables.

## Project Structure

- **controllers/**: Contains logic for handling HTTP requests and responses.
  - `user-controller.js`
- **middlewares/**: Custom middleware functions for request validation.
  - `auth-request-validators.js`
- **models/**: Sequelize models for interacting with the database.
  - `user.js`
  - `role.js`
- **repository/**: Classes that encapsulate data access logic.
  - `user-repository.js`
- **routes/**: Defines the API endpoints for the authentication service.
  - `auth-routes.js`
- **services/**: Business logic and core functionality related to users.
  - `user-service.js`
- **config/**: Configuration files for environment variables and other settings.
  - `serverConfig.js`
- **utils/**: Utility functions such as error handling.
  - `error-handler.js`

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Mayank-Raj3/FlightAuthService.git
   cd auth-service
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Set up the environment variables:

   Create a `.env` file in the root directory and add your environment variables.

   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASS=yourpassword
   DB_NAME=auth_service
   JWT_KEY=your_jwt_secret_key
   SALT=your_salt_rounds
   ```

4. Run the database migrations:

   ```bash
   npx sequelize-cli db:migrate
   ```

5. Start the server:

   ```bash
   npm start
   ```

   The server will start on `http://localhost:3000`.

## API Endpoints

### Auth Endpoints

- **User Registration**

  - `POST /signup`
  - Request Body: `{ "email": "user@example.com", "password": "yourpassword" }`

- **User Login**

  - `POST /signin`
  - Request Body: `{ "email": "user@example.com", "password": "yourpassword" }`

- **Check Authentication**

  - `GET /isAuthenticated`
  - Headers: `{ "Authorization": "Bearer <token>" }`

- **Check Admin Status**
  - `GET /isAdmin`
  - Headers: `{ "Authorization": "Bearer <token>" }`

## JWT and bcrypt

- **JWT (JSON Web Tokens)**: Used for creating and verifying tokens to secure endpoints and maintain user sessions. Tokens are created using the `jsonwebtoken` library and are signed with a secret key stored in `JWT_KEY`.

- **bcrypt**: Used for hashing passwords before storing them in the database and for comparing hashed passwords during login. Passwords are hashed using a salt defined in `SALT`.

## Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

## License

This project is licensed under the MIT License.

```

This `README.md` includes an overview of the project, details about the technologies used, installation instructions, API endpoints, and information about JWT and bcrypt. Feel free to modify it based on your specific requirements.
```
