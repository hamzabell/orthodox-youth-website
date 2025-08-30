import express from 'express';
import { getDatabase } from '../models/database.ts';

const router = express.Router();

// Get gallery images
router.get('/', async (req, res) => {
  try {
    const db = getDatabase();
    const { category, featured } = req.query;
    
    let query = 'SELECT * FROM gallery WHERE status = "active"';
    let params: any[] = [];
    
    if (category) {
      query += ' AND category = ?';
      params.push(category);
    }
    
    if (featured === 'true') {
      query += ' AND is_featured = 1';
    }
    
    query += ' ORDER BY display_order ASC, upload_date DESC';
    
    const images = await db.all(query, params);
    res.json({ success: true, data: images });
  } catch (error) {
    console.error('Error fetching gallery:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch gallery' });
  }
});

export default router;