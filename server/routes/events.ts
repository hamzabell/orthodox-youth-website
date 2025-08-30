import express from 'express';
import { getDatabase } from '../models/database.ts';

const router = express.Router();

// Get all events or filter by status
router.get('/', async (req, res) => {
  try {
    const db = getDatabase();
    const { status = 'active', upcoming = 'true' } = req.query;
    
    let query = 'SELECT * FROM events WHERE status = ?';
    let params: any[] = [status];
    
    // Filter for upcoming events
    if (upcoming === 'true') {
      query += ' AND event_date >= datetime("now")';
    }
    
    query += ' ORDER BY event_date ASC';
    
    const events = await db.all(query, params);
    res.json({ success: true, data: events });
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch events' });
  }
});

// Get single event by ID
router.get('/:id', async (req, res) => {
  try {
    const db = getDatabase();
    const { id } = req.params;
    
    const event = await db.get('SELECT * FROM events WHERE id = ?', [id]);
    
    if (!event) {
      return res.status(404).json({ success: false, error: 'Event not found' });
    }
    
    res.json({ success: true, data: event });
  } catch (error) {
    console.error('Error fetching event:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch event' });
  }
});

// Create new event (admin only)
router.post('/', async (req, res) => {
  try {
    const db = getDatabase();
    const {
      title,
      description,
      event_date,
      end_date,
      location,
      capacity = 0,
      category = 'general',
      featured_image,
      registration_link
    } = req.body;
    
    if (!title || !event_date) {
      return res.status(400).json({ 
        success: false, 
        error: 'Title and event date are required' 
      });
    }
    
    const result = await db.run(
      `INSERT INTO events (title, description, event_date, end_date, location, capacity, category, featured_image, registration_link)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [title, description, event_date, end_date, location, capacity, category, featured_image, registration_link]
    );
    
    res.status(201).json({ 
      success: true, 
      data: { id: result.lastID },
      message: 'Event created successfully' 
    });
  } catch (error) {
    console.error('Error creating event:', error);
    res.status(500).json({ success: false, error: 'Failed to create event' });
  }
});

export default router;