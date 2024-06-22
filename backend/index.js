const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://imparag2812:qwerty123@cluster0.utjbg9s.mongodb.net/edoc', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log('Connected to MongoDB');
  }).catch(err => {
    console.error('Failed to connect to MongoDB', err);
  });


  //ROUTES

  const userRoutes = require('./routes/user');
  app.use('/api/users', userRoutes);

  app.listen(PORT,()=>{
    console.log(`Server is running on port no: ${PORT}`);
  });