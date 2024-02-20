const app = require('express').Router()
const Signupmodel = require('../model/Signup');


  //Signup
  
  const Registermodel=require('./Signup')



  app.post('/registerview', async (request, response) => {
    const { username, email, password } = request.body;
    
      try {
        
        // Basic validation
        if (!username || !email || !password) {
          return response.status(400).json({ message: 'All fields are required' });
        }
    
        // Check if the email already exists
        const existingUser = await Registermodel.findOne({ email });
        if (existingUser) {
          return response.status(400).json({ message: 'Email already registered' });
        }
        // Create a new user
      const newUser = new Registermodel({ username, email, password });
      await newUser.save();
  
      response.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error(error);
      response.status(500).json({ message: 'Internal Server Error' });
    }
  });
  

  module.exports = app