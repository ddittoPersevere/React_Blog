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

    const sql = `DELETE FROM  WHERE `

    con.query(sql, (err,res) => {
        if(err) throw err
        console.log(res)
    })

    con.end()
})