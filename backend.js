const express = require('express')
const app = express()
const port = 3000

app.use(express.static('autokepek'))
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//------------------------     Autó lekérdezése
app.get('/auto', (req, res) => {
    const mysql = require('mysql')
    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'nyaralas'
    })
    
    connection.connect()
    
    connection.query('SELECT * from auto', (err, rows, fields) => {
      if (err) throw err
    
      res.send(rows)
    })
    
    connection.end()
  })

//------------------------     Autó lekérdezése
app.get('/auto_evjarat', (req, res) => {
  const mysql = require('mysql')
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nyaralas'
  })
  
  connection.connect()
  
  connection.query('SELECT * from auto_evjarat', (err, rows, fields) => {
    if (err) throw err
  
    res.send(rows)
  })
  
  connection.end()
})


  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })