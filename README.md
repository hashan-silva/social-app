
# Social App

A modern social application built using **React**, **MobX** for state management, and **ASP.NET Core** for the backend. This project demonstrates a CRUD-based activity management system with a focus on scalability, maintainability, and best practices.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Activity Management**: Create, read, update, and delete activities.
- **State Management**: Centralized state management using **MobX**.
- **Backend Integration**: Fully integrated with a RESTful API built using **ASP.NET Core**.
- **Responsive Design**: Optimized for all screen sizes.
- **UUID Integration**: Ensure unique activity identifiers using the `uuid` library.

---

## Technologies Used

### Frontend
- [React](https://reactjs.org/)
- [MobX](https://mobx.js.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Axios](https://axios-http.com/)

### Backend
- [ASP.NET Core](https://dotnet.microsoft.com/en-us/apps/aspnet)
- [Entity Framework Core](https://learn.microsoft.com/en-us/ef/core/)

### Others
- [UUID](https://github.com/uuidjs/uuid) for unique identifiers.
- [Visual Studio Code](https://code.visualstudio.com/) for development.

---

## Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- **Node.js** (v14 or higher) and **npm**.
- **.NET Core SDK** (6.0 or higher).
- **SQL Server** or any other database supported by Entity Framework Core.

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/hashan-silva/social-app.git
    cd social-app
    ```

2. **Set up the frontend**:
    ```bash
    cd client
    npm install
    ```

3. **Set up the backend**:
    - Navigate to the `API` folder.
    - Restore dependencies:
      ```bash
      dotnet restore
      ```
    - Update the database:
      ```bash
      dotnet ef database update
      ```
    - Run the API:
      ```bash
      dotnet run
      ```

4. **Start the frontend**:
    ```bash
    cd client
    npm start
    ```

5. **Access the application**:
    Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```plaintext
social-app/
├── API/               # ASP.NET Core backend
├── client/            # React frontend
│   ├── src/
│   │   ├── components/ # Reusable UI components
│   │   ├── stores/     # MobX stores
│   │   ├── model/      # TypeScript models
│   │   └── api/        # API integration with Axios
├── migrations/        # Database migrations
├── README.md          # Project documentation
└── package.json       # Frontend dependencies
```

---

## Scripts

### Frontend
- `npm start`: Start the development server.
- `npm run build`: Build the application for production.
- `npm test`: Run tests.

### Backend
- `dotnet run`: Run the backend server.
- `dotnet test`: Execute tests.

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b feature-name
    ```
3. Make your changes.
4. Push to your branch:
    ```bash
    git push origin feature-name
    ```
5. Submit a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

If you have any questions or suggestions, feel free to open an issue or contact the repository owner. 🎉
