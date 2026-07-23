# User Management Database App

A full-stack Node.js and Express CRUD web application that allows users to create, view, update, and delete user profiles stored in a MongoDB database with EJS templating.

## 🚀 Features

- **Create User**: Register new users with name, email, and image URL.
- **Read Users**: Display list of all registered users with their details and images.
- **Update User**: Edit existing user details.
- **Delete User**: Remove user records from the database.
- **Dynamic Views**: Server-side rendered views using EJS.

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (via Mongoose ODM)
- **View Engine**: EJS (Embedded JavaScript)
- **Styling**: Static CSS (`public/`)
- **Development Tool**: Nodemon

---

## 📂 Project Structure

```text
Database app/
├── models/
│   └── usermodel.js    # Mongoose schema and model definition
├── public/             # Static files (CSS, images, JS)
├── views/              # EJS template files
│   ├── index.ejs       # Home / Create user view
│   ├── read.ejs        # Display all users view
│   └── edit.ejs        # Edit user view
├── app.js              # Express app setup and route handlers
├── package.json        # Dependencies and scripts
└── README.md           # Project documentation
```

---

## 📋 Prerequisites

Make sure you have the following installed on your machine:

1. **[Node.js](https://nodejs.org/)** (v14+ recommended)
2. **[MongoDB](https://www.mongodb.com/)** running locally on default port `27017` (or updated in `models/usermodel.js`).

---

## 📦 Installation & Setup

1. **Clone or Navigate to the project directory**:
   ```bash
   cd "Database app"
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start MongoDB**:
   Ensure MongoDB service is running on your machine:
   ```text
   mongodb://127.0.0.1:27017/testapp1
   ```

---

## 🏃 Running the Application

### Development Mode (with Nodemon auto-reload)
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

Once started, open your browser and navigate to:
```text
http://localhost:3000
```

---

## 🛣️ Application Routes

| Method | Route | Description |
| :--- | :--- | :--- |
| `GET` | `/` | Renders home page (`index.ejs`) with user creation form |
| `POST` | `/create` | Creates a new user in MongoDB and redirects to `/read` |
| `GET` | `/read` | Retrieves and displays all users (`read.ejs`) |
| `GET` | `/edit/:id` | Renders edit page (`edit.ejs`) for a specific user |
| `POST` | `/update/:id` | Updates user details in MongoDB and redirects to `/read` |
| `GET` | `/delete/:id` | Deletes user from MongoDB and redirects to `/read` |

---

## 📄 License

ISC License
