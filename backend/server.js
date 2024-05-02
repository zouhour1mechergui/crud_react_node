const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud"
});

app.get('/', (req, res) => {
    const sql = "SELECT * FROM student"; 
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

// Corrected route path for handling POST request to create a new user
app.post('/create', (req, res) => {
    const sql = "INSERT INTO student (name, phone, email) VALUES (?, ?, ?)";
    const values = [
        req.body.name,
        req.body.phone,
        req.body.email,
    ];
    db.query(sql, values, (err, data) => {
        if (err) return res.json(err);
        return res.json("created");
    });
})
app.put('/update/:id', (req, res) => {
    const sql = "UPDATE student SET name = ?, phone = ?, email = ? WHERE id = ?";
    const id = req.params.id;
    const values = [
        req.body.name,
        req.body.phone,
        req.body.email,
    ];
    db.query(sql, [...values,id], (err, data) => {
        if (err) return res.json(err);
        return res.json("updated");
    });
})
app.delete('/delete/:id', (req, res) => {
    const sql = "DELETE FROM student WHERE id = ?";
    const id = req.params.id;
  
    db.query(sql, id, (err, data) => {
        if (err) return res.json(err);
        return res.json("deleted");
    });
})


app.listen(8081, () => {
    console.log("listening...");
});
 