const express = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const router = express.Router();


// Get user details
router.get('/details', async (req, res) => {
    const { id } = req.user;
    const user = await prisma.user.findUnique({
        where: { id },
        select: {
            id: true,
            email: true,
            name: true,
        },
    });
    res.json(user);
});

// Update user details
router.put('/details', async (req, res) => {
    const { id } = req.user;
    const { email, name } = req.body;
    const user = await prisma.user.update({
        where: { id },
        data: { email, name },
        select: {
            id: true,
            email: true,
            name: true,
        },
    });
    res.json(user);
});

// Update user password
router.put('/password', async (req, res) => {
    const { id } = req.user;
    const { oldPassword, newPassword } = req.body;
    const user = await prisma.user.findUnique({
        where: { id },
        include: { sensitiveInformation: true },
    });
    if (!user) {
        return res.status(401).json({ error: 'Invalid user' });
    }
    const passwordCorrect = await bcrypt.compare(oldPassword, user.sensitiveInformation.passwordhash);
    if (!passwordCorrect) {
        return res.status(401).json({ error: 'Invalid password' });
    }
    const passwordHash = await bcrypt.hash(newPassword, 10);
    const updatedUser = await prisma.user.update({
        where: { id },
        data: {
            sensitiveInformation: {
                update: {
                    passwordhash: passwordHash,
                },
            },
        },
        select: {
            id: true,
            email: true,
            name: true,
        },
    });
    res.json(updatedUser);
});



// Delete user
router.delete('/delete', async (req, res) => {
    const { id } = req.user;
    await prisma.user.delete({ where: { id } });
    res.json({ message: 'User deleted' });
});




module.exports = router;
