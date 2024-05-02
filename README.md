# Full-Stack CRUD App with React, Node.js, and MySQL

This is a full-stack CRUD (Create, Read, Update, Delete) application built using React for the front end, Node.js for the backend, and MySQL for the database.

## Project Structure

The project is organized into two main directories:

1. **frontend**: Contains the React application files.
2. **backend**: Contains the Node.js server files.

### Frontend

The frontend directory includes the following files:

- **`Home.js`**: React component responsible for displaying the home page with a list of users retrieved from the backend.
- **`App.js`**: Main entry point for the React application, defining the routing configuration using React Router.
- **`Update.js`**: React component for updating user information.
- **`Create.js`**: React component for creating a new user.

### Backend

The backend directory contains the following files:

- **`server.js`**: Node.js server code using Express framework. It defines routes for handling CRUD operations on the MySQL database.
- **`database.sql`**: SQL script for creating the MySQL database and table structure.
- **`package.json`**: Configuration file containing metadata about the Node.js project and its dependencies.

## Installation and Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/zouhour1mechergui/crud_react_node.git
    ```

2. Install dependencies for both frontend and backend:

    ```bash
    cd CRUD_Reactjs_Nodejs/frontend
    npm install react axios react-router-dom
    cd ../backend
    npm install mysql express cors nodemon
    ```

3. Configure the MySQL database:

   - Create a new database named `crud`.
 Execute the SQL script provided in `backend/database.sql` to create the `student` table.
  ```sql
   CREATE DATABASE crud;

   USE crud;

   CREATE TABLE student (
       id INT AUTO_INCREMENT PRIMARY KEY,
       name VARCHAR(255) NOT NULL,
       email VARCHAR(255) NOT NULL,
       phone VARCHAR(20) NOT NULL
   );
```

4. Start the backend server:

    ```bash
    cd ../backend
    npm start
    ```

5. Start the frontend development server:

    ```bash
    cd ../frontend
    npm start
    ```

6. Open your web browser and navigate to `http://localhost:3000` to access the application.

## Usage

- Navigate to `http://localhost:3000` to view the list of users.
- Click on the "Add +" button to create a new user.
- Click on the "Update" button to edit user information.
- Click on the "Delete" button to remove a user from the list.

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvement, please open an issue or submit a pull request.


## Contact

For any questions or feedback, feel free to contact the project maintainer at [zouhour.mechergui3@gmail.com](mailto:your-email@example.com).
