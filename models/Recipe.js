const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
   },
  ingredients: [{
    type:String,
    required:true
   
   }],
  
   instructions: { 
    type: String, 
    required: true 
   },
   
   category: String,
   
   createdAt: { 
    type: Date, 
    default: Date.now 
   }
});

module.exports = mongoose.model('Recipe', RecipeSchema);
