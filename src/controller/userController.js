const userModel = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'THISISISECRETKEY';  

function signup_get(req, res) {
    res.render('signup');
  }
  
function signin_get(req, res) {
    if (req.isAuthenticated) {
        return res.redirect('/dashboard'); 
    }
      res.render('login');
}


const signup = async (req,res) =>{

    const {username,email,password} = req.body;

    try{

        const existingUser = await userModel.findOne({email:email});

        if(existingUser){
            return res.status(400).json({message:'User Email Is already Exist'})
        }

        const hashedPassword = await bcrypt.hash(password,10);

        const result = await userModel.create({
            email:email,
            password:hashedPassword,
            username:username
        });

        const token = jwt.sign({email: result.email,id:result.id},SECRET_KEY);
        res.redirect('/login');

        // res.status(201).json({user:result,token:token});

    }catch(error){
        console.log(error);
        res.status(505).json({message:'something went wrong'});
    }
}


const signin = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const existingUser = await userModel.findOne({ email: email });
  
      if (!existingUser) {
        return res.status(404).json({ message: 'User Not found' });
      }
  
      const matchPassword = await bcrypt.compare(password, existingUser.password);
  
      if (!matchPassword) {
        return res.status(403).json({ message: 'Password Does Not Match' });
      }

      const token = jwt.sign({email:existingUser.email,id: existingUser.id,name:existingUser.username},SECRET_KEY);
      res.cookie('jwt', token);
      res.redirect('/recommendation');

      
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Something went wrong' });
    }
  };


  const dashboard = (req, res) => {
    if (req.isAuthenticated) {
      res.render('dashboard', { user: req.user }); 
    } else {
      res.status(403).send('Access denied');
    }
  };

  const recommendation = (req, res) => {
    if (req.isAuthenticated) {
      res.render('recommendation', { user: req.user }); 
    } else {
      res.status(403).send('Access denied');
    }
  };

  const trending = (req, res) => {
    if (req.isAuthenticated) {
      res.render('trending', { user: req.user }); 
    } else {
      res.status(403).send('Access denied');
    }
  };
  
  const wishlist = (req, res) => {
    if (req.isAuthenticated) {
      res.render('wishlist', { user: req.user }); 
    } else {
      res.status(403).send('Access denied');
    }
  };
  


module.exports = {signin,signup,signup_get,signin_get,dashboard,recommendation,trending,wishlist};




// const token = jwt.sign({ email: existingUser.email, id: existingUser.id }, SECRET_KEY);
      // res.cookie('login', token, { httpOnly: true });
      // res.redirect('/dashboard');