import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();
const router = Router();

router.get('/volunteers', async (req, res) => {
    const volunteers = await prisma.volunteer.findMany();
    res.json(volunteers);
}
);

// Get volunteer details
router.get('/details', async (req, res) => {
    // Change to req.id once got state management
    const id = req.body.id; 
    console.log('id', id);
    try {
        const volunteer = await prisma.volunteer.findUnique({
            where: { id }, 
            select: {
                id: true,
                email: true,
                firstname: true,
                lastname: true,
            },
        });
        res.json(volunteer);
    } catch (error) {
        console.error("Error retrieving volunteer details:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Update volunteer details
router.put('/details', async (req, res) => {
    //const { id } = req.id;
    const { id, email, firstname, lastname } = req.body;
    const volunteer = await prisma.volunteer.update({
        where: { id },
        data: { email, firstname, lastname },
        select: {
            id: true,
            email: true,
            firstname: true,
            lastname: true,
        },
    });
    res.json(volunteer);
});

// Update volunteer password
router.put('/password', async (req, res) => {
    //const { id } = req.volunteer;
    const {id, oldPassword, newPassword } = req.body;
    const volunteer = await prisma.volunteer.findUnique({
        where: { id },
        include: { sensitiveInformation: true },
    });
    if (!volunteer) {
        return res.status(401).json({ error: 'Invalid volunteer' });
    }
    const passwordCorrect = await bcrypt.compare(oldPassword, volunteer.sensitiveInformation.passwordhash);
    if (!passwordCorrect) {
        return res.status(401).json({ error: 'Invalid password' });
    }
    const passwordHash = await bcrypt.hash(newPassword, 10);
    const updatedUser = await prisma.volunteer.update({
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



router.delete('/delete', async (req, res) => {
    const { id } = req.body; // Extract the id from the request body
    try {
        await prisma.volunteer.delete({
            where: { id: id } // Provide the id as a property of the where object
        });
        res.json({ message: 'User deleted' });
    } catch (error) {
        console.error("Error deleting volunteer:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});




export default router;
