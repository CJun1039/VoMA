const express = require('express');
const bcrypt = require('bcrypt');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const router = express.Router();


// Register a new volunteer
router.post('/register', async (req, res) => {
    const { firstname, lastname, email, password } = req.body;
    if (!firstname || !lastname || !email || !password) {
        return res.status(400).json({ error: 'Please provide all required information.' });
      }

    // Hashing passwords
    const passwordHash = await bcrypt.hash(password, 10);

    // Create a new volunteer
    try {
        const newVolunteer = await prisma.volunteer.create({
            data: {
              firstname,
              lastname,
              email,
              sensitiveInformation: {
                create: {
                  passwordhash: passwordHash,
                  isAdmin: false,
                },
              },
            },
          });
          res.json(newVolunteer);
        } catch (error) {
          console.error('Error registering user:', error);
          res.status(500).json({ error: 'Internal server error' });
        }
});


// Login a volunteer
router.post('/login', async (req, res) => {
    const {email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'Please provide all required information.' });
    }
  
    // Find the volunteer
    const volunteer = await prisma.volunteer.findUnique({
      where: { email },
      include: { sensitiveInformation: true },
    });
  
    if (!volunteer) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
  
    // Check if the password is correct
    const passwordCorrect = await bcrypt.compare(password, volunteer.sensitiveInformation.passwordhash);
    if (!passwordCorrect) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
  
    // Return the volunteer
    res.json(volunteer);
  
});

module.exports = router;
