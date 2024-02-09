import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = Router();

/**
 * Retrieve information about an Event
 */
router.get('/event_details', async (req, res) => {
    const { id } = req.events;
    const user = await prisma.events.findUnique({
        where: { id },
        select: {
            id: true,
            name: true,
        },
    });
    res.json(events);
});

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
        id,
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
    const updated_Event = await prisma.events.update({
        where: { id },
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
        select: {
            id: true,
            name: true,
        },
    });
    res.json(events);
});