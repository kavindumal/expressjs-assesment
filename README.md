# Express.js + TypeScript + Prisma ORM Example Project

This repository serves as an example of building a modern backend application using **Express.js** and **TypeScript**, integrated with **Prisma ORM** for database management. The project demonstrates how to structure and implement a robust backend API with clean, maintainable code and includes a Postman API collection for easy testing.

## Features

- **Express.js**: A fast and minimalist web framework for Node.js.
- **TypeScript**: Strongly-typed JavaScript for better developer experience and maintainability.
- **Prisma ORM**: A modern database toolkit to query, migrate, and model your database schema with ease.
- **Postman API Collection**: Predefined requests for testing the API endpoints.
- **Database Integration**: Connects to a relational database (PostgreSQL, MySQL, SQLite, etc.) using Prisma.
- **Clean Code Architecture**: Follows a modular and scalable folder structure.

## Project Setup

### Prerequisites

- **Node.js** (v16 or later)
- **npm** or **yarn**
- A relational database (e.g., PostgreSQL, MySQL, SQLite)
- **Postman** (optional, for API testing)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name

2. Install dependencies:
    ```bash
      npm install
       # or
       yarn install
   
3. Set up environment variables: Create a .env file in the root directory and add the following variables:
    ```env
    DATABASE_URL=your-database-url
    PORT=your-preferred-port
    ```
   
4. Generate Prisma Client:
    ```bash
    npx prisma generate

5. Apply migrations:
    ```bash
    npx prisma generate

6. Start the server:
   ```bash
    npm run dev
    # or
    yarn dev



## How to Use

1. Set up the database connection in `.env`.
2. Run the development server.
3. Use the Postman collection (located in the `postman` folder) to test the API endpoints.

## Dependencies

Key dependencies used in this project:

- **express**: Web framework for Node.js.
- **typescript**: Typed JavaScript.
- **prisma**: ORM for database management.
- **dotenv**: Load environment variables from `.env`.

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Compile TypeScript to JavaScript.
- `npm run start`: Start the production server.
- `npx prisma migrate dev`: Apply Prisma migrations.
- `npx prisma generate`: Generate Prisma client.

## Contributing

Feel free to fork this repository, create a branch, and submit a pull request. Contributions are always welcome!

## License

This project is licensed under the [MIT License](LICENSE).

---

Happy coding! 🎉
