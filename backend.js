const express = require('express')
const mysql = require('mysql')
const app = express()
const port = 3000
var connection 

function Kapcsolat (){
  connection  = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nyaralas'
  })
  connection.connect()
}





app.use(express.static('kepek'))
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//------------------------     Autó lekérdezése
app.get('/auto', (req, res) => {
    
    Kapcsolat()  
    connection.query('SELECT * from auto', (err, rows, fields) => {
      if (err) throw err
    
      res.send(rows)
    })
    
    connection.end()
  })

  //------------------------     Autó akció lekérdezése
app.get('/auto_akcio', (req, res) => {
    
  Kapcsolat()  
  connection.query('SELECT * from auto where auto_akcio=1', (err, rows, fields) => {
    if (err) throw err
  
    res.send(rows)
  })
  
  connection.end()
})
//------------------------     Autó_évjárat lekérdezése
app.get('/auto_evjarat', (req, res) => {
  
  Kapcsolat()
  connection.query('SELECT * from auto_evjarat', (err, rows, fields) => {
    if (err) throw err
  
    res.send(rows)
  })
  
  connection.end()
})

//------------------------     Szalloda lekérdezése
app.get('/szalloda', (req, res) => {
    
  Kapcsolat()  
  connection.query('SELECT * from szalloda', (err, rows, fields) => {
    if (err) throw err
  
    res.send(rows)
  })
  
  connection.end()
})


//------------------------Elérhetőség lekérdezése
app.get('/elerhetoseg', (req, res) => {
    
  Kapcsolat()  
  connection.query('SELECT * from elerhetoseg', (err, rows, fields) => {
    if (err) throw err
  
    res.send(rows)
  })
  
  connection.end()
})

//----------------


//------------------------     Látványoságok lekérdezése
app.get('/latvanyosag', (req, res) => {
    
  Kapcsolat()  
  connection.query('SELECT * from latvanyosag', (err, rows, fields) => {
    if (err) throw err
  
    res.send(rows)
  })
  
  connection.end()
})

app.post('/keres', (req, res) => {
  kapcsolat()
let parancs="select * from nyaralas where film.cim like '%"+req.body.bevitel1+"%'"
  connection.query(parancs, (err, rows, fields) => {
    if (err) console.log(err)
  else
    res.send(rows)
  })
 
  connection.end()
})




  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })