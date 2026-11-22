let editId = null;

// Load items when page opens
window.onload = loadItems;


// GET - Display all items
async function loadItems() {

    const response = await fetch("/api/items");

    const items = await response.json();

    const tableBody = document.getElementById("itemTableBody");

    tableBody.innerHTML = "";

    items.forEach(item => {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.price}</td>

            <td>
                <button
                    class="edit-btn"
                    onclick="editItem(${item.id}, '${item.name}', ${item.price})">
                    Edit
                </button>

                <button
                    class="delete-btn"
                    onclick="deleteItem(${item.id})">
                    Delete
                </button>
            </td>
        `;

        tableBody.appendChild(row);
    });
}


// POST - Add item
async function addItem() {

    const name = document.getElementById("name").value;

    const price = document.getElementById("price").value;

    if (name === "" || price === "") {
        alert("Please enter name and price");
        return;
    }

    // If editId is null, create a new item
    if (editId === null) {

        await fetch("/api/items", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                name: name,
                price: price
            })
        });

    }

    // Otherwise update existing item
    else {

        await fetch(`/api/items/${editId}`, {

            method: "PUT",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                name: name,
                price: price
            })
        });

        editId = null;

        document.getElementById("submitBtn").textContent = "Submit";
    }

    document.getElementById("name").value = "";

    document.getElementById("price").value = "";

    loadItems();
}


// Edit item
function editItem(id, name, price) {

    editId = id;

    document.getElementById("name").value = name;

    document.getElementById("price").value = price;

    document.getElementById("submitBtn").textContent = "Update";
}


// DELETE - Delete item
async function deleteItem(id) {

    if (!confirm("Are you sure you want to delete this item?")) {
        return;
    }

    await fetch(`/api/items/${id}`, {
        method: "DELETE"
    });

    loadItems();
}