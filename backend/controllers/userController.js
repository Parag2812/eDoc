const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// // Registration
//  = async (req, res) => {
//   const { email, name, password, age, address } = req.body;
//   try {
//     const user = new User({ email, name, password, age, address });
//     await user.save();
//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };


// Registration
exports.registerUser = async (req, res) => {
    const { name, email, password, age, address } = req.body;
    try {
        // Check if the email is already in use
        const existingUser = await User.findOne({email});
        if (existingUser){
            return res.status(400).json({message : "Email id is already in use"});
        }


      // Hash the password before saving
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const user = new User({ name ,email, password: hashedPassword, age, address });
      await user.save();
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error("Registration error:", error);
      res.status(500).json({ message: error.message });
    }
  };
// Login
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
    res.status(200).json({ token , name: user.name});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
