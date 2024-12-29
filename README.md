# Firebase Node.js Project

This project is a Node.js web application integrated with Firebase Firestore to manage user data. It allows users to submit their details via a form, store them in Firestore, and display all stored data dynamically in a Bootstrap-styled interface.

## Features

- Submit user data through a form
- Store data in Firebase Firestore
- Fetch and display all user data in a styled table
- Fully responsive design using Bootstrap

---

## Installation and Setup

### Prerequisites

1. Node.js installed
2. Firebase project with Firestore enabled

### Steps to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/Gauravkumarsingh00/firebase_project.git
   ```
2. Navigate to the project directory:
   ```bash
   cd firebase_project
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a Firebase project and add your configuration in `config.js`.
5. Start the server:
   ```bash
   node app.js
   ```
6. Open the application in your browser:
   ```plaintext
   http://localhost:3000
   ```

---

## API Endpoints

### POST `/api/create`

- **Description:** Adds a new user to Firestore
- **Request Body:**
  ```json
  {
    "name": "Gaurav",
    "age": 25,
    "role": "Backend Developer"
  }
  ```
- **Response:** Redirects to `/api/users`

### GET `/api/users`

- **Description:** Fetches all users from Firestore and displays them in a table

---

## Templates

### 1. **`index.ejs`**

Form for submitting user data:

- Fields: Name, Age, Role
- Styled using Bootstrap

### 2. **`users.ejs`**

Displays all users in a Bootstrap-styled table with columns for ID, Name, Age, and Role.

---

## Troubleshooting

### Error: `listen EADDRINUSE: address already in use`

- **Solution:** Change the port in `app.js` to a different one.

### Error: `src refspec main does not match any`

- **Solution:** Ensure you push the correct branch to GitHub using:
  ```bash
  git push origin <branch>
  ```

---

## Future Enhancements

- Input validation for form data
- Add user update and delete functionality
- Deploy the app to Heroku or Vercel

---

## License

This project is licensed under the MIT License. Feel free to use and modify it as needed!
