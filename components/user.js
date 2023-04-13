let express = require('express')
let router_user = express.Router()
let mysql = require('mysql2')


let connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'react_node'
})

router_user.get('/',(req,res,next)=>{
    connection.query(
        'SELECT * FROM users', (err,data,fields)=>{
            res.json(data)
        }
    )
})

router_user.get('/:id', (req,res,next)=>{
    const id = req.params.id
    connection.query(
        'SELECT * FROM users WHERE id = ?',
        [id],
        (err,data)=>{
            res.json(data)
        }
    )
})

router_user.post('/',(req,res,next)=>{
    connection.query(
        `INSERT INTO users (fname,lname,email,password) VALUES
        (?,?,?,?)`,
        [req.body.fname, req.body.lname, req.body.email, req.body.password],
        (err, data)=>{
            res.json(data)
        }
    )
})

router_user.put('/',(req,res,next)=>{
    connection.query(
        'UPDATE users SET fname=?, lname=? WHERE id = ?',
        [req.body.fname, req.body.lname, req.body.id],
        (err,data)=>{
            res.json(data)
        }
    )
})

router_user.delete('/',(req,res,next)=>{
    connection.query(
        'DELETE FROM users WHERE id = ?',
        [req.body.id],
        (err,data)=>{
            res.json(data)
        }
    )
})



module.exports = router_user