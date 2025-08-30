import express from 'express';
import { getDatabase } from '../models/database.ts';

const router = express.Router();

// Get blog posts
router.get('/', async (req, res) => {
  try {
    const db = getDatabase();
    const { featured, limit = '10' } = req.query;
    
    let query = 'SELECT * FROM blog_posts WHERE status = "published"';
    let params: any[] = [];
    
    if (featured === 'true') {
      query += ' AND is_featured = 1';
    }
    
    query += ' ORDER BY publish_date DESC';
    
    if (limit && !isNaN(Number(limit))) {
      query += ' LIMIT ?';
      params.push(parseInt(limit as string));
    }
    
    const posts = await db.all(query, params);
    res.json({ success: true, data: posts });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch blog posts' });
  }
});

export default router;