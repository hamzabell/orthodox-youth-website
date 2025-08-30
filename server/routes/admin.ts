import express from 'express';
import { getDatabase } from '../models/database.ts';

const router = express.Router();

// Basic admin endpoint (authentication would be added later)
router.get('/dashboard', async (req, res) => {
  try {
    const db = getDatabase();
    
    // Get dashboard statistics
    const stats = {
      totalEvents: await db.get('SELECT COUNT(*) as count FROM events WHERE status = "active"'),
      upcomingEvents: await db.get('SELECT COUNT(*) as count FROM events WHERE status = "active" AND event_date >= datetime("now")'),
      totalGalleryImages: await db.get('SELECT COUNT(*) as count FROM gallery WHERE status = "active"'),
      totalBlogPosts: await db.get('SELECT COUNT(*) as count FROM blog_posts WHERE status = "published"'),
    };
    
    res.json({ success: true, data: stats });
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch dashboard data' });
  }
});

export default router;