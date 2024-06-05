import mongoose from 'mongoose';
// import mongoose from 'mongoose';
import express from 'express';
// const cors = require('cors')
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';


dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log('mongodb is connected')
})
.catch((err) => {
  console.log(err);
});

const app = express()
const port = 3000

// app.use(cors());
app.use(express.json())

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


app.use('/api/user', userRoutes )
app.use('/api/auth', authRoutes);
