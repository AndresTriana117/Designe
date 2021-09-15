const express = require ('express');
const server = express();
const cors = require('cors');
server.use(cors());
var mes =',,';
const mysql = require('mysql');
//const bodyParser = require('body-parser');
//server.use(bodyParser.json());

//var DATO1=null;

const db = mysql.createConnection({
host  : 'kortana-1.cbpc4svbnopz.us-east-2.rds.amazonaws.com',
port: '3306',
user  : 'admin',
password  : 'Qndres117',
database  : 'DB-design',
});

db.connect((err) => {
if (err){
    throw err;
}
console.log('MySQL Connected');
})

db.end()

//server.listen(49000, () => console.log('Server on port 49000'));




/*server.listen(51000, () => console.log('Server on port 51000'));
const dgram = require('dgram');
var sniffer = dgram.createSocket('udp4');
sniffer.on('message',(msg,rinfo) => {
    mes = msg.toString();
    //console.log(msg)
})

server.get('/mensaje', (req,res) =>{
    if (mes===',,'){
        return res.send('No ha cambiado el valor del mensaje')
    }else
        return res.send({
            mes
        })
          
  });  

sniffer.bind(49000);