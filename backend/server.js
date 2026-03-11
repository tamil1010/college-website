const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Replace with your MongoDB URI if deploying
const mongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/gcee';

mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connection established successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

const apiRouter = require('./routes/api');
app.use('/api', apiRouter);

app.get('/', (req, res) => {
    res.send('API is running.');
});

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
