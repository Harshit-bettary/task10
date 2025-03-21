const express = require('express');
const mongoose = require('mongoose');
const recipeRoutes = require('./routes/recipeRoutes');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/recipes', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.use('/api/recipes', recipeRoutes);

const config={
  PORT: 3000,
  MONGO_URI: 'mongodb://localhost:27017/recipes'
}
try{
  app.listen(config.PORT,()=>{
    console.log(`Server is running on port ${config.PORT}`);
  });
} catch (error) { 
  console.log('Error occurred:', error.message);
}