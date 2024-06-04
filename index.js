const mongoose = require('mongoose');
// import mongoose from 'mongoose';
const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log('mongodb is connected')
})

const app = express()
const port = 3000

app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})