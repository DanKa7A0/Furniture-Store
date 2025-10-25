# 🪑 Furniture Store
A **Node.js + Express.js + MongoDB** REST API project for managing a furniture catalog with user authentication and CRUD operations.  
It allows users to manage their furniture posts, browse the catalog, and maintain personal collections.

## ⚙️ Project Setup
- Install **MongoDB**
- Install **Node.js**
```bash
git clone https://github.com/username/furniture-store.git
cd furniture-store
npm install
npm start
```

| Layer                 | Stack                                    |
| --------------------- | ---------------------------------------- |
| **Backend Framework** | Express.js                               |
| **Database**          | MongoDB with Mongoose                    |
| **Auth & Security**   | bcrypt for password hashing              |
| **Architecture**      | REST API (Controller → Service → Model)  |
| **Frontend Client**   | HTML, CSS, JavaScript                    |
| **Operations**        | Full CRUD + Auth + Personal Dashboard    |

## ✨ Feats
- **Register new user**
- **Login / Logout**
- **Add new furniture**
- **Edit existing furniture**
- **Delete furniture**
- **View all furniture posts**
- **View personal furniture list (My Publications)**
- **Furniture details page**
- **Input validations (Make, Model, Year, Price, Image URL)**
- **Guarded routes for logged users**