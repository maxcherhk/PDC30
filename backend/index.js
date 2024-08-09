const express = require('express')
require('dotenv').config()
const path = require('path');
const https = require('https');
const fs = require("fs");
const cors = require('cors');
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });
const app = express()
const PORT = 3001
const key = fs.readFileSync('./sslcert/key.pem');
const cert = fs.readFileSync('./sslcert/cert.pem');
var bodyParser = require('body-parser');
const server = https.createServer({ key: key, cert: cert }, app);
const { MongoClient, ServerApiVersion } = require('mongodb');
const url = process.env.url
const client = new MongoClient(url);
client.connect()

app.use(cors())
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  return next();
});

app.get('/api', (req, resp)=>{
  resp.send('Node API')
})

server.listen(PORT, () => {
  console.log(`listening 3001`)
})
