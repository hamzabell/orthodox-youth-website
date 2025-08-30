import express from 'express';
import { getDatabase } from '../models/database.ts';

const router = express.Router();

// Get social media platforms
router.get('/', async (req, res) => {
  try {
    const db = getDatabase();
    
    const platforms = await db.all(
      'SELECT * FROM social_media WHERE is_active = 1 ORDER BY display_order ASC'
    );
    
    res.json({ success: true, data: platforms });
  } catch (error) {
    console.error('Error fetching social media:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch social media' });
  }
});

export default router;