const mysql = require('mysql')

const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'sscssc',
    database:''
})

con.connect((error) => {
    if(error) throw error
    console.log("Connected to database")

    const sql = 'CREATE DATABASE blog_db'

    con.query(sql, (err,res) => {
        if(err) throw err
        console.log(res)
    })

    con.end()
})