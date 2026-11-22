const express = require("express");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static("public"));

// Array of items
let items = [
    { id: 1, name: "Book", price: 250 },
    { id: 2, name: "Pen", price: 25 }
];

let nextId = 3;

// GET - Read all items
app.get("/api/items", (req, res) => {
    res.json(items);
});

// POST - Add a new item
app.post("/api/items", (req, res) => {
    const { name, price } = req.body;

    const newItem = {
        id: nextId++,
        name: name,
        price: Number(price)
    };

    items.push(newItem);

    res.status(201).json(newItem);
});

// PUT - Update an item
app.put("/api/items/:id", (req, res) => {
    const id = Number(req.params.id);

    const item = items.find(item => item.id === id);

    if (!item) {
        return res.status(404).json({
            message: "Item not found"
        });
    }

    item.name = req.body.name;
    item.price = Number(req.body.price);

    res.json(item);
});

// DELETE - Delete an item
app.delete("/api/items/:id", (req, res) => {
    const id = Number(req.params.id);

    const index = items.findIndex(item => item.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Item not found"
        });
    }

    const deletedItem = items.splice(index, 1);

    res.json({
        message: "Item deleted successfully",
        item: deletedItem[0]
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});