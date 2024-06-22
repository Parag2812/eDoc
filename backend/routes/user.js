const express = require ('express');
const jwt  = require ('jsonwebtoken');
const User = require ('../models/User');
const bcrypt = require('bcryptjs');

const router = express.Router();

//Register Route

router.post('/register', async(req, res) =>{
    try{
        const {email , password } = req.body;

        const user = await User.findOne({email});
            if(user){
                return res.status(400).json({
                    message: 'User already exists'
                });
            }
            const hashedPassword = await bcrypt.hash(password , 10);

            const newUser = new User ({
                email,
                password: hashedPassword,
            });

            await newUser.save();
            res.status(201).json({ message : 'User register successfully'});
    }catch(error){
        res.status(500).json({ message : 'SERVER ERROR'});
    }
});



//Login Route

router.post('/login', async(req, res) => {
    try{
        const {email , password } = req.body;

        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({ message : 'User does not exits in database'});
        }

        const isMatch = await bcrypt.compare(password , user.password);
        if(!isMatch){
            return res.status(400).json({message : 'YOU HAVE ENTERED INVALID PASSWORD'});
        }
        //const token = jwt.sign({id: user._id}, process.env.SECRET_KEY ,
        const token = jwt.sign({ id: user._id}, 'your_jwt_secret');
        res.json({token, user : {id: user._id, email: user.email } });

    }catch(error){
        res.status(500).json({message : 'server down'});
    }
});

module.exports = router;