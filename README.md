# CRUD Operations on Array of Items

## Task 1

Develop a frontend for CRUD operations on an array of items using HTML, CSS, Express.js and REST API.

## Technologies Used

- HTML
- CSS
- JavaScript
- Node.js
- Express.js
- REST API
- Postman

## Project Description

This project implements CRUD operations on an array of items.

Each item contains:

- ID
- Name
- Price

The frontend provides a form to add items and a table to display, edit and delete items.

## CRUD Operations

| Operation | HTTP Method | API Endpoint |
|-----------|-------------|--------------|
| Create | POST | `/api/items` |
| Read | GET | `/api/items` |
| Update | PUT | `/api/items/:id` |
| Delete | DELETE | `/api/items/:id` |

## Project Structure

```text
crud-array-rest-api
│
├── public
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md

How to Run
1. Install dependencies
npm install

2. Start the server
node server.js

3. Open the application
http://localhost:3000

REST API Testing
The REST API was tested using Postman.
GET
GET http://localhost:3000/api/items

POST
POST http://localhost:3000/api/items

Example JSON:
{
    "name": "Pencil",
    "price": 10
}

PUT
PUT http://localhost:3000/api/items/3

Example JSON:
{
    "name": "Pencil Box",
    "price": 50
}

DELETE
DELETE http://localhost:3000/api/items/3

Features
- Add new items
- Display all items
- Edit existing items
- Delete items
- REST API implementation
- Array-based data storage
- Postman API testing

Save the file.

---

# STEP 4 — Check Git status

In the terminal, run:

```powershell
git status

You may see something like:
Untracked files:
    .gitignore
    README.md
    public/
    server.js
    package.json
    package-lock.json

If you already committed some files earlier, that's okay. Git will only show the changes that still need to be committed.