import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = Router();

/** 
 * Posts a new Event
 * Name of event is required. EventId would be auto-generated.
 */
router.post('/create_event', async (req, res) => {
    const { 
        name, 
        date, 
        time, 
        hours, 
        cause, 
        numberOfVolunteers, 
        restrictions, 
        location, 
        description, 
        type
    } = req.body;
    if (!name) {
        return res.status(400).json({ error: 'Please provide the Event name.' });
      }

    // Create a new volunteer
    try {
        const new_Event = await prisma.events.create({
            data: {
                name, 
                date, 
                time, 
                hours, 
                cause, 
                numberOfVolunteers, 
                restrictions, 
                location, 
                description, 
                type
            },
          });
          res.json(new_Event);
        } catch (error) {
          console.error('Error registering user:', error);
          res.status(500).json({ error: 'Internal server error' });
        }
});

/** 
 * Updates an event.
 */
router.put('/update_event', async (req, res) => {
    const { 
        name, 
        date, 
        time, 
        hours, 
        cause, 
        numberOfVolunteers, 
        restrictions, 
        location, 
        description, 
        type
     } = req.body;
    const user = await prisma.events.update({
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