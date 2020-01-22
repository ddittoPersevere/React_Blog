const mysql = require('mysql')

const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'sscssc',
    database:'blog_db'
})

con.connect((error) => {
    if(error) throw error
    console.log("Connected to database")

    const sql = `CREATE TABLE blog_entries (
        id INT AUTO_INCREMENT PRIMARY KEY,
        author VARCHAR(255),
        body VARCHAR(255),
        title VARCHAR(255)
    )`

    con.query(sql, (err,res) => {
        if(err) throw err
        console.log(res)
    })

    con.end()
})